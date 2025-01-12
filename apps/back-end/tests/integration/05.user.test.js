// const sinon = require('sinon');
// const chai = require('chai');
// const chaiHttp = require('chai-http');

// const { Model } = require('sequelize');

// const app = require('../../api/app');

// const mocks = require('./mocks/userMock');

// chai.use(chaiHttp);

// const { expect } = chai;

// const { token } = mocks.tokenMock;

// const { password, email, name, role, id } = mocks.userMock.admin;


// describe('POST /user', () => {
//   describe('Tests not filled fields', () => {
//     describe('When "name" field not filled', () => {
//       it('Resolves status 400', async () => {
//         const httpResponse = await chai
//           .request(app)
//           .post('/user')
//           .send({ password, email, role });

//         expect(httpResponse.status).to.equal(400);
//         expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
//       });
//     });
//     describe('When "email" field not filled', () => {
//       it('Resolves status 400', async () => {
//         const httpResponse = await chai
//           .request(app)
//           .post('/user')
//           .send({ password, name, role });

//         expect(httpResponse.status).to.equal(400);
//         expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
//       });
//     });
//     describe('When "password" field not filled', () => {
//       it('Resolves status 400', async () => {
//         const httpResponse = await chai
//           .request(app)
//           .post('/user')
//           .send({ email, name, role });

//         expect(httpResponse.status).to.equal(400);
//         expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
//       });
//     });
//     describe('When "role" field not filled', () => {
//       it('Resolves status 400', async () => {
//         const httpResponse = await chai
//           .request(app)
//           .post('/user')
//           .send({ email, name, password });

//         expect(httpResponse.status).to.equal(400);
//         expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
//       });
//     });
//   });
//   describe('Testes "role" field is invalid', () => {
//     beforeEach(() => sinon.stub(Model, 'findOne').resolves(null));
//     afterEach(() => sinon.restore());
//     it('Resolves status 400', async () => {
//       const httpResponse = await chai
//         .request(app)
//         .post('/user')
//         .send({ email, name, password, role: 'invalid_role' });

//       expect(httpResponse.status).to.equal(400);
//       expect(httpResponse.body).to.deep.equal({ message: 'Invalid role' });
//     });
//   });
//   describe('Tests user already exists', () => {
//     beforeEach(() => sinon.stub(Model, 'findOne').resolves(mocks.userMock.admin));
//     afterEach(() => sinon.restore());

//       it('Resolves status 409', async () => {
//         const httpResponse = await chai
//           .request(app)
//           .post('/user')
//           .send({ email, password, name, role });

//       expect(httpResponse.status).to.equal(409);
//       expect(httpResponse.body).to.deep.equal({ message: 'User already exists' });
//     });
//   });
//   describe('Tests create user successful', () => {
//     beforeEach(() => sinon.stub(Model, 'findOne').resolves(null));
//     beforeEach(() => sinon.stub(Model, 'create').resolves(mocks.userMock.admin));
//     afterEach(() => sinon.restore());

//       it('Resolves status 201', async () => {
//         const httpResponse = await chai
//           .request(app)
//           .post('/user')
//           .send({ email, password, name, role });

//         expect(httpResponse.status).to.equal(201);
//         expect(httpResponse.body).to.have.keys(['id', 'email', 'role', 'name']);
//     });
//   });
// });

// describe('GET /user', () => {
//   describe('Tests resolves all users', () => {
//     beforeEach(() => sinon.stub(Model, 'findAll').resolves([{ mocks: { ...userMock } }]));
//     afterEach(() => sinon.restore());
//     it('Resolves status 500', async () => {
//       const httpResponse = await chai
//           .request(app)
//           .get('/user')
//           .set('authorization', token);

//         expect(httpResponse.status).to.equal(500);
//     });
//   });
//   describe('Tests resolves all users', () => {
//     mocks.userMock.customer.password = undefined;
//     mocks.userMock.seller.password = undefined;
//     beforeEach(() => sinon.stub(Model, 'findAll').resolves([mocks.userMock.customer, mocks.userMock.seller]));
//     afterEach(() => sinon.restore());
//     it('Resolves status 200', async () => {
//       const httpResponse = await chai
//           .request(app)
//           .get('/user')
//           .set('authorization', token);

//         expect(httpResponse.status).to.equal(200);
//         expect(httpResponse.body).to.deep.equal([mocks.userMock.customer, mocks.userMock.seller]);
//     });
//   });
// });

// describe('DELETE /user/:id', () => {
//   describe('Tests user not found', () => {
//     beforeEach(() => sinon.stub(Model, 'destroy').resolves(0));
//     afterEach(() => sinon.restore());
//     it('Resolves status 404', async () => {
//       const httpResponse = await chai
//           .request(app)
//           .delete('/user/1')
//           .set('authorization', token);

//         expect(httpResponse.status).to.equal(404);
//         expect(httpResponse.body).to.deep.equal({ message: 'User not found' });
//     });
//   });
//   describe('Tests delete successfully', () => {
//     beforeEach(() => sinon.stub(Model, 'destroy').resolves(id));
//     afterEach(() => sinon.restore());
//     it('Resolves status 204', async () => {
//       const httpResponse = await chai
//           .request(app)
//           .delete('/user/1')
//           .set('authorization', token);

//         expect(httpResponse.status).to.equal(204);
//     });
//   });
// });
