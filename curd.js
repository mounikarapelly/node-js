const express = require('express');//importing
 const app = express();

 app.use(express.json());

app.get('/',(req,res)=>{
    res.send('<h1>express js <h1/>')
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


app.get("/employee/:id",(req,res)=>{
   const newData = employee.filter(item => item.id.toString()===req.params.id);
   return res.json(newData);
});

app.post("/addemployee",(req,res)=>{
    const{id,name} =req.body;
    console.log(id,name);

    return res.send ("data stored !!!!!!!!!");
});


app.put("/addemployeedata",(req,res)=>{
    const{id,name} =req.body;
    console.log(id,name);

    return res.send ("data stored  nd updated!!!!!!!!!");
});

app.delete("/employee/:id",(req,res)=>{
    const newData = employee.filter(item => item.id.toString()===req.params.id);
    console.log(id,name);

    return res.json(newData);
 });



 app.listen(1008,()=> console.log(' new server running'));