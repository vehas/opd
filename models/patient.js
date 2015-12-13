'use strict';
let patient = require('../schema/patient.js');
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
  console.log(req.session);
  patient.findOne({
    'citizenID': req.session.citizenID
  }, (err, respond) => {
    if (err) {
      console.log(err);
    } else {
      console.log(req.respond);
      let account = {
        name: "เวหา สุวัฒน์",
        id: "3323433"
      };

      // render
      res.render(render, {
        page: 'patient',
        account
      });
    }
  });
};
module.exports = route;
