import { findByEmailAndPassword } from "../model/userModel";

const md5 = require('md5');

export async function findOne(body: { email: string, password: string }): Promise<string | undefined> {
  const { email, password } = body;

  const md5Pass = md5(password);

  const user = await findByEmailAndPassword({ email, password: md5Pass });
  
  if (!user) { return }

  // const token = generateToken(user);

  return "token";
};

// const readAll = async (id) => {
//   // const users = await UserORM.findAll(id);

//   return users;
// };

// const create = async (data) => {
//   validateSchema(userRegisterSchema, data, 400);

//   const validateUser = UserORM.findByEmail(data.email);

//   if (validateUser) {
//     throw new RestError(409, 'User already exists');
//   }

//   const user = UserORM.create(data);

//   const token = generateToken(data);

//   return token;
// };

// const createWithRole = async (data) => {
//   validateSchema(userCreateSchema, data, 400);
  
//   const validateUser = await UserORM.findByEmail(data.email);

//   if (validateUser) {
//     throw new RestError(409, 'User already exists');
//   }

//   const roles = ['customer', 'seller', 'administrator'];
//   let isValidRole = false;

//   roles.forEach((role) => {
//     if (data.role === role) {
//       isValidRole = true;
//     }
//   });

//   if (!isValidRole) { throw new RestError(400, 'Invalid role'); }

//   const user = await UserORM.create(data);

//   user.password = undefined;

//   return user;
// };

// const deleteUser = async (id) => {
//   const user = await UserORM.destroy(id);

//   if (!user) {
//     throw new RestError(404, 'User not found');
//   }
// };

// module.exports = { readOne, readAll, create, createWithRole, deleteUser };
