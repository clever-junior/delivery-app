// const Joi = require('joi');

// const newSaleSchema = Joi.object({
//   userId: Joi.number().min(1).required(),
//   sellerId: Joi.number().min(1).disallow(Joi.ref('userId')).required(),
//   totalPrice: Joi.number().min(0).required(),
//   deliveryAddress: Joi.string().required(),
//   deliveryNumber: Joi.string().required(),
//   products: Joi.array()
//     .items(
//       Joi.object({
//         id: Joi.number().min(1).required(),
//         quantity: Joi.number().min(1).required(),
//       }),
//     )
//     .min(1)
//     .required(),
// });

// const statusSchema = Joi.string()
//   .allow('PREPARANDO', 'EM TRÂNSITO', 'ENTREGUE')
//   .required();

// module.exports = {
//   newSaleSchema,
//   statusSchema,
// };
