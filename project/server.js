const express = require('express');//importing
 const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>hello<h1/>')
});


 app.listen(1005,()=> console.log('server running'));
