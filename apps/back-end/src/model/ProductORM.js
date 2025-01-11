const { Op } = require('sequelize');
const { Product } = require('../database/models');

const findManyByPk = async (...ids) => {
  const result = await Product.findAll({
    where: {
      id: {
        [Op.in]: ids,
      },
    },
  });

  return result;
};

const getAll = () => Product.findAll();

const findByPk = (id) => Product.findByPk(id);

const ProductORM = {
  findManyByPk,
  getAll,
  findByPk,
};

module.exports = ProductORM;
