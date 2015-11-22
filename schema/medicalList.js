'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let medicalListSchema = new Schema({
  medicineName : String,
  medicineID : String,
  amount: String,
  diagnosisID: String

});
var medicalList = mongoose.model('medicalList',medicalListSchema);

module.exports = medicalList;
