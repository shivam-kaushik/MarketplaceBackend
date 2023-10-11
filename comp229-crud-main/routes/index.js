var express = require('express');
var router = express.Router();
var apiRouter = require('./api');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  const jsonResponse = {
    message: 'Welcome to Marketplace Application'
  };

  res.json(jsonResponse);
});

router.use('/api', apiRouter)

module.exports = router;
