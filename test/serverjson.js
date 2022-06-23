
var http = require('http');
var fs =require('fs');

var server = http.createServer(function(req, res){
    console.log('reuqest  was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});

    var object = {
        name: 'meena',
        job: 'analyst',
        age: '22'
    };

    res.end(JSON.stringify(object));
})