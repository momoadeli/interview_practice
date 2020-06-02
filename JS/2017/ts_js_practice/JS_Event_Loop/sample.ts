// RESOURCES:
// Video: https://www.youtube.com/watch?v=8aGhZQkoFbQ
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
// NOTES: there are 4 main objects to consider:
//  1. message queue (aka 'stack'): only one thing at a time
//  2. webapi: where brwoser apis live (eg setTimeout)
//  3. task queue:  where callbacks are queued
//  4. event loop reads both message and task queues. move taks to events 
//  if events are empty.  Non-blocking
// SEQUENCE OF EVENTS BELOW:
// <start>
// main() is added to msg q (mq)
// tot is added to top of mq
// settimeout is added to mq. since it has callback anon function 
//  (console.log) the callback anon func is added to web api
//  which means anon function is added to task q.
// settimeout is popped from mq. 
// tot is popped. now mq is empty
// event loop moves anon from task q to mq.
// console log is added to mq
// console log is popped from mq
// anon is popped from mq.
// <end>




var tot = function() {
    setTimeout( () => {
    console.log('date is: ', new Date())
    }, 0);
}

tot();