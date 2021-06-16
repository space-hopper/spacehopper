const router = require('express').Router();
const User, Order, Product=require('../db')

//mounted on /api/orders
router.post('/:orderId/:productId', async(req,res,next)=>{
    try{
        
        const product= await Product.findByPk(req.params.productId)
        const order= await Order.findByPk(req.params.orderId)
        await order.addProduct(product)
        res.json(order)
    }
    catch(err){
        next(err)
    }
})

module.exports=router