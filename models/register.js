'use strict';
let route = function route(render, req, res, next) {
  res.render(render, { page: 'register', unauthenedPage: true });
};
module.exports = route;
