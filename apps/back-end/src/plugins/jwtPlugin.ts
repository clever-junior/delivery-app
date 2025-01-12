import { FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';
import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';

// using declaration merging, add your plugin props to the appropriate fastify interfaces
// if prop type is defined here, the value will be typechecked when you call decorate{,Request,Reply}
declare module 'fastify' {
  interface FastifyTypedInstance {
    jwtAuth: () => string;
  }
}

// define options
// export interface MyPluginOptions {
//   myPluginOption: string
// }

// define plugin using callbacks
// const myPluginCallback: FastifyPluginCallback<MyPluginOptions> = (fastify, options, done) => {
//   fastify.decorateRequest('myPluginProp', 'super_secret_value')
//   fastify.decorateReply('myPluginProp', options.myPluginOption)

//   done()
// }

// define plugin using promises
const jwtPlugin: FastifyPluginAsyncZod = async (fastify, options) => {
  fastify.register(import("@fastify/jwt"), {
    secret: String(process.env.JWT_SECRET),
  })

  fastify.decorate("jwtAuth", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await request.jwtVerify()
    }
    catch (err) {
      reply.status(401).send("Unathourized")
    }
  })
}

// export plugin using fastify-plugin
// export default fp(myPluginCallback, '3.x')
// or
export default fp(jwtPlugin, '5.x.x')
