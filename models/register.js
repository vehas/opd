'use strict';
let route = function route(render, req, res, next) {
  res.render(render, {age:2});
};
module.exports = route;
