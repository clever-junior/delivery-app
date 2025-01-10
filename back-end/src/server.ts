import fastify from 'fastify';

const server = fastify();

const port = Number(process.env.PORT) || 3001;

server.get('/ping', async (request, reply) => {
  return 'pong\n';
})

server.listen({ port }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
