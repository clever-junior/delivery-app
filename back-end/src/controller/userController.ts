import { findOne } from "../service/userService";

export async function login(body: { email: string, password: string }) {
  const { email, password } = body;

  const token = await findOne({ email, password });

  return token;
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

  // async createUser(request, reply) {
  //   const { name, email, password, role } = request.body;

  //   const data = { email, name, password, role };

  //   const user = await userService.createWithRole(data);

  //   return reply.status(201).json(user);
  // },

  // async deleteUser(req, res) {
  //   const { id } = req.params;

  //   await userService.deleteUser(id);

  //   return res.sendStatus(204);
  // },
// };
