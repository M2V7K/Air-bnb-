var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});

module.exports = router;
router.get('/shop', function(req, res, next) {
 res.render('Paris', { title: 'Page Shop: second page !' });
});
router.get('/', function(req, res, next) {
  res.render('Barcelona', { title: 'I m on the /shop' });
   });
   router.get('/', function(req, res, next) {
    res.render('London', { title: 'I m on the /shop' });
     });
     