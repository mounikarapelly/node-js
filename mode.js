var fs = require('fs');

var readStream = fs.createReadStream('./text.txt');

readStream.on('open', function () {
  console.log('The file is open');
});