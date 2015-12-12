'use strict';
var appointment = require('../schema/appointment');
var route = function route( req, res, next) {
  console.log('appo visit ');
     var url = req.aaid;
     switch (url){
       case 'detail':
            saveDetail(req);
            res.end('ok detail');
            return;
            break;
       case 'choosedate':
            res.end('ok choosedate');
            break;
     }
    console.log(req.aaid);
    console.log('no life : ',req.body);
    res.end('ok');
  // res.render(render, {page:'appointment'});


};
module.exports = route;
function saveDetail(req) {
console.log("saveDetail : ",req.body);
  
  // let appo = new appointment({
  //
  // });
  // appo.save(function (err, userObj) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log('saved patient successfully:', userObj);
  //       }
  //   });
}
