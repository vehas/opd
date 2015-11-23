'use strict';
var appointment = require('../schema/appointment');
let route = function route( req, res, next) {
    console.log(req.body);
    res.end('ok');
  // res.render(render, {page:'appointment'});


};
module.exports = route;
