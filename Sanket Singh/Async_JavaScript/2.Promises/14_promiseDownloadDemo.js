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
});

/*
  How Promises solve the problem of Inversion of Control (IOC) ??

  Both egs: 14_promiseDownloadDemo & 13_callbackDownloadDemo serves the same purpose but
  in prev eg it is implemented using callbacks and above eg is implemented using promises.
  In prev eg we have given the control of calling the 'callback' to 'download' function.
  'download' function may call the cb() twice or may not call it at all, but here using 
  promises we have full control.

*/
