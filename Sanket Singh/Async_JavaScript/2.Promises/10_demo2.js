// Tracing of below code is done in Feb-23 notes pageNo -> 10.

function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Started downloading from", url);
    setTimeout(function processDownloading() {
      let data = "Dummy data";
      console.log("Download completed"); //this eg is same as prev (demo1) only difference is line no.8 & 9 are interchanged.
      resolve(data);
    }, 7000);
  });
}

console.log("Start");
let promiseObj = fetchData("skfbjkdjbfv");
promiseObj.then(function A(value) {
  console.log("value is", value);
});
console.log("end");
