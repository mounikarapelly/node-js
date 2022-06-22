function callFunction(fun){
    fun();
   }
   
   var data = function(){
       console.log('bye');
   }
   
   callFunction(data);