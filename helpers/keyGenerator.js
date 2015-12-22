var model = require('../models/ApiKey');
var uuid = require('node-uuid');
var crypto = require('crypto');

function generateKey() {
  var key = uuid();
  //console.log(key)

  key = crypto.createHash('sha256')
          .update(key)
          .update('salt')
          .digest('hex');

  //console.log(key);

  model.create({ apiKey: key }, function(err, secret) {
    if (err) {
      //console.log(err);
    }
  });

  return key;
}

module.exports = generateKey;
