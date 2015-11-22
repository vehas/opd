'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let diagnosisSchema = new Schema({
  SymtompID : String,
  SymtompName : String,
  appointmentID: String,
  diagnosisID: String

});
var diagnosis = mongoose.model('diagnosis',diagnosisSchema);
module.exports = diagnosis;
