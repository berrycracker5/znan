async function DefaultRoute(fastify, options) {
  fastify.get("/", async (request, reply) => {
    return { status: "ok" };
  });
  fastify.get("/health", async (request, reply) => {
    return { status: "ok" };
  });
}

export default DefaultRoute;
