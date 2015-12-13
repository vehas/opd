'use strict';
let route = function route(req, res, next) {
  req.session.destroy();
  res.redirect('/');
};
module.exports = route;
