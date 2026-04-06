import {
  createComment,
  deleteComment,
  getComments,
} from "../services/CommentService.js";
import {
  createComment as createHaruzogakComment,
  deleteComment as deleteHaruzogakComment,
  getComments as getHaruzogakComments,
} from "../services/HaruzogakService.js";
import { addVisitor, getVisitorCount } from "../services/VisitorService.js";

async function ApiRoute(fastify, options) {
  fastify.get("/visitors-count", getVisitorCount);
  fastify.post("/visitors", addVisitor);

  fastify.get("/comments", getComments);
  fastify.post("/comments", createComment);
  fastify.delete("/comments", deleteComment);

  // 하루조각 회고용 댓글 서비스
  fastify.get("/haruzogak/comments", getHaruzogakComments);
  fastify.post("/haruzogak/comments", createHaruzogakComment);
  fastify.delete("/haruzogak/comments", deleteHaruzogakComment);
}

export default ApiRoute;
