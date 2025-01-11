const Sinon = require('sinon');
const fs = require('fs/promises');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const { imageMock } = require('./mocks/imageMock');

chai.use(chaiHttp);

const { expect } = chai;

describe('Tests all routes on /images', () => {
  describe('Tests GET /images/:fileName', () => {
    it('Should return the image', async () => {
      Sinon.stub(fs, 'readFile').resolves(imageMock);

      const result = await chai.request(app).get('/images/skol-lata');

      expect(result.status).to.equal(200);
      expect(result.body).to.deep.equal(imageMock);
      fs.readFile.restore();
    });

    it('Should throw an error when the file is not found', async () => {
      const result = await chai.request(app).get('/images/skol-lata');

      expect(result.status).to.equal(404);
      expect(result.body).to.deep.equal({
        message: 'File not found',
      });
    });
  });
});
