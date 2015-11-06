var express = require('express');
var route = express.Router();

route.get('/', (req, res) => {
  res.render('index', {});
});
route.get('/login', (req, res) => {
  res.render('login', {});
});
route.get('/register', (req, res, next) => {
  require('../models/register')('register',
    req, res, next);
});
route.post('/register', (req, res, next) => {
  require('../models/register')('register',
    req, res, next);
});
module.exports = route;
