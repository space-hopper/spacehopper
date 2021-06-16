const router = require('express').Router();
<<<<<<< HEAD
const Product = require('../db/models/product');
=======
const { Product } = require('../db');
>>>>>>> 714baaa1220bf9dc75df8a96a771fce721747a36
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
