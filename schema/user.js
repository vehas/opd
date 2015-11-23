'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let userSchema = new Schema({
  citizenID : String,
  password : String,
  actor : [String],

});
var user = mongoose.model('users',userSchema);

module.exports = user;
