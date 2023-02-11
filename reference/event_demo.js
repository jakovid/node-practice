const EventEmitter = require('events');

//create class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event', () => console.log('Event fired!'));

// init event
myEmitter.emit('event');