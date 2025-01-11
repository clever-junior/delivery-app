const saleService = require('../service/saleService');

const insertSale = async (req, res) => {
  const { id: userId } = req.user;

  const response = await saleService.insertSale({ ...req.body, userId });

  res.status(201).json(response);
};

const findSaleById = async (req, res) => {
  const { id } = req.params;

  const response = await saleService.findSaleById(id);

  res.status(200).json(response);
};

const findSaleHistory = async (req, res) => {
  const response = await saleService.findUserSales(req.user);

  res.status(200).json(response);
};

const updateStatus = (status) => async (req, res) => {
  const { id } = req.params;

  const response = await saleService.updateStatus(id, status, req.user);

  res.status(200).json(response);
};

const saleController = {
  insertSale,
  findSaleById,
  findSaleHistory,
  updateStatus,
};

module.exports = saleController;
