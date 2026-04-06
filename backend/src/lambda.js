import awsLambdaFastify from "@fastify/aws-lambda";
import init from "./index.js";
import dotenv from "dotenv";

// environment variables
dotenv.config();

const proxy = awsLambdaFastify(init());

export const handler = proxy;
