'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let medicineSchema = new Schema({
  medicineName : String,
  medicineID : String,


});
module.exports = medicineSchema;
