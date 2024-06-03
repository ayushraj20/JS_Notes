let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P1 resolved');
  }, 1000); // 1sec timer
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P2 resolved');
  }, 0); // 0sec timer
});

Promise.all([p1, p2])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

//Polyfill------------------------------>
Promise.myAll = function (promiseArr) {
  let resultArr = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise, index) => {
      promise
        .then((res) => {
          counter++;
          resultArr[index] = res;
          if (counter === promiseArr.length) {
            resolve(resultArr);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.myAll([p1, p2])
  .then((res) => {
    console.log('using myAll polyfill ->', res);
  })
  .catch((err) => {
    console.error(err);
  });
