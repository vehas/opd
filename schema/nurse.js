'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let nurseSchema = new Schema({
  nurseName : String,
  surname : String,
  citizenID : String,
  password: String,


});
module.exports = nurseSchema;
