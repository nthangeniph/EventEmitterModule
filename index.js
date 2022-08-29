
const EventEmitter= require('./events');

const myEmitter=new EventEmitter();
myEmitter.on('check',()=>console.log('it is running'));

myEmitter.emit('check')

console.log(myEmitter.eventNames())