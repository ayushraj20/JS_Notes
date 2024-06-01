const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved value!!');
  }, 5000); // 5 sec timer
});

// Handling Promise using await .
async function getData() {
  console.log('Starting...');

  const result = await p;
  console.log(result);
  console.log('Ending');
}

getData();

// *prev eg(03-AsyncAwait.js) is also same as this, just that we are handling promise in different ways.
