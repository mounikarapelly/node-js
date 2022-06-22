//make directory

var fs =require('fs');
  

fs .mkdir('stuff',function(){
    fs.readFile('readme.txt','utf8',function(err,data){
        fs.writeFile('./stuff/writeme.txt',data);

    });
});

//remove directory
//var fs =require('fs');

//fs.unlink('./stuff/writeme.txt',function(){
  
//  fs.rmdir('stuff');

//});