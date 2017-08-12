var events = require('events');
var life = new events.EventEmitter();


function aa(who){
     console.log('test'+who);
}

life.on('test',aa);

life.on('test',aa);
life.on('test',function(who){
     console.log('test'+who);
});
life.on('test1',function(who){
    console.log('test1'+who);
});

life.removeListener('test',aa);
life.removeAllListeners('test');

life.emit('test','you');
life.emit('test1','13123');

console.log(life.listeners('test').length);
