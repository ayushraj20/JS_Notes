/*
 */

function createPromiseWithLoop() {
  return new Promise(function executor(resolve, reject) {
    resolve(5);
    resolve(9);
    resolve('ncinio');

    reject(4);
    reject('konac');
    reject(8);
  });
}

console.log('Starting...');
x = createPromiseWithLoop();
console.log(x);
console.log('end !!!');

/*
    Summary -
    
     Multiple 'resolve(argument)' or 'reject(argument)' will have
     no effect on the state and value of a promise object. Only the FIRST resolve or 
     reject will be considered with their respective argument(i.e value of promise obj),
     In the above eg the promise object will be 'resolved' with 'value 5'.

     By default the promise object has 'State = Pending' & 'Value = Undefined'
     once the state of promise is changed from pending to resolved or rejected
     with some value passed to resolve(val) or reject(val) it can't be changed again.

  */
