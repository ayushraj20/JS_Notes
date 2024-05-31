// ! Video Link -> https://www.youtube.com/watch?v=6nv3qy3oNkc&ab_channel=AkshaySaini

// Async Function always returns a promise.
async function getData() {
  return 'Namaste';
}

const dataPromise = getData();

console.log(dataPromise);

//To get actual data out of promise we write .then() as written below.
dataPromise.then((res) => console.log(res));

/*
 Since, Async functions always returns promise and in above async function getData() we are
 returning a string so, in this case it will wrap the string into promise and then return that string as 
 a value of promise i.e getData() will return a promise having -> state = fulfilled
                                                                  value = 'Namaste'
*/
