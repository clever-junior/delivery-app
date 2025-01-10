const md5 = require('md5');
const generateToken = require('../auth/generateToken');
const RestError = require('../errors/RestError');
const UserORM = require('../model/UserORM');
const User = require('../model/User');
const { loginSchema, userRegisterSchema, userCreateSchema } = require('./validation/userSchema');
const validateSchema = require('./validation/validateSchema');


const readOne = async (email, password) => {
  validateSchema(loginSchema, { email, password }, 400);
  
  const md5Pass = md5(password);

  const user = UserORM.findByEmailAndPassword(email, md5Pass);

  if (!user) {
    throw new RestError(404, 'User not exists');
  }

  if (md5Pass !== user.password) {
    throw new RestError(401, 'Incorrect email or password');
  }

  const token = generateToken(user);

  return token;
};

const readAll = async (id) => {
  // const users = await UserORM.findAll(id);

  return users;
};

const create = async (data) => {
  validateSchema(userRegisterSchema, data, 400);

  const validateUser = UserORM.findByEmail(data.email);

  if (validateUser) {
    throw new RestError(409, 'User already exists');
  }

  const user = UserORM.create(data);

  const token = generateToken(data);

  return token;
};

const createWithRole = async (data) => {
  validateSchema(userCreateSchema, data, 400);
  
  const validateUser = await UserORM.findByEmail(data.email);

  if (validateUser) {
    throw new RestError(409, 'User already exists');
  }

  const roles = ['customer', 'seller', 'administrator'];
  let isValidRole = false;

  roles.forEach((role) => {
    if (data.role === role) {
      isValidRole = true;
    }
  });

  if (!isValidRole) { throw new RestError(400, 'Invalid role'); }

  const user = await UserORM.create(data);

  user.password = undefined;

  return user;
};

const deleteUser = async (id) => {
  const user = await UserORM.destroy(id);

  if (!user) {
    throw new RestError(404, 'User not found');
  }
};

module.exports = { readOne, readAll, create, createWithRole, deleteUser };
