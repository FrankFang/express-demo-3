var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users 发送这句话');
});
router.get('/xxx', function(req, res, next) {
  res.send('xxx 发送这句话');
});

module.exports = router;
