// All 3 examples serves the same purpose , just they are written in different ways.

const p = new Promise((resolve, reject) => {
  resolve('Promise resolved value!!');
});

// !Example-1
async function getData() {
  return p;
}

const dataPromise = getData();
dataPromise.then((res) => console.log(res));
/*************************************************/

// !Example-2
async function getData2() {
  p.then((res) => console.log(res));
}

getData2();
/************************************************/

// !Example-3
async function handlePromise() {
  const result = await p;
  console.log(result);
}

handlePromise();
/***********************************************/

// *Summary -> 'await' keyword can only be used inside an async function.
// *We write 'await' keyword in front of a Promise as written above 'await p'.
