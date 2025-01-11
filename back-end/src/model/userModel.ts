// const { Op } = require('sequelize');
// const { User } = require('../database/models');

import { PrismaClient } from "@prisma/client";

const { user } = new PrismaClient();

// const create = async ({ email, password, name, role }) => {

//   if (!role) {
//     const response = user.create({ id, email, password, name, role: 'customer' });
    
//     return response;
//   }

//   const response = user.create({ id, email, password, name, role });

//   return response;
// };

// const findByPk = async (id) =>  { 
//   const user = new User();
//   return user.findByPk(id);
// };

// const findByEmail = (email) => {
//   const user = new User();
//   return user.findOne({ where: { email } });
// };

// const findAll = async (id) => User.findAll({
//   where: {
//     id: {
//       [Op.ne]: [id],
//     },
//   },
// }, { attributes: { exclude: ['password'] } });

export async function findByEmailAndPassword({ email, password }: any) {
  const reply = await user.findFirst({ where: { AND: { email, password} } });
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
