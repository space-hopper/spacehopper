const router = require('express').Router();
const {User, Order, Product}=require('../db')

//mounted on /api/orders
router.post('/:userId', async(req,res,next)=>{
    try{const order=await Order.create()
        await order.setUser(await User.findByPk(req.params.userId))
    res.json(order)}
    catch(err){
        next(err)
    }
})
router.get('/cart/:userId', async(req,res,next)=>{
    try {
        const order=await Order.findAll({include:{
            model: User,
            where:{
                id:req.params.userId,
                
            }
        },where:{
            status:"cart"
        }})
        res.json(order)
    } catch (err) {
        next(err)
    }
})
router.put('/checkout/:orderId',async(req,res,next)=>{
    try{
        const order = await Order.findByPk(req.params.orderId, {include:{model:'product'}});
        console.log(order)
        if(order.status!=='cart') res.status(304).json('This order has already been placed')
        else{order.setValue('status','pending');
        const outOfStock=order.products.reduce((accumulator,val)=>{
            if(val.quantity<=0)accumulator=true
            return accumulator
        }, false)
        if(outOfStock) res.status(304).send('One or more items are out of stock')
        else{
            for(let i=0;i<order.products.length;i++){
                await order.products[i].setValue(order.products[i].quantity-1)
            }
            res.send(order)
        }}
        
    }
    catch(err){
        next(err)
    }
})
router.put('/:orderId/:productId', async(req,res,next)=>{
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