const EventEmitter = require('events');
const emitter = new EventEmitter();

console.log("default maximum no. of event lisner",emitter.getMaxListeners()); // prints 10
emitter.setMaxListeners(5);
console.log("updated maximum no. of eventLisner",emitter.getMaxListeners()); // prints 51
