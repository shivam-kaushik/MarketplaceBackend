var express = require('express');
var router = express.Router();
var productController = require('../controllers/product.controller')

/* GET users listing. */
router
  .get('/', productController.find)
  .post('/', productController.save)
  .get('/:_id', productController.find)
  .put('/:_id', productController.update)
  .delete('/:_id', productController.delete)
  .delete('/', productController.deleteAll)
  // .get('/name/:name', productController.find)

module.exports = router;
