const router = require('express').Router();
const { User, Order, Product, OrderDetails } = require('../db');

//mounted on /api/orders
router.post('/:userId', async (req, res, next) => {
  try {
    const order = await Order.create();
    await order.setUser(await User.findByPk(req.params.userId));
    res.json(order);
  } catch (err) {
    next(err);
  }
});
router.get('/cart/:userId', async (req, res, next) => {
  try {
    const order = await Order.findAll({
      include: {
        model: User,
        where: {
          id: req.params.userId,
        },
      },
      where: {
        status: 'cart',
      },
    });
    res.json(order);
  } catch (err) {
    next(err);
  }
});
router.put('/checkout/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId);
    if (order.status !== 'cart')
      res.status(403).json('This order has already been placed');
    else {
      const products = await order.getProducts();
      console.log(products);
      const outOfStock = await products.reduce(async (accumulator, val) => {
        if (val.quantity < val.orderDetails.quantity) accumulator = true;
        return accumulator;
      }, false);
      if (outOfStock)
        res.status(403).json('One or more items are out of stock');
      else {
        await order.set('status', 'pending');
        await order.save();
        for (let i = 0; i < products.length; i++) {
          const quantity = products[i].quantity;
          await products[i].set(
            'quantity',
            quantity - products[i].orderDetails.quantity,
          );
          await products[i].save();
        }
        res.send(order);
      }
    }
  } catch (err) {
    next(err);
  }
});
router.put('/:orderId/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    const order = await Order.findByPk(req.params.orderId);
    await order.addProduct(product);
    res.json(order);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
