const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('P1 success'), 3000); // 3 sec timer
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('P2 success'), 1000); // 1 sec timer
  // setTimeout(() => reject('P2 fail'), 1000); // 1 sec timer
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('P3 success'), 2000); // 2 sec timer
});

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
