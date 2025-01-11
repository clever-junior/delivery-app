import { FastifyReply, FastifyRequest } from "fastify";
import { Login, SignUp } from "../schemas/userSchema";
import { createUser, findUserByEmailAndPassword } from "../service/userService";

export async function login(request: FastifyRequest<{ Body: Login }>, reply: FastifyReply) {
  const { email, password } = request.body;

  const { token, error } = await findUserByEmailAndPassword({ email, password });

  if (error) {
    return reply.status(401).send(error);
  }

  return reply.status(200).send(token);
}

// async index(req, res) {
//   console.log(req.user);

//   const { id } = req.user;

//   const users = await userService.readAll(id);

//   return res.status(200).json(users);
// },

// async userRegister(request, reply: FastifyReply) {
//   const { email, name, password } = request.body;

//   const data = { email, name, password };

//   // const token = await userService.create(data);

//   return reply.status(201).send();
//   // .json({ token });
// },

export async function signUp(request: FastifyRequest<{ Body: SignUp }>, reply: FastifyReply) {
  const data = request.body;

  const { status, error } = await createUser(data);

  if (error) {
    return reply.status(status).send(error)
  }

  return reply.status(status).send("Created");
}

// async deleteUser(req, res) {
//   const { id } = req.params;

//   await userService.deleteUser(id);

//   return res.sendStatus(204);
// },
// };
