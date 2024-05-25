const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved value!!');
  }, 5000); // 5 sec timer
});

async function getData() {
  console.log('Starting...');

  const result = await p;
  console.log(result);
  console.log('Ending');

  const result2 = await p;
  console.log(result2);
  console.log('Ending again');
}

getData();

/**
 * await waits for the promise to get resolved at line-10 but once it is resolved.
 * It does't wait again at line-14.
 *
 */
