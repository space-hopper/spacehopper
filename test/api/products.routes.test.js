const { expect } = require('chai');
const request = require('supertest');
const app = require('../server/app');
const { Product } = require('../server/db/');
const seed = require('../../script/seed');

describe('Product routes', () => {
  beforeEach(async () => {
    await seed();
  });

  describe('/api/products/', () => {
    it('GET /api/products', async () => {
      const res = await request(app).get('/api/products').expect(200);

      expect(res.body).to.be.an('array');
      expect(res.body.length).to.equal(2);
    });
  });
});
