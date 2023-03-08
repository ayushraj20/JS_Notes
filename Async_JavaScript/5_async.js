console.log("Hi we are starting");

setTimeout(function exec() {
  console.log("timer done");
}, 3000);

console.log("End");

/* 

  Here JS will not wait on line 3 coz setTimeout is not a native part of JavaScript,
  this feature (setTimeout) is given to JS by it's runtime (can be node or browser).
  So, Runtime helps Js to have Async nature.

  Note -> NodeJs is not a Library or framework it is a JavaScript runtime.

 */
