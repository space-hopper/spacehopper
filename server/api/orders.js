const router = require('express').Router();
const { User, Order, Product } = require('../db');

//mounted on /api/orders
// POST /api/orders/:userId
router.post('/:userId', async (req, res, next) => {
  try {
    const order = await Order.create();
    await order.setUser(await User.findByPk(req.params.userId));
    res.json(order);
  } catch (err) {
    next(err);
  }
});

// GET /api/orders/cart/:userId
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

// PUT /api/orders/:orderId/:productId
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
