import dayjs from "dayjs-with-plugins";
import { DynamoDB } from "../plugins/DynamoDB.js";
import {
  GetItemCommand,
  PutItemCommand,
  QueryCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";

export const addVisitor = async (request, reply) => {
  const ip =
    request.headers["x-forwarded-for"]?.toString().split(",")[0] || request.ip;
  const userAgent = request.headers["user-agent"] || "";
  const pagePath = request.url;
  const referrer = request.headers["referer"] || null;
  const todayTimestamp = dayjs().tz("Asia/Seoul").format("YYYY-MM-DD");
  const timestamp = dayjs().tz("Asia/Seoul").format("YYYY-MM-DD HH:mm:ss");

  const putCommand = new PutItemCommand({
    TableName: "ZnanTable",
    Item: {
      pk: { S: `VISIT#${todayTimestamp}` },
      sk: { S: `VISITOR#${ip}` },
      timestamp: { S: timestamp },
      ip_address: { S: ip },
      user_agent: { S: userAgent },
      page_path: { S: pagePath },
      referrer: referrer ? { S: referrer } : { NULL: true },
    },
  });

  try {
    await DynamoDB.send(putCommand);
    reply
      .code(200)
      .headers({ "Content-Type": "application/json" })
      .send({ message: "Logged successfully" });
  } catch (err) {
    console.error(err);
    reply.code(500).headers({ "Content-Type": "application/json" }).send({
      error: "Internal Server Error",
      message: "Failed to log visitor",
    });
  }
};

export const getVisitorCount = async (request, reply) => {
  try {
    const today = dayjs().tz("Asia/Seoul").format("YYYY-MM-DD");

    // 오늘 방문자 수
    const pkValue = `VISIT#${today}`;

    const command = new QueryCommand({
      TableName: "ZnanTable",
      KeyConditionExpression: "pk = :pk",
      ExpressionAttributeValues: {
        ":pk": { S: pkValue },
      },
    });
    const response = await DynamoDB.send(command);
    const todayCount = response.Count || 0;

    // 전체 방문자 수
    let totalCount = 0;
    let lastEvaluatedKey;
    do {
      const command = new ScanCommand({
        TableName: "ZnanTable",
        Select: "COUNT",
        ExclusiveStartKey: lastEvaluatedKey, // pagination
      });

      const response = await DynamoDB.send(command);
      totalCount += response.Count;
      lastEvaluatedKey = response.LastEvaluatedKey;
    } while (lastEvaluatedKey); // 계속 스캔

    reply
      .code(200)
      .headers({ "Content-Type": "application/json" })
      .send({ todayCount, totalCount });
  } catch (err) {
    console.error(err);
    reply.code(500).headers({ "Content-Type": "application/json" }).send({
      error: "Internal Server Error",
      message: "Failed to get visitor count",
    });
  }
};
