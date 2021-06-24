const router = require('express').Router();
const { User, Order, Product } = require('../db');
const { requireToken } = require('./gatekeepingMiddleware');

//mounted on /api/orders
router.post('/:userId', requireToken, async (req, res, next) => {
  try {
    const order = await Order.create();
    await order.setUser(await User.findByPk(req.params.userId));
    res.json(order);
  } catch (err) {
    next(err);
  }
});

router.get('/cart/:userId', requireToken, async (req, res, next) => {
  try {
    const order = await Order.findAll({
      include: [
        {
          model: User,
          where: {
            id: req.params.userId,
          },
        },
        { model: Product },
      ],
      where: {
        status: 'cart',
      },
    });
    res.json(order);
  } catch (err) {
    next(err);
  }
});

router.put('/checkout/:orderId', requireToken, async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId);
    if (order.status !== 'cart')
      res.status(403).json('This order has already been placed');
    else {
      const products = await order.getProducts();
      const outOfStock = await products.reduce((accumulator, val) => {
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
router.put('/:orderId/:productId', requireToken, async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId);
    const productsInOrder = await order.getProducts();
    const product = await Product.findByPk(req.params.productId);
    if (
      !productsInOrder.reduce((accumulator, val) => {
        if (val.id == req.params.productId) accumulator = true;
        return accumulator;
      }, false)
    ) {
      await order.addProduct(product, { individualHooks: true });
    } else {
      if (req.body.quantity == 0) {
        await order.removeProduct(product);
      } else {
        await productsInOrder
          .filter(
            (val) =>
              val.orderDetails.orderId == req.params.orderId &&
              val.orderDetails.productId == req.params.productId,
          )[0]
          .orderDetails.update(
            { quantity: req.body.quantity },
            { individualHooks: true },
          );
        await productsInOrder
          .filter(
            (val) =>
              val.orderDetails.orderId == req.params.orderId &&
              val.orderDetails.productId == req.params.productId,
          )[0]
          .orderDetails.save();
      }
    }
    res.json(order);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
