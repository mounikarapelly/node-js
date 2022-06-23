var http = require('http');

var server = http.createServer(function(req, res){

    console.log('request was made:' +req.url)
    
    res.writeHead(200,{'content-Type':'text/plain'});
    res.end("hey data storing");
    
});

server.listen(3003,'127.0.0.1');
console.log("something here")