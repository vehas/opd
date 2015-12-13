'use strict';
let doctor = require('../schema/doctor');
let schedule = require('../schema/schedule');
let route = function route(render, req, res, next) {
  // check login
  if (typeof req.session.actor === 'undefined') {
    console.log('unauthen undefined');
    res.redirect('/');
    return;
  }
  if (!(req.session.actor.indexOf('doctor') > -1)) {
    console.log('unauthen not doctor');
    res.redirect('/');
    return;
  }
//
console.log(req.body);
res.end('ok');
// return;
var time = req.body;
time.doctorID = req.session.doctorID;
var sch = new schedule(time);
console.log('schedule : ',sch);
sch.save(function (err, userObj) {
    if (err) {
      console.log(err);
    } else {
      console.log('saved schedule successfully:', userObj);
      }
  });
};
module.exports = route;
