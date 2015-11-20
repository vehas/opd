'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let appointmentSchema = new Schema({
  patientName : String,
  surname : String,
  birthday : String,
  telephoneNum :String,
  citizenID :String,
  password: String,
  email:  String,
  patientID: String

});
module.exports = appointmentSchema;
