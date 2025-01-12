import { FastifyTypedInstance } from "../types.js";
import { userRouter } from "./userRouter.js";

export async function router(app: FastifyTypedInstance) {
  await app.register(userRouter); 
}