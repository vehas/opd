'use strict';
var appointment = require('../schema/appointment');
var doctor = require('../schema/doctor');
var schedule = require('../schema/schedule');
var route = function route( req, res, next) {
  console.log('appo visit ');
     var url = req.aaid;
     switch (url){
       case 'detail':
            saveDetail(req,res);
            // res.end('ok detail');
            return;
            break;
       case 'choosedate':
            saveDate(req,res);
            res.end('ok choosedate');
            break;
       case 'cancel':
            cancel(req,res);
            return;
            break;
     }
    console.log(req.aaid);
    res.end('ok');
  // res.render(render, {page:'appointment'});


};
module.exports = route;
function saveDetail(req,res) {
console.log("saveDetail : ",req.body);
var docname = req.body.detail.Doctor;
if(docname !== ""){
  doctor.findOne({'doctorName' : docname },(err,resp)=>{
    if(err) console.log(err);
    else{

      console.log("data : ",resp);
      schedule.find({'doctorID': resp.doctorID},(err,docsche)=>{
        if(err) console.log(err);
        else{
          req.session.doctorID = resp.doctorID;
          let time = JSON.stringify(docsche.slice(0,4));
          console.log(time);
          res.end(time);
        }
      });
    }
  });
}else{

  }
}
function saveDate(req,res) {
  var appoint  =  {
    date : req.body.date,
    time : "",
    symtom : req.body.detail.Symtom,
    doctorName : req.body.detail.Doctor,
    department :  req.body.detail.department,
    patientID : req.session.citizenID,
    doctorID : req.session.doctorID,
}
  console.log("appoint >",appoint);
  let upappoint = new appointment(appoint);
  upappoint.save(function (err, userObj) {
      if (err) {
        console.log(err);
      } else {
        console.log('saved appointment successfully:', userObj);
        }
    });

}

function cancel(req,res) {
  console.log(req.body.appointmentCancel);
  var appoid =  req.body.appointmentCancel;
  appointment.findOneAndRemove(appoid, (err,res) =>{
    if(err) console.log('err : ', err);
    else console.log(res);
  });
}
