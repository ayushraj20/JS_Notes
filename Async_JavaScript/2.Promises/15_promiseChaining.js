/*
  This is almost similar to prev eg: 14_promiseDownloadDemo.js  
*/

function download(url) {
  console.log("started downloading content form ", url);
  return new Promise(function exec(res, rej) {
    setTimeout(function p() {
      console.log("COmpelted downloading data in 5s");
      const content = "ABCDEF";
      res(content);
    }, 5000);
  });
}

x = download("www.xyz.com");

x.then(function fulfillHandler1(value) {
  console.log("Content downloaded is1", value);
  return "New promise string";
}).then(function newFullFillHandler(value) {
  console.log("value from chained then promsie", value);
});

/*
  .then() also returns a 'New Promise Object' with state same as parent promise object (here fullfilled)
  and value is the return of respective handler (here fullfillhandler1) and return is 'New promise string'
  i.e the value of our new promise object returned by .then() 

*/
