'use strict';
let patientSchema = require('../schema/patient.js');
let route = function route(render, req, res, next) {
  let a=10;
  console.log(patientSchema);
  res.render(render, { page: 'patient' });
};
module.exports = route;
