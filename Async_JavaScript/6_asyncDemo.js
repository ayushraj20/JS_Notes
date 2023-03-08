function timeConsumingByLoop() {
  console.log("loop starts");
  for (let i = 0; i < 10000000000; i++) {
    // some task
  }
  console.log("loop ends");
}

function timeConsumingByRuntimeFeature() {
  console.log("Starting timer");
  setTimeout(function exec() {
    console.log("Completed the timer0");
  }, 5000); // 5 sec timer
}

console.log("Hi");
timeConsumingByLoop();
timeConsumingByRuntimeFeature();
timeConsumingByLoop();
console.log("By");
