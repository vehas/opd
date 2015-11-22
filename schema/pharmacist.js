'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let pharmacistSchema = new Schema({
  pharmacistName : String,
  surname : String,
  citizenID : String,
  password: String,


});
var pharmacist = mongoose.model('pharmacist',nurseSchema);

module.exports = pharmacist;
