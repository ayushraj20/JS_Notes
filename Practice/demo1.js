const p1 = Promise.resolve('p1 resolved');

const p2 = Promise.resolve('p2 resolved');

Promise.all([p1, p2])
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

Promise.myAll = function (promiseArr) {
  let resArr = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise, index) => {
      promise
        .then((res) => {
          resArr[index] = res;
          counter++;
          if (counter === promiseArr.length) {
            resolve(resArr);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.myAll([p1, p2])
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
