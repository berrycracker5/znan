import {
  DeleteItemCommand,
  PutItemCommand,
  QueryCommand,
} from "@aws-sdk/client-dynamodb";
import bcrypt from "bcrypt";
import dayjs from "dayjs-with-plugins";
import { DynamoDB } from "../plugins/DynamoDB.js";

const maskIpAddress = (ip) => {
  const parts = ip.split(".");
  if (parts.length === 4) {
    return `${parts[0]}.***.***.${parts[3]}`;
  }
  return ip; // If not a valid IPv4 address, return as is
};

export const createComment = async (request, reply) => {
  const ip =
    request.headers["x-forwarded-for"]?.toString().split(",")[0] || request.ip;
  const pagePath = request.url;
  const isoTime = dayjs().tz("Asia/Seoul").toISOString();
  const uuid = crypto.randomUUID();
  const commentDate = dayjs().tz("Asia/Seoul").format("YY-MM-DD HH:mm:ss");

  const putCommand = new PutItemCommand({
    TableName: "ZnanTable",
    Item: {
      pk: { S: `COMMENT` },
      sk: { S: `COMMENT#${isoTime}#${uuid}` },
      commentId: { S: uuid },
      text: { S: request.body.text },
      author: { S: request.body.author },
      authorIp: { S: maskIpAddress(ip) },
      commentPassword: {
        S: await bcrypt.hash(request.body.commentPassword, 10),
      },
      date: { S: commentDate },
      isSecret: { BOOL: request.body.isSecret || false },
      page_path: { S: pagePath },
    },
  });

  try {
    await DynamoDB.send(putCommand);
    reply
      .code(200)
      .headers({ "Content-Type": "application/json" })
      .send({ message: "Created comment successfully" });
  } catch (err) {
    console.error(err);
    reply.code(500).headers({ "Content-Type": "application/json" }).send({
      error: err.name,
      message: err.message,
      stack: err.stack,
    });
  }
};

export const getComments = async (request, reply) => {
  try {
    const command = new QueryCommand({
      TableName: "ZnanTable",
      KeyConditionExpression: "pk = :pk AND begins_with(sk, :skPrefix)",
      FilterExpression: "isSecret = :isSecret",
      ExpressionAttributeValues: {
        ":pk": { S: "COMMENT" },
        ":skPrefix": { S: "COMMENT#" },
        ":isSecret": { BOOL: false },
      },
      ScanIndexForward: false, // 최신순 정렬 (내림차순)
    });

    const response = await DynamoDB.send(command);
    const comments = response.Items.map((item) => ({
      commentId: item.commentId.S,
      text: item.text.S,
      author: item.author.S,
      authorIp: item.authorIp.S,
      date: item.date.S,
      isSecret: item.isSecret.BOOL,
    }));

    reply
      .code(200)
      .headers({ "Content-Type": "application/json" })
      .send({ comments });
  } catch (err) {
    console.error(err);
    reply.code(500).headers({ "Content-Type": "application/json" }).send({
      error: err.name,
      message: err.message,
      stack: err.stack,
    });
  }
};

export const deleteComment = async (request, reply) => {
  try {
    const commentId = request.body?.commentId;
    const commentPassword = request.body?.commentPassword;

    if (!commentId || !commentPassword) {
      return reply
        .code(400)
        .headers({ "Content-Type": "application/json" })
        .send({
          error: "Bad Request",
          message: "Missing commentId or commentPassword",
        });
    }

    // Step 1: 해당 댓글 검색 (SK에 commentId가 포함된 항목 찾기)
    const queryResult = await DynamoDB.send(
      new QueryCommand({
        TableName: "ZnanTable",
        KeyConditionExpression: "pk = :pk",
        FilterExpression: "commentId = :cid",
        ExpressionAttributeValues: {
          ":pk": { S: "COMMENT" },
          ":cid": { S: commentId },
        },
      })
    );

    const item = queryResult.Items?.[0];
    if (!item) {
      return reply.code(404).send({ error: "댓글을 찾을 수 없습니다." });
    }

    const isMatch = await bcrypt.compare(
      commentPassword,
      item.commentPassword.S
    );
    if (!isMatch) {
      return reply.code(403).send({ error: "비밀번호가 일치하지 않습니다." });
    }

    // Step 2: 삭제
    await DynamoDB.send(
      new DeleteItemCommand({
        TableName: "ZnanTable",
        Key: {
          pk: { S: "COMMENT" },
          sk: { S: item.sk.S },
        },
      })
    );
    reply
      .code(200)
      .headers({ "Content-Type": "application/json" })
      .send({ message: "Deleted comment successfully" });
  } catch (err) {
    console.error(err);
    reply.code(500).headers({ "Content-Type": "application/json" }).send({
      error: err.name,
      message: err.message,
      stack: err.stack,
    });
  }
};
