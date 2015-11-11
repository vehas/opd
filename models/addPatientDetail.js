'use strict';
let route = function route(render, req, res, next) {
  let account = { name: 'nurse girl', id: '1002002123' };
  let patient = req.npid;
  let out = { page: 'nurse', patient, account };

  console.log('out', out);
  res.render(render, out);
};
module.exports = route;
