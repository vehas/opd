'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let medicalHistorySchema = new Schema({
  patientID: String,
  medicalName: [String],


});
module.exports = medicalHistorySchema;
