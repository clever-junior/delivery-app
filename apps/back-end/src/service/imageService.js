// const fs = require('fs/promises');
// const { join } = require('path');
// const RestError = require('../errors/RestError');

// const getImage = async (fileName) => {
//   try {
//     const file = await fs.readFile(join(__dirname, '../../public/', fileName));
//     return file;
//   } catch (error) {
//     throw new RestError(404, 'File not found');
//   }
// };

// const imageService = {
//   getImage,
// };

// module.exports = imageService;
