'use strict';
let patient = require('../schema/patient');
let appointment = require('../schema/appointment');
let route = function route(render, req, res, next) {
  // console.log('-------------------------------------');
  console.log(req.session.actor);
  // console.log(!(typeof req.session.actor === 'undefined'));
  if (typeof req.session.actor === 'undefined') {
    console.log('unauthen undefined');
    res.redirect('/');
    return;
  }
  if (!(req.session.actor.indexOf('patient') > -1)) {
    console.log('unauthen not patient');
    res.redirect('/');
    return;
  }
  // find patinet appointment
  console.log('citizenID', typeof req.session.citizenID);
  patient.findOne({
    'citizenID': req.session.citizenID
  }, (err, respond) => {
    if (err) {
      console.log(err);
    } else {
      console.log('respond :', respond);
      let account = {
        name: respond.patientName + " " + respond.surname,
        id: respond.citizenID
      };
      // render
      appointment.find({
        'patientID': respond.citizenID
      }, (err, appoints) => {
        var apps = appoints;
        // for (var i in apps) {
        //   console.log(apps[i].date);
        //   apps[i].date = '1';
        //   console.log(apps[i].date);
        // }
        console.log("appointment s >", apps);
        res.render(render, {
          page: 'patient',
          account,
          apps
        });
      })
    }
  });
};

function bdate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var date = new Date();
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  console.log(day, monthNames[monthIndex], year);
  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}
module.exports = route;
