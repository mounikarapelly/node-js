var http =require('http');
var fs = require ('fs');


var server = http.createServer(function(req,res){
    console.log('request was made:'+ req.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    var myReadStream =fs.createReadStream(__dirname + '/text.html','utf8');
    myReadStream.pipe(res);
});

server.listen(3002,'127.0.0.1');
console.log('port is 3000');