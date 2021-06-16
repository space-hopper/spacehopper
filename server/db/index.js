//this is the access point for all things database related!

const db = require('./db');

const Order=require("./models/orders")
const User = require('./models/user');
const Product = require('./models/product');
const OrderDetails=require('./models/orderDetails')

//associations could go here!
User.hasMany(Order)
Order.belongsTo(User)

Order.belongsToMany(Product,{through: OrderDetails})
Product.belongsToMany(Order, {through: OrderDetails})

Order.prototype.getTotal=async function(){
  const productList=await this.getProducts({include:[{model:'orderDetails'}]});

  productList.reduce((accumulator,product)=>{
    return accumulator+=product.price*product.orderDetails.quantity
  }, 0)
}

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    OrderDetails
  },
};
