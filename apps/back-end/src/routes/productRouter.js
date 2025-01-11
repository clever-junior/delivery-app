const { Router } = require('express');
const productController = require('../controller/productController');
const verifyToken = require('../middlewares/verifyTokenMiddleware');

const productRouter = Router();

productRouter.get('/', verifyToken, productController.getAll);
productRouter.get('/:id', verifyToken, productController.findById);

module.exports = productRouter;
