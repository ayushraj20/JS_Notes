// Tracing of below code is done in Feb-23 notes pageNo -> 5

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout() {
  return new Promise(function executor(resolve, reject) {
    console.log('Entering the executor callback in the promise constructor');
    setTimeout(function () {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        // if the random number is even we fulfill
        resolve(num);
      } else {
        // if the random number is odd we reject
        reject(num);
      }
    }, 8000);
    console.log('Exiting the executor callback in the promise constructor');
  });
}

console.log('Starting....');
const p = createPromiseWithTimeout();
console.log('We are now waiting for the promise to complete');
console.log('Currently my promise object is like ... ', p);

p.then(
  function fulfillHandler(value) {
    console.log('Inside fulfill handler with value', value);
    console.log('Promise after fulfillment is', p);
  },
  function rejectionHandler(value) {
    console.log('Inside rejection handler with value', value);
    console.log('Promise after rejection is', p);
  }
);

/*
    Promise object have 4 properties - 1. State (state is 'Pending' ByDefault)
                                       2. Value (value is 'undefined' ByDefault)
                                       3. onFulfillment: [ ] (array is empty byDefault)
                                       4. onRejection: [ ]    (array is empty byDefault)
    
    p.then() just registers the functions i.e fulfillHandler & rejectionHandler to the onFulfillment
    and onRejection array respectively. Note that p.then() does't execute fulfillHandler & rejectionHandler
    it only registers them inside those array present in promise object.

    These functions (fulfillHandler & rejectionHandler) are executed only when the state of promise obj changes.
    For eg: if state changes from 'pending' to 'fulfilled' the functions present inside onFulfillment:[ ] array 
    will be executed one by one.

    MicroTask queue is responsible for execution of functions present inside these arrays (eg: onFulfillment:[ ] array)

  */
