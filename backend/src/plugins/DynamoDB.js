import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import dotenv from "dotenv";

// environment variables
dotenv.config();

export const DynamoDB = new DynamoDBClient({
  region: process.env.ZNAN_AWS_REGION,
  credentials: {
    accessKeyId: process.env.ZNAN_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.ZNAN_AWS_SECRET_ACCESS_KEY,
  },
});
