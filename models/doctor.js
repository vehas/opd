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


// access db
  console.log(req.session);
  doctor.findOne({'citizenID' : req.session.citizenID},(err,respond) => {
    if(err){
      console.log(err);
    }else{
      console.log('doctor :',respond);
      req.session.doctorID = respond.doctorID ;
      let account = { name: respond.doctorName + "  "+ respond.surname,
                      id: respond.doctorID };
      schedule.find({'doctorID' : respond.doctorID},(err,doctorSchedule)=>{
          console.log('doctor Schedule : ',doctorSchedule);
          let out = { page: 'nurse',patient: "", account,doctorSchedule };
          res.render(render, out);

        });
    }
  })

};
module.exports = route;
