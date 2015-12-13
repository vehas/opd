'use strict';
let express = require('express');
let route = express.Router();

route.get('/', (req, res) => {
  res.render('login', {
    login: true
  });
});
route.get('/login', (req, res) => {
  res.render('login', {
    login: true
  });
});
route.post('/login', (req, res, next) => {
  require('../models/login')(req, res, next);
});
route.param('aaid', (req, res, next, aaid) => {
  req.aaid = aaid;
  console.log('----------------');
  require('../models/appointment')(req, res, next);
});
route.post('/appointment/:aaid', () => {});
route.post('/register', (req, res, next) => {
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

route.param('npid', (req, res, next, npid) => {
  req.npid = npid;
  console.log(npid);
  require('../models/addPatientDetail')('addPatientDetail',
    req, res, next);
});
route.get('/nurse/patient/:npid', (req, res, next) => {
  require('../models/nurse')('nurse',
    req, res, next);
});

route.get('/nurse', (req, res, next) => {
  require('../models/nurse')('nurse',
    req, res, next);
});
route.param('dpid', (req, res, next, id) => {
  req.id = id;
  console.log(id);
  next();
});
route.get('/doctor/schedule', (req, res, next) => {
  require('../models/doctorDetail')('doctorDetail',
    req, res, next);
});
route.get('/doctor', (req, res, next) => {
  require('../models/doctor')('doctor',
    req, res, next);
});
route.post('/doctorSchedule', (req, res, next) => {
  require('../models/doctorSchedule')('schedule',
    req, res, next);
});
route.get('/pharmacist', (req, res, next) => {
  require('../models/pharmacist')('pharmacist',
    req, res, next);
});


route.param('ppid', (req, res, next, id) => {
  req.id = id;
  console.log(id);
  next();
});
route.get('/pharmacist/patient/:ppid', (req, res, next) => {
  require('../models/pharmacistDetail')('pharmacistDetail',
    req, res, next);
});
route.get('/admin', (req, res, next) => {

  require('../models/admin')('admin',
    req, res, next);
});
route.post('/admin', (req, res, next) => {

  require('../models/adminSave')('admin',
    req, res, next)
});
module.exports = route;
