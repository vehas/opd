'use strict';
let route = function route(render, req, res, next) {
  res.render(render, {page:'hospital Staff'});
};
module.exports = route;
