const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P1 resolved value!!');
  }, 10000); // 10 sec timer
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P2 resolved value!!');
  }, 5000); // 5 sec timer
});

async function getData() {
  console.log('Starting...');

  const result = await p1;
  console.log(result);
  console.log('Ending');

  const result2 = await p2;
  console.log(result2);
  console.log('Ending again');
}

getData();