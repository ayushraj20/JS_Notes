let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P1 resolved');
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P2 resolved');
  }, 3000);
});

// Promise.all([p1, p2])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

Promise.myAll = function (promiseArr) {
  let resArr = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promiseArr.length; i++) {
      promiseArr[i].then((res) => {
        counter++;
        resArr.push(res);
        if (counter === promiseArr.length) {
          resolve(resArr);
        }
      });
    }
  });
};

Promise.myAll([p1, p2])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
