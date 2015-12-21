var express = require('express');
var router = express.Router();

var siteData = {
  title: 'Pancake API',
  version: '1.0.0',
  authors: 'WDI Roger Panella',
  date: 'Dec 21st, 2015'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', siteData);
});

module.exports = router;
