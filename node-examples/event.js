var http =require('http');
var events =require('events');

var eventEmitter = new events.EventEmitter();

var server = http.createServer(function(req,res){
    eventEmitter.emit("some data requested here");//event trigger
    res.end('now server works');

});

eventEmitter.on('someone requested',function(){
    console.log("a request has been done on the server");

});//event listener

server.listen(8001,"localhost",function(){
    console.log('server started on port : 8001');

});