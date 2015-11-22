'use strict';
var patient = require('./patient');
var doctor = require('../schema/doctor');
let route = function route(render, req, res, next) {
    console.log(req.query);
     var user1 = new doctor(req.query);
     user1.save(function (err, userObj) {
       if (err) {
         console.log(err);
       } else {
         console.log('saved successfully:', userObj);
       }
     });
  let out = { page: 'nurse' };
  res.render(render, out);
};
module.exports = route;
