/*
  Try this example in browser for better understanding.
*/

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout() {
  return new Promise(function executor(resolve, reject) {
    setTimeout(function timerA() {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        resolve(num); // if random number is even we fulfill the promise.
      } else {
        reject(num); // if random number is odd we reject the promise.
      }
    }, 3000);
  });
}

console.log("Starting...");
y = createPromiseWithTimeout();
console.log(y);
console.log("end !!!");

/*
    Summary -
     The Creation of promise is sync in nature. but in above eg the setTimeout is 
     async in nature so promise object will remain in 'pending' state (default state)
     coz' the function 'timerA' will not execute untill callStack is empty and the there 
     is no global piece of code left, only then after 'timerA' will execute and out promise
     will be resolved or rejected based on the random number.
  */
