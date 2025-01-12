import { fastifyCors } from '@fastify/cors';
import { fastifySwagger } from '@fastify/swagger';
import { fastifySwaggerUi } from '@fastify/swagger-ui';
import { fastify } from 'fastify';
import { jsonSchemaTransform, serializerCompiler, validatorCompiler, ZodTypeProvider } from 'fastify-type-provider-zod';
import jwtPlugin from './plugins/jwtPlugin.js';
import { router } from './routes/index.js';

const port = Number(process.env.PORT) || 3001;

export const server = fastify().withTypeProvider<ZodTypeProvider>();

// Plugin to allow frontend access the API 
server.register(fastifyCors, { origin: "*" });

// Plugins to validate schemas 
server.setValidatorCompiler(validatorCompiler);
server.setSerializerCompiler(serializerCompiler);


// Plugins to documentate the API
server.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Typed API',
      version: '1.0.0'
    }
  },
  transform: jsonSchemaTransform,
});
server.register(fastifySwaggerUi, {
  routePrefix: '/docs',
});

// Plugin to authentication
server.register(jwtPlugin);

// Routes
router(server);

//Server
server.listen({ port }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
});
