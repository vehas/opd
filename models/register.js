'use strict';
var patient = require('../schema/patient');
let route = function route(render, req, res, next) {

  // console.log(req.body);
  let upar = new patient(req.body);
  upar.save(function (err, userObj) {
    if (err) {
      console.log(err);
    } else {
      console.log('saved successfully:', userObj);
    }
  });
  res.end('good');
  // res.render(render, { page: 'register', unauthenedPage: true });
};
module.exports = route;
