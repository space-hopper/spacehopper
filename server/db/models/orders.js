const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('cart', 'pending', 'shipped', 'cancelled'),
    defaultValue: 'cart',
  },
  shippingAddress: {
    type: Sequelize.DataTypes.TEXT,
  },
  //does this need a customer id??
});

module.exports = Order;
