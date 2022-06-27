const express = require('express');//importing
 const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>hello<h1/>')
});

const employee= [
    {
        id:1,
        name:"mounika",
        "emp-id":46191483
    },
    {
        id:2,
        name:"meena",
        "emp-id":4834619
    },
    {
        id:3,
        name:"riya",
        "emp-id": 9483461
    }
]

app.get("/employee",(req,res)=>{
    res.json(employee)
});


 app.listen(1006,()=> console.log('server running'));