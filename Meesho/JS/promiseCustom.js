// write a custom promise.all() such that it returns as soon as maximum of promises are resolved in promise array,
// (suppose there are 5 promises, it should return as soon as 3 of them get resolved)

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P1 resolved');
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P2 resolved');
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P3 resolved');
  }, 3000);
});

Promise.myCustomAll = function (promiseArr) {
  let resultArray = [];
  let counter = 0;
  return new Promise((resolve) => {
    promiseArr.forEach((promise) => {
      console.log(promise);
      promise.then((res) => {
        resultArray.push(res);
        counter++;

        if (counter > promiseArr.length / 2) {
          resolve(resultArray);
        }
      });
    });
  });
};

Promise.myCustomAll([p1, p2, p3]).then((res) => console.log(res));
