'use strict';
var patient = require('../schema/patient');
var user = require('../schema/user');
var encypt = require('../middleware/encypt').encypt;
let route = function route(render, req, res, next) {

  console.log(req.body);
  var registerUser = {};
  registerUser.citizenID = req.body.citizenID;
  registerUser.password = req.body.password;
  registerUser.actor = ['patient'];
  var registerPatient = req.body;

  let upar = new patient(registerPatient);
  upar.save(function (err, userObj) {
      if (err) {
        console.log(err);
      } else {
        console.log('saved patient successfully:', userObj);
        }
    });
  encypt( registerUser.password,function save(err,password) {
    registerUser.password = password;
    let uuar = new user(registerUser);
    uuar.save(function (err, userObj) {
        if (err) {
          console.log(err);
        } else {
          console.log('saved user successfully:', userObj);
          }
      });
    res.end('success');
    })
  // next();
};
module.exports = route;
