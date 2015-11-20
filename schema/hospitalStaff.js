'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let hospitalStaffSchema = new Schema({
  hospitalStaffName : String,
  surname : String,
  citizenID : String,
  password: String,


});
module.exports = hospitalStaffSchema;
