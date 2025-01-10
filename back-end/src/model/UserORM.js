// const { Op } = require('sequelize');
// const { User } = require('../database/models');
const { User } = require("./User");

const create = async ({ email, password, name, role }) => {
  const id = Math.floor((Date.now() * Math.random()) / 10000);

  const user = new User();

  if (!role) {
    const response = user.create({ id, email, password, name, role: 'customer' });
    
    return response;
  }

  const response = user.create({ id, email, password, name, role });

  return response;
};

const findByPk = async (id) =>  { 
  const user = new User();
  return user.findByPk(id);
};

const findByEmail = (email) => {
  const user = new User();
  return user.findOne({ where: { email } });
};

const findAll = async (id) => User.findAll({
  where: {
    id: {
      [Op.ne]: [id],
    },
  },
}, { attributes: { exclude: ['password'] } });

const findByEmailAndPassword = async (email, password) => {
  const user = new User();
  const response = user.findOne({ where: { email, password } })
  return response;
};

const destroy = async (id) => User.destroy({ where: { id } });

const UserORM = {
  create,
  destroy,
  findAll,
  findByPk,
  findByEmail,
  findByEmailAndPassword,
};

module.exports = UserORM;
