var model = require('../models/ApiKey');

function getKeysPromise(key){
   var promise = model.find({ 'apiKey': key }).exec();
   return promise;
}
function keyValidator(apiKey) {
  var promise = getKeysPromise(apiKey);
  return promise.then(function(keys){
    return keys;
  });
  //console.log(promise);
}

module.exports = keyValidator;
