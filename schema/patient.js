'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let patientSchema = new Schema({
  patientName : String,
  surname : String,
  birthday : String,
  telephoneNum :String,
  citizenID :String,
  password: String,
  email:  String,
  patientID: String

});
let patient = mongoose.model('patient', patientSchema);

module.exports = patient;
