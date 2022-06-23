var fs = require('fs');


fs.writeFile('./text.txt','data stored',function (err){
    if(!err) {
        fs.readFile('.text.txt',function (err ,data){
            if(!err){
                console.log(data.toString());
            }
        });
        
    }
});