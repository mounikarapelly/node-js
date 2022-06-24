var http= require("http");
var url = require("url");

var server = http.createServer(function (req,res){
    res.writeHead(200, ("Content-Type","data.txt"));
    var q= url.parse(req.url,true).query;
    var txt =q.year + "" +q.month;
    res.end(txt);
});

server.listen(8000);
console.log("started");