const { sequelize, Sale, SaleProduct, Product } = require('../database/models');

const mapSaleProduct = ({ id: productId, quantity }, saleId) => ({
  productId,
  saleId,
  quantity,
});

const insertSale = async (sale) =>
  sequelize.transaction(async (transaction) => {
    const response = await Sale.create(
      {
        userId: sale.userId,
        sellerId: sale.sellerId,
        totalPrice: sale.totalPrice,
        deliveryAddress: sale.deliveryAddress,
        deliveryNumber: sale.deliveryNumber,
        status: 'PENDENTE',
      },
      { transaction },
    );

    await SaleProduct.bulkCreate(
      sale.products.map((product) => mapSaleProduct(product, response.id)),
      { transaction },
    );

    return response;
  });

const extractQuantityFromProduct = (product) => ({
  id: product.id,
  name: product.name,
  price: product.price,
  urlImage: product.urlImage,
  quantity: product.info.quantity,
});

const findByPk = async (id) => {
  const response = await Sale.findByPk(id, {
    include: [
      {
        model: Product,
        as: 'products',
        through: { attributes: ['quantity'], as: 'info' },
      },
    ],
  });

  return (
    response && {
      ...response.dataValues,
      products: response.dataValues.products.map(extractQuantityFromProduct),
    }
  );
};

const findBySeller = async (sellerId) => {
  const response = await Sale.findAll({
    where: {
      sellerId,
    },
  });

  return response;
};

const findByUser = async (userId) => {
  const response = await Sale.findAll({
    where: {
      userId,
    },
  });

  return response;
};

const update = async (id, sale) => Sale.update(sale, { where: { id } });

const SaleORM = {
  insertSale,
  findByPk,
  findBySeller,
  findByUser,
  update,
};

module.exports = SaleORM;
