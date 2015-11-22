'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let patientDetailSchema = new Schema({
  bloodpressure : String,
  height : String,
  weight : String,
  temperature :String,
  pulseRate :String,
  patientID: String,

});
var patientDetail = mongoose.model('patientDetail',patientDetailSchema);

module.exports = patientDetail;
