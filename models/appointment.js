'use strict';
let route = function route(render, req, res, next) {
  res.render(render, {page:'appointment'});
};
module.exports = route;
