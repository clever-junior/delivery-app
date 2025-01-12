import z from "zod";
import { login, signUp } from "../controller/userController.js";
import { loginSchema, userRegisterSchema } from "../schemas/userSchema.js";
import { FastifyTypedInstance } from "../types.js";
// import verifyToken from "../middlewares/verifyTokenMiddleware";

export async function userRouter(app: FastifyTypedInstance) {
  app.post(
    '/login',
    {
      schema: {
        tags: ['users'],
        description: 'Sign in a existent app',
        body: loginSchema, 
        response: {
          200: z.object({
            token: z.string()
          }).describe('Login successfull'),
          401: z.string().describe('User not found')
        }
      },
    },
    login,
  );

  app.post(
    '/register',
    {
      schema: {
        tags: ['users'],
        description: 'Sign up a unexistent user',
        body: userRegisterSchema,
        response: {
          201: z.object({
            token: z.string()
          }).describe('Created'),
          409: z.string().describe('Conflict')
        }
      }
    },
    signUp,
  );

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