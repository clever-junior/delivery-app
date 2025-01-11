const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { Model } = require('sequelize');

const app = require('../../api/app');

const mocks = require('./mocks/userMock');

chai.use(chaiHttp);

const { expect } = chai;

const { password, email, name } = mocks.userMock.admin;


describe('POST /register', () => {
  describe('Tests not filled fields', () => {
    describe('When "nome" field not filled', () => {
      it('Resolves status 400', async () => {
        const httpResponse = await chai
          .request(app)
          .post('/register')
          .send({ password, email });

        expect(httpResponse.status).to.equal(400);
        expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
      });
    });
    describe('When "email" field not filled', () => {
      it('Resolves status 400', async () => {
        const httpResponse = await chai
          .request(app)
          .post('/register')
          .send({ password, name });

        expect(httpResponse.status).to.equal(400);
        expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
      });
    });
    describe('When "password" field not filled', () => {
      it('Resolves status 400', async () => {
        const httpResponse = await chai
          .request(app)
          .post('/register')
          .send({ email, name });

        expect(httpResponse.status).to.equal(400);
        expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
      });
    });
  });
  describe('Tests user already exists', () => {
    beforeEach(() => sinon.stub(Model, 'findOne').resolves(mocks.userMock.admin));
    afterEach(() => sinon.restore());

      it('Resolves status 409', async () => {
        const httpResponse = await chai
          .request(app)
          .post('/register')
          .send({ email, password, name });

      expect(httpResponse.status).to.equal(409);
      expect(httpResponse.body).to.deep.equal({ message: 'User already exists' });
    });
  });
  describe('Tests create user success', () => {
    beforeEach(() => sinon.stub(Model, 'findOne').resolves(null));
    beforeEach(() => sinon.stub(Model, 'create').resolves(mocks.userMock.customer));
    afterEach(() => sinon.restore());

      it('Resolves status 201', async () => {
        const httpResponse = await chai
          .request(app)
          .post('/register')
          .send({ email, password, name });

        expect(httpResponse.status).to.equal(201);
        expect(httpResponse.body).to.have.property('token');
        expect(httpResponse.body.token).to.be.a('string');
    });
  });
});
