
var counter = function(arry){
    return 'The number of '+arry.length + '\n done!';
};

var adder = function(a,b){
    return 'On adding the two number it gives'+(a+b);
}

var pi = 3.142;


//module.exports.counter = counter ;
//module.exports.adder = adder;
//module.exports.pi = pi;


//export const counter = counter;
//export const adder = adder;
//export const pi = pi;
module.exports ={
    counter: counter,
    adder: adder,
    pi: pi
};