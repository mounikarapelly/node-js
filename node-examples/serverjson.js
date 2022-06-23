var express = require('express');
var http =require('http');
var fs = require('fs');

var app = express();
var server = http.createServer(app);


app.get("/",function (req, res) {
    res.send("<h1>ALL THE DATA WORKS HERE......THOOSE MODULES</h1>");

});
app.get("/test", function (req, res) {
    fs.readFile('./db.json',function(req,res){
        var test = JSON.parse(data.toString()).test;
        res.json(test);
    });

});

app.listen(3033, function () {
    console.log('server listening to the port 8033');

});