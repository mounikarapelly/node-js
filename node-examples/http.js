
const express =  require ("express");
const app =express();


app.get ("/",(req, res) =>{
    res.send ("hello");
});

app.post("/data",(req,res)=>{
    res.send("post method will execute");

});

app.get("/display",(req,res)=>{
    res.send("post method will execute");

});

app.listen("8082", ()=>{
    console.log("server started");
});

