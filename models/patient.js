'use strict';
let patientSchema = require('../schema/patient.js');
let route = function route(render, req, res, next) {
  // console.log('-------------------------------------');
  console.log(req.session.actor);
  console.log(!(typeof req.session.actor === 'undefined'));
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

  res.render(render, {
    page: 'patient'
  });
};
module.exports = route;
