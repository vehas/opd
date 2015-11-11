'use strict';
let route = function route(render, req, res, next) {
  let account = { name: 'nurse girl', id: '1002002123' };
  let patient = [
    { name: 'stamp', surname: 'polo', gender: 'male', age: 30 },
    { name: 'nina', surname: 'johnson', gender: 'female', age: 33 },
    { name: 'mimoya', surname: 'freeman', gender: 'male', age: 67 }
  ];
  let out = { page: 'nurse', patient, account };

  console.log('out', out);
  res.render(render, out);
};
module.exports = route;
