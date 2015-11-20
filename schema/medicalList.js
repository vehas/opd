'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let medicalListSchema = new Schema({
  medicineName : String,
  medicineID : String,
  amount: String,
  diagnosisID: String

});
module.exports = medicalListSchema;
