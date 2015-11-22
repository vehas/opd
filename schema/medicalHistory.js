'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let medicalHistorySchema = new Schema({
  patientID: String,
  medical: [ {name : String , ID : String}],


});
let medicalHistory = new mongoose.model('medicalHistory', medicalHistorySchema);
module.exports = medicalHistory;
