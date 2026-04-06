async function DefaultRoute(fastify, options) {
  fastify.get("/", async (request, reply) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay of 1 second
    return { status: "ok" };
  });
  fastify.get("/health", async (request, reply) => {
    return { status: "ok", deployedAt: "2026-04-06T16:32:00Z" };
  });
}

export default DefaultRoute;
