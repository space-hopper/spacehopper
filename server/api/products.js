const router = require('express').Router();
const {
  models: { Product },
} = require('../db');
module.exports = router;

// GET api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// GET api/products/:productId
router.get('/:productId', async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findByPk(productId);
    res.json(product);
  } catch (error) {
    next(error);
  }
});
