const Sequelize = require('sequelize');
const db = require('../db');
const Orders=require('./orders');
const Product = require('./product');

const OrderDetails=db.define("orderDetails",{
    quantity:{
        type:Sequelize.DataTypes.INTEGER,
            defaultValue:1,
            validate:{
                min:0
            }
        
    },
    totalPrice:{
        type:Sequelize.DataTypes.INTEGER,
        defaultValue:1,
        validate:{
            min:0
        },
        get(){
            return this.getDataValue(totalPrice)/100
        },
        set(totalPriceToBeSet){
            this.setDataValue('totalPrice', Math.floor(totalPriceToBeSet*100))
        }
    }
})


OrderDetails.beforeCreate(async(orderDetails,options)=>{
    console.log('hello!!!')
    const order =await Orders.findByPk(orderDetails.productId)
    const basePrice=order.price
    orderDetails.totalPrice=basePrice*orderDetails.quantity
})

module.exports=OrderDetails