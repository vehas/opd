'use strict';
var patient = require('./patient');
var doctor = require('../schema/doctor');
let route = function route(render, req, res, next) {
  res.render(render,{login : true});
};
module.exports = route;
