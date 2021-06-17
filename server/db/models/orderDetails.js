const Sequelize = require('sequelize');
const db = require('../db');
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
            return this.getDataValue('totalPrice')/100
        },
        set(totalPriceToBeSet){
            this.setDataValue('totalPrice', Math.floor(totalPriceToBeSet*100))
        }
    }
})


OrderDetails.beforeValidate(async(orderDetails,options)=>{
    //if using magic methods, pass
    //{individualHooks:true}
    //as the second argument for this to run
    const product =await Product.findByPk(orderDetails.productId)
    const basePrice=product.price
    orderDetails.totalPrice= basePrice*orderDetails.quantity
})

module.exports=OrderDetails