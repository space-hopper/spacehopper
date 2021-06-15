const Sequelize = require('sequelize');
const db = require('../db');

const Order=db.define("order",{
    status:{
        type:Sequelize.ENUM("cart","pending","shipped","canceled"),
        defaultValue:"cart"
    },
    shippingAddress:{
        type:Sequelize.DataTypes.TEXT,
    }
})

module.exports=Order