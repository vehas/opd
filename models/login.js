'use strict';
var comparePassword = require('../middleware/encypt').compare;
// var patient = require('../schema/patient');
var user = require('../schema/user');
var route = function route(req, res, next) {
    var login =req.body;
    user.findOne({'citizenID': login.citizenID},
    'citizenID password actor',
    function query(err,db) {
      if (err) console.log(err);
      console.log(db,login);
      if(db === null){
        res.end('incorrect');
        return;
      }
      comparePassword(login.password,db.password,
        function loginComplete(err,ismatch) {
          if(err) console.log(err);
          if(ismatch){
            req.session.user = db.actor[0];
              res.end(req.session.user);
              // res.end('patient');
          }else{

            res.end('incorrect');
          }
        });
    });

};
module.exports = route;
