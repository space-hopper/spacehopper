const Sequelize = require('sequelize');
const db = require('../db');

const Product=db.define('product',{
    name:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    price:{
        type:Sequelize.INTEGER,
        //add methods to convert to and from pennies
        allowNull:false,
        validate:{
            min:0
        },
        get(){
            return this.getDataValue('price')/100
        },
        set(priceToSet){
            this.setDataValue('price',Math.floor(priceToSet*100))
        }
    },
    quantity:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
        validate:{
            min:0
        }
    },
    imageURL:{
        type:Sequelize.DataTypes.TEXT,
        defaultValue:'https://i.etsystatic.com/14179829/d/il/15e5dc/1835412120/il_340x270.1835412120_n3v4.jpg?version=0',
        validate:{
            isUrl:true
        }
    }
})
module.exports=Product