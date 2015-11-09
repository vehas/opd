'use strict';
let route = function route(render, req, res, next) {
  res.render(render, { page: 'doctor' });
};
module.exports = route;
