'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let appointmentSchema = new Schema({
  date: Date,
  time: String,
  symptom: String,
  cause: String,
  doctorName: String,
  department: String,
  patientID: String,
  doctorID:  String,
  appointmentID: String,
});
var appointment = mongoose.model('appointment',appointmentSchema);
module.exports = appointment;
