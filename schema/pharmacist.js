'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let pharmacistSchema = new Schema({
  pharmacistName : String,
  surname : String,
  citizenID : String,
  password: String,


});
module.exports = pharmacistSchema;
