const { expect } = require('chai');
const Order = require('../../server/db/models/orders');
describe('Orders model', () => {
  beforeEach(() => db.sync({ force: true }));
  describe('column definitions and validations', () => {
    it('has a status and shipping address', () => {
      const order = Order.build({
        status: 'shipped',
        shippingAddress: '73 doodliedo lane, lascontan, england',
      });
      expect(order.status).to.be('shipped');
      expect(order.shippingAddress).to.be(
        '73 doodliedo lane, lascontan, england',
      );
    });
    it('status can only be one of cart, pending, shipped, and cancelled', () => {
      const order = Order.build({ status: 'wowzers! a frog!!' });
      return order.validate().then(
        () => {
          throw new Error('Validation should have failed');
        },
        (err) => {
          expect(err).to.be.an('error');
        },
      );
    });
    it('status defaults to cart', () => {
      const order = Order.build();
      expect(order.status).to.be('cart');
    });
  });
});
