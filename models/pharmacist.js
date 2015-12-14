'use strict';
let route = function route(render, req, res, next) {
  res.render(render, { page: 'pharmacist' ,login: true});
};
module.exports = route;
