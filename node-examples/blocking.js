var fs = require('fs');
 var data = fs.readFileSync('text.txt');//sychronnous 
 console.log(data.toString());
 console.log('end here')