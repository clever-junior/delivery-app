// const sinon = require('sinon');
// const chai = require('chai');
// const chaiHttp = require('chai-http');

// const { Model } = require('sequelize');

// const app = require('../../api/app');

// const mocks = require('./mocks/userMock');

// chai.use(chaiHttp);

// const { expect } = chai;

// const { password, email } = mocks.userMock.admin;

// describe('POST /login', () => {
//   describe('Tests not filled fields', () => {
//     describe('When "email" field not filled', () => {
//       it('Resolves status 400', async () => {
//         const httpResponse = await chai
//           .request(app)
//           .post('/login')
//           .send({ password });

//         expect(httpResponse.status).to.equal(400);
//         expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
//       });
//     });
//     describe('When "password" field not filled', () => {
//       it('Resolves status 400', async () => {
//         const httpResponse = await chai
//           .request(app)
//           .post('/login')
//           .send({ email: mocks.userMock.email });

//         expect(httpResponse.status).to.equal(400);
//         expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
//       });
//     });
//   });
//   describe('Tests invalid fields', () => {
//     describe("Email doesn't exists in database", () => {
//       beforeEach(() => sinon.stub(Model, 'findOne').resolves(null));
//       afterEach(() => sinon.restore());

//       it('Resolves status 401', async () => {
//         const httpResponse = await chai
//           .request(app)
//           .post('/login')
//           .send({ email, password });

//       expect(httpResponse.status).to.equal(404);
//       expect(httpResponse.body).to.deep.equal({ message: 'User not exists' });
//       });
//     });

//     describe("Email exists but incorrect password", () => {
//       beforeEach(() => sinon.stub(Model, 'findOne').resolves(mocks.userMock.admin));
//       afterEach(() => sinon.restore());

//       it('Resolves status 401', async () => {
//         const httpResponse = await chai
//           .request(app)
//           .post('/login')
//           .send({ email, password: 'incorrect_password' });

//         expect(httpResponse.status).to.equal(401);
//         expect(httpResponse.body).to.deep.equal({ message: 'Incorrect email or password' });
//       });
//     });
//   });

//   describe('Tests success login', () => {
//     beforeEach(() => sinon.stub(Model, 'findOne').resolves(mocks.userMock.admin));
//     afterEach(() => sinon.restore());

//     it('Resolves status 200', async () => {
//       const httpResponse = await chai
//         .request(app)
//         .post('/login')
//         .send({ email, password: '--adm2@21!!--' });

//       expect(httpResponse.status).to.equal(200);
//       expect(httpResponse.body).to.have.property('token');
//       expect(httpResponse.body.token).to.be.a('string');
//     })
//   });
// });
