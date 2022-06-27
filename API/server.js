const express = require('express');

const mongoose = require('mongoose');

const app = express ();
mongoose.connect('mongodb+srv://NodeApiProject:NodeApiProject@test.3vnhx.mongodb.net/?retryWrites=true&w=majority').then(()=>
console.log("db connected")
).catch(err=> console.log(err));

app.get('/',(req,res)=>{
    res.send("hello");

});
app.listen(1010,() =>{
    console.log("server started.........!!!!!!!!!");
});