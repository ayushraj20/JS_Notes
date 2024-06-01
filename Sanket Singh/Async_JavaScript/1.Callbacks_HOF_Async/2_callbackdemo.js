setTimeout(function exec() {
  console.log("Running after sometime");
}, 4000);

// setTimeout is also a HOF
// OR in  other words setTimeout expects a callback function and here exec is the callback function
