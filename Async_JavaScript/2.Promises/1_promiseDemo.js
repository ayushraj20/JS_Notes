/*
  Try this example in browser for better understanding
*/

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithLoop() {
  return new Promise(function executor(resolve, reject) {
    for (let i = 0; i < 10000000000; i++) {}

    let num = getRandomInt(10);
    if (num % 2 == 0) {
      resolve(num); // if random number is even we fulfill the promise.
    } else {
      reject(num); // if random number is odd we reject the promise.
    }
  });
}

console.log("Starting...");
x = createPromiseWithLoop();
console.log(x);
console.log("end !!!");

/*
  Summary -
   The Creation of promise is sync in nature. as in above eg the promise object will 
   wait till the for loop is executed then after it will resolve or reject the promise 
   based on the random number.
*/
