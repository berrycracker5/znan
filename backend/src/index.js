import cors from "@fastify/cors";
import dotenv from "dotenv";
import Fastify from "fastify";
import { resolve } from "path";
import { fileURLToPath } from "url";
import ApiRoute from "./routes/ApiRoute.js";
import DefaultRoute from "./routes/DefaultRoute.js";

// environment variables
dotenv.config();

export default function init() {
  const fastify = Fastify({
    logger: {
      transport: {
        target: "pino-pretty", // 사람이 보기 쉽게
        options: {
          colorize: true,
          levelFirst: true,
          translateTime: "HH:MM:ss",
          ignore: "pid,hostname,reqId,host", // 필요 없는 항목 제거
        },
      },
    },
  });

  // Enable CORS
  fastify.register(cors, {
    origin: [
      "http://localhost:8080", // Next.js 개발 서버
      "http://localhost:5173", // Vite 개발 서버
      "https://www.znan.site",
      "https://v2.znan.site",
      "https://znan.site",
      "https://znan-web.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  });

  // Declare a route
  fastify.register(DefaultRoute);
  fastify.register(ApiRoute, { prefix: "/api" });

  return fastify;
}

// node src/index.js 로 실행하는 경우
const __filename = fileURLToPath(import.meta.url);
const entrypoint = resolve(process.argv[1]);
if (__filename === entrypoint) {
  init().listen({ port: 3000 }, (err) => {
    if (err) console.error(err);
    console.log("server listening on 3000");
  });
}
