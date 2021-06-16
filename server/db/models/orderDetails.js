const Sequelize = require('sequelize');
const db = require('../db');

const OrderDetails=db.define("orderDetails",{
    quantity:{
        type:Sequelize.DataTypes.INTEGER,
            defaultValue:1,
            validate:{
                min:0
            }
        
    }
})
module.exports=OrderDetails