const createSaleMock = {
  dbResponse: {
    saleDate: { val: 'NOW()' },
    id: 1,
    userId: 3,
    sellerId: 2,
    totalPrice: 9.7,
    deliveryAddress: 'Av. Marechal Rondon',
    deliveryNumber: '149',
    status: 'PENDENTE',
  },
};

const getByIdMock = {
  dbResponse: {
    dataValues: {
      id: 1,
      userId: 3,
      sellerId: 2,
      totalPrice: 10,
      deliveryAddress: 'Av. Marechal Rondon',
      deliveryNumber: '149',
      saleDate: '2022-12-01T18:26:00.000Z',
      status: 'PENDENTE',
      products: [
        {
          id: 1,
          name: 'Skol Lata 250ml',
          price: 2.2,
          urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
          info: { quantity: 3 },
        },
        {
          id: 2,
          name: 'Heineken 600ml',
          price: 7.5,
          urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
          info: { quantity: 2 },
        },
        {
          id: 3,
          name: 'Antarctica Pilsen 300ml',
          price: 2.49,
          urlImage: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
          info: { quantity: 1 },
        },
      ],
    },
  },
  apiResponse: {
    id: 1,
    userId: 3,
    sellerId: 2,
    totalPrice: 10,
    deliveryAddress: 'Av. Marechal Rondon',
    deliveryNumber: '149',
    saleDate: '2022-12-01T18:26:00.000Z',
    status: 'PENDENTE',
    products: [
      {
        id: 1,
        name: 'Skol Lata 250ml',
        price: 2.2,
        urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
        quantity: 3,
      },
      {
        id: 2,
        name: 'Heineken 600ml',
        price: 7.5,
        urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
        quantity: 2,
      },
      {
        id: 3,
        name: 'Antarctica Pilsen 300ml',
        price: 2.49,
        urlImage: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
        quantity: 1,
      },
    ],
  },
};

const findAllMock = [
  {
    id: 1,
    userId: 3,
    sellerId: 2,
    totalPrice: 10,
    deliveryAddress: 'Av. Marechal Rondon',
    deliveryNumber: '149',
    saleDate: '2022-12-01T18:26:00.000Z',
    status: 'PENDENTE',
  },
  {
    id: 2,
    userId: 3,
    sellerId: 2,
    totalPrice: 10,
    deliveryAddress: 'Av. Marechal Rondon',
    deliveryNumber: '149',
    saleDate: '2022-12-01T18:48:37.000Z',
    status: 'PENDENTE',
  },
  {
    id: 3,
    userId: 6,
    sellerId: 2,
    totalPrice: 10,
    deliveryAddress: 'Av. Marechal Rondon',
    deliveryNumber: '149',
    saleDate: '2022-12-01T19:31:03.000Z',
    status: 'PENDENTE',
  },
];

module.exports = {
  createSaleMock,
  getByIdMock,
  findAllMock,
};
