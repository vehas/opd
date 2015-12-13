'use strict';
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

  schedule.find({'doctorID' : req.session.doctorID},(err,doctorSchedule)=>{
      // doctorSchedule = {doctorSchedule : JSON.stringify(doctorSchedule)}
      // console.log('doctor Schedule : ', doctorSchedule);
      let account = { name: req.session.doctorName + "  "+ req.session.surname,
                      id: req.session.doctorID };
      let out = { page: 'doctor',
                  patient: "",
                  account,
                  doctorSchedule : JSON.stringify(doctorSchedule) };
      console.log(out);
      res.render(render, out);

    });
};
module.exports = route;
