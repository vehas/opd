'use strict';
var mongoose = require('mongoose');
var doctor = require('../schema/doctor');
let url = 'mongodb://opd:opd@localhost:27017/opd';

console.log(url);
let options = [];

//for long run  connection
// options.server.socketOptions = options.replset.socketOptions = { keepAlive: 1 };
mongoose.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :
    console.log('Connection established to', url);
    }
  });

// var user1 = new doctor({doctorName : 'miyomoto',
// surname : 'sung',
// department : 'ศัลบกรรม',
// telephoneNum : '02-458-78-55',
// citizenID :'1254851253657',
// password: '456',
// email:  'miyo@gmail.com',
// doctorID: '1245122563',});
// user1.save(function (err, userObj) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('saved successfully:', userObj);
//   }
// });
