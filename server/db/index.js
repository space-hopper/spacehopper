//this is the access point for all things database related!

const db = require('./db');

const Order=require("./models/orders")
const User = require('./models/user');
const Product = require('./models/Product');


//associations could go here!
User.hasMany(Order)
Order.belongsto(User)

Order.hasMany(Prodcut)
Product.hasMany(Order)

module.exports = {
  db,
  models: {
    User,
    Product,
    Order
  },
};
