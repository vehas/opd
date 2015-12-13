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
      req.session.doctorName = respond.doctorName;
      req.session.surname = respond.surname;
      let account = { name: respond.doctorName + "  "+ respond.surname,
                      id: respond.doctorID };

          let out = { page: 'doctor',
                      patient: "",
                      account };
          console.log(out);
          res.render(render, out);


    }
  })

};
module.exports = route;
