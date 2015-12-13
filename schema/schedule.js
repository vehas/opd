'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let scheduleSchema = new Schema({
  doctorID : String,
  date : Date,
  time :String,
  period: String

});
var schedule = mongoose.model('schedule', scheduleSchema);

module.exports = schedule;
