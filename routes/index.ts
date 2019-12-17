import {RequestHandler} from 'express';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '方方' });
} as RequestHandler);

module.exports = router;
