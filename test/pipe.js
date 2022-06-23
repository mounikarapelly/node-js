var http =require('http');
var fs = require ('fs');


var server = http.createServer(function(req,res){
    console.log('request was made:'+ req.url);
    res.writeHead(200,{'Content-Type': req.url});
    
    res.end('showing the data')
});

server.listen(3004,'127.0.0.1');
console.log('port is 3000');