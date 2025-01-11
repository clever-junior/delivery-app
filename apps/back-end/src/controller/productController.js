const productService = require('../service/productService');

const getAll = async (_req, res) => {
  const result = await productService.getAll();

  res.status(200).json(result);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const result = await productService.findById(id);

  res.status(200).json(result);
};

const productController = {
  getAll,
  findById,
};

module.exports = productController;
