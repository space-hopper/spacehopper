const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server/app');
const { Product } = require('../../server/db/');
const seed = require('../../server/db/seed');

describe('Product routes', () => {
  beforeEach(async () => {
    await seed();
  });

  describe('/api/products/', () => {
    it('GET /api/products', async () => {
      const res = await request(app).get('/api/products').expect(200);
      console.log(res);
      expect(res.body).to.be.an('array');
      expect(res.body.length).to.equal(2);
    });
  });

  describe('/api/products/:productId', () => {
    it('GET /api/products/:productId', async () => {
      const res = await request(app).get('/api/products/1').expect(200);

      expect(res.body).to.be.an('object');
    });
  });
});
