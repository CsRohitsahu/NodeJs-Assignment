const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('subscribe', (data) => {
  console.log('Thanks for subscrbing to',data);
});

myEmitter.emit('subscribe',"college wallah");
