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
route.get('/patient', (req, res, next) => {
  require('../models/patient')('patient',
    req, res, next);
});
route.get('/hospitalStaff', (req, res, next) => {
  require('../models/hospitalStaff')('hospitalStaff',
    req, res, next);
});
route.get('/nurse', (req, res, next) => {
  require('../models/nurse')('nurse',
    req, res, next);
});
route.get('/doctor', (req, res, next) => {
  require('../models/doctor')('doctor',
    req, res, next);
});
route.get('/pharmacist', (req, res, next) => {
  require('../models/pharmacist')('pharmacist',
    req, res, next);
});
module.exports = route;
