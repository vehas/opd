'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let scheduleSchema = new Schema({
  doctorID : String,
  date : Date,
  time :String,

});
var schedule = mongoose.model('schedule',nurseSchema);

module.exports = schedule;
