// const { Op } = require('sequelize');
// const { User } = require('../database/models');

import { PrismaClient } from "@prisma/client";
import { SignUp } from "../schemas/userSchema";

const prisma = new PrismaClient();

export async function create(data: SignUp) {
  const { email, password, name } = data;

  const user = prisma.user.create({ data: { email, password, name, role: 'CUSTOMER' } });

  return user;
};

// const findByPk = async (id) =>  { 
//   const user = new User();
//   return user.findByPk(id);
// };

export async function findByEmail(email: string) {
  const user = await prisma.user.findUnique({ where: { email }  });

  return user;
} 

// const findAll = async (id) => User.findAll({
//   where: {
//     id: {
//       [Op.ne]: [id],
//     },
//   },
// }, { attributes: { exclude: ['password'] } });

export async function findByEmailAndPassword({ email, password }: any) {
  const reply = await prisma.user.findFirst({ where: { AND: { email, password} } });
  return reply;
};

// const destroy = async (id) => User.destroy({ where: { id } });

// export const userModel = {
//   create,
//   destroy,
//   findAll,
//   findByPk,
//   findByEmail,
//   findByEmailAndPassword,
// };
