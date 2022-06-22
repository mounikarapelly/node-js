var events = require('events');
var util = require('util');

var Person = function(name){

    this.name = name;
}

util.inherits(Person,events.EventEmitter);

var james = new Person('james');
var smitha = new Person('smitha');
var swetha = new Person('swetha');

var People = [james,smitha,swetha];

People.forEach(function(Person){
    Person.on('speak',function(msg){
        console.log(Person.name + '    said this ' + msg );
    });
});

james.emit('speak','This is james');
smitha.emit('speak','OH great nice to meet you Mer. ');
swetha.emit('speak','Thats cool');