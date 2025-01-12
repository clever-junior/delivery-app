// const Sinon = require('sinon');
// const { Product } = require('../../database/models');
// const { productsMock, productMock } = require('./mocks/productMock');
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const app = require('../../api/app');
// const { tokenMock, userMock } = require('./mocks/userMock');
// const jwt = require('jsonwebtoken');

// chai.use(chaiHttp);

// const { expect } = chai;

// describe('Tests all routes on /products', () => {
//   beforeEach(() => {
//     Sinon.stub(Product, 'findAll').resolves(productsMock);
//     Sinon.stub(Product, 'findByPk').resolves(productMock);
//     Sinon.stub(jwt, 'verify').resolves({ payload: userMock.customer });
//   });

//   afterEach(() => {
//     Product.findAll.restore();
//     Product.findByPk.restore();
//     jwt.verify.restore();
//   });

//   describe('Tests GET /products', () => {
//     it('Should successfully return all products', async () => {
//       const result = await chai
//         .request(app)
//         .get('/products')
//         .set('Authorization', tokenMock);

//       expect(jwt.verify.calledOnce).to.be.true;
//       expect(result.status).to.equal(200);
//       expect(result.body).to.deep.equal(productsMock);
//     });

//     it('Should return an error when not receiving a token', async () => {
//       const result = await chai.request(app).get('/products');

//       expect(result.status).to.equal(401);
//       expect(result.body).to.deep.equal({
//         message: 'Authorization token not found!',
//       });
//     });
//   });

//   describe('Tests GET /products/:id', () => {
//     it('Should successfully return a product', async () => {
//       const result = await chai
//         .request(app)
//         .get('/products/1')
//         .set('Authorization', tokenMock);

//       expect(result.status).to.equal(200);
//       expect(result.body).to.deep.equal(productMock);
//       expect(jwt.verify.calledOnce).to.be.true;
//     });

//     it('Should return an error when the product is not found', async () => {
//       Product.findByPk.resolves(undefined);
//       const result = await chai
//         .request(app)
//         .get('/products/1')
//         .set('Authorization', tokenMock);

//       expect(result.status).to.equal(404);
//       expect(result.body).to.deep.equal({
//         message: 'Product not found',
//       });
//       expect(jwt.verify.calledOnce).to.be.true;
//     });
//   });
// });
