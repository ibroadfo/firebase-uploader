var client = require('firebase-tools');

client.deploy({
}).then(function() {
  console.log('deployed!');
  process.exit();
}).catch(function(err) {
  console.log(err);
  process.exit();
});
