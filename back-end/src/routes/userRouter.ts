import z from "zod";
import { FastifyTypedInstance } from "../types";
import { login } from "../controller/userController";
// import verifyToken from "../middlewares/verifyTokenMiddleware";

export async function userRoutes(app: FastifyTypedInstance) {
  app.post(
    '/login',
    {
      schema: {
        tags: ['apps'],
        description: 'Sign in a existent app',
        body: z.object({
          email: z.string().email(),
          password: z.string(),
        }),
        response: {
          200: z.string().describe('Login successfull'),
          401: z.string().describe('User not found')
        }
      },
    },
    async (request, reply) => {
      const { email, password } = request.body;

      const token = await login({ email, password });

      if (!token) {
        return reply.status(401).send("User not found");
      }

      return reply.status(200).send(token);
    }, 
  );

  // app.post(
  //   '/register',
  //   appController.appRegister,
  // );

  // app.get(
  //   '/app',
  //   {
  //     schema: {
  //       tags: ['apps'],
  //       description: 'List apps',
  //       response: {
  //         200: z.array(z.object({
  //           id: z.string(),
  //           name: z.string(),
  //           email: z.string(),
  //         }))
  //       }
  //     }
  //   },
  //   // verifyToken,
  //   async (request, reply) => appController.index(request, reply),
  // );

  // app.post(
  //   '/app',
  //   // verifyToken,
  //   {
  //     schema: {
  //       tags: ['apps'],
  //       description: 'Create a new app',
  //       body: z.object({
  //         name: z.string(),
  //         email: z.string().email(),
  //         password: z.string(),
  //       }),
  //       response: {
  //         201: z.string().describe('app created'),
  //       }
  //     }
  //   },
  //   async (request, reply) => appController.createapp(request, reply),
  // );

  // app.delete(
  //   '/app/:id',
  //   verifyToken,
  //   appController.deleteapp,
  // );
}