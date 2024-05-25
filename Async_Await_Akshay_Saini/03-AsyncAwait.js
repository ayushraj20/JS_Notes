const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved value!!');
  }, 5000); // 5 sec timer
});

// Handling Promise using .then() .
async function getData() {
  console.log('Starting...');
  p.then((res) => console.log(res));
  console.log('Ending');
}

getData();
