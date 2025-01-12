import md5 from "md5";
import { create, findByEmail, findByEmailAndPassword } from "../model/userModel.js";
import { Login, loginSchema, SignUp } from "../schemas/userSchema.js";

export async function findUserByEmailAndPassword(data: Login) {
  const result = loginSchema.safeParse(data);

  if (!result.success) {
    return { error: result.error.issues[0].message }
  }
  else {
    const { email, password } = data;

    const encryptedPassword = md5(password);

    const user = await findByEmailAndPassword({ email, password: encryptedPassword });

    if (!user) { return { error: "User Not Found" } }
    
    return { user };
  }

};

// const readAll = async (id) => {
//   // const users = await UserORM.findAll(id);

//   return users;
// };

export async function createUser(data: SignUp) {
  const { name, email, password } = data;

  const findUser = await findByEmail(email);

  if (findUser)
    return { error: "User Already Exists" }

  const encryptedPassword = md5(password);

  const user = await create({ name, email, password: encryptedPassword });

  if (!user) 
    return { error: "User not created" }
  // const token = generateToken(data);

  return { user };
};

// export async function createWithRole(data: CreateUser) {

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
