var express = require('express');
var app = express();

app.get("/",function (req, res) {
    res.send("<h1>ALL THE DATA WORKS HERE......THOOSE MODULES</h1>");

});
app.get("/test", function (req, res) {
    res.send("<h2>test version works</h2>");

});

app.listen(3003, function () {
    console.log('server listening to the port 8033');

});