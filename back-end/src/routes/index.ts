import { FastifyTypedInstance } from "../types";
import { userRouter } from "./userRouter";

export async function router(app: FastifyTypedInstance) {
  await app.register(userRouter, { prefix: '/user' }); 
}