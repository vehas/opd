'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let medicineSchema = new Schema({
  medicineName : String,
  medicineID : String,


});
var medicine = mongoose.model('medicine',medicineSchema);

module.exports = medicine;
