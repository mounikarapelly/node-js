var fs = require('fs');

fs.read('text.txt',function(err,data){
    if(err){
        console.log(err);
    }
    setTimeout(() =>{
        console.log("diplay after 2seconds")
    }, 2000);
});

 
 console.log('start here')