'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let doctorSchema = new Schema({
  doctorName : String,
  surname : String,
  department : String,
  telephoneNum :String,
  citizenID :String,
  password: String,
  email:  String,
  doctorID: String,

});
module.exports = doctorSchema;
