const events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler
var myEventHandler = function() {
  console.log('Event was triggered!');
}

// Register the event handler
eventEmitter.on('myEvent', myEventHandler);

// Call the event handler
eventEmitter.emit('myEvent');

// Remove the event handler
eventEmitter.removeListener('myEvent', myEventHandler);

// Call the event handler again
eventEmitter.emit('myEvent');



/*when we remove event and try to call it the eventhandler function is not invoked*/ 