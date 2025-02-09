/*
  This is almost similar to prev eg: 14_promiseDownloadDemo.js  
*/

function download(url) {
  console.log('started downloading content form ', url);
  return new Promise(function exec(res, rej) {
    setTimeout(function p() {
      console.log('Completed downloading data in 5s');
      const content = 'ABCDEF';
      res(content);
    }, 5000);
  });
}

x = download('www.xyz.com');

x.then(function fulfillHandler1(value) {
  console.log('Content downloaded is', value);
  return 'New promise string';
}).then(function newFullFillHandler(value) {
  console.log('value from chained .then promise', value);
});

/*
  .then() also returns a 'New Promise Object' with state same as parent promise object (here fulfilled)
  and value is the return of respective handler (here fulfillhandler1) and return is 'New promise string'
  i.e the value of our new promise object returned by .then() 

*/
