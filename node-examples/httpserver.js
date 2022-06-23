var http = require('http');


var serever = http.createServer(function(req, res){
    res.end("now server works!!! go nd check it");


});

serever.listen(8111,'localhost',function(){
    console.log("server started with port number");

});