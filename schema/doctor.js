'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let doctorSchema = new Schema({
  doctorName : String,
  surname : String,
  department : String,
  telephoneNum :String,
  citizenID :String,
  password: String,
  email:  String,
  doctorID: String,

});
var doctor = mongoose.model('doctor',doctorSchema);
module.exports = doctor;
