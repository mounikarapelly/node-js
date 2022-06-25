var concatMap = require('../');
var x = [ 1, 2, 3, 4, 5, 6 ];
var y = concatMap(x, function (x) {
    return x % 2 ? [ x - 0.1, x, x + 0.1 ] : [];
});
console.dir(y);