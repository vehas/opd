'use strict';
let route = function route(render, req, res, next) {
  let account = { name: 'dogster', id: '1102007823' };
  let patient = [
    { name: 'macro', surname: 'polo', gender: 'male', age: 30 },
    { name: 'nina', surname: 'johnson', gender: 'female', age: 33 },
    { name: 'mimoya', surname: 'freeman', gender: 'male', age: 67 }
  ];
  let out = { page: 'nurse', patient, account };
  res.render(render, out);
};
module.exports = route;
