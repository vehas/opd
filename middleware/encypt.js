var bcrypt = require('bcrypt');
var exports = []
exports.encypt = function encpyt(password,callback) {
  bcrypt.genSalt(10, function(err, salt) {
    if (err)
      return callback(err);

    bcrypt.hash(password, salt, function(err, hash) {
      return callback(err, hash);
    });

  });
};
exports.compare = function compare(password, userPassword, callback)  {
  bcrypt.compare(password, userPassword, function(err, isPasswordMatch) {
       if (err)
         return callback(err);
       return callback(null, isPasswordMatch);
    });
};
module.exports = exports;
