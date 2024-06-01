function timeConsumingByLoop() {
  console.log("loop starts");
  for (let i = 0; i < 10000000000; i++) {}
  console.log("loop ends");
}

function timeConsumingByRuntimeFeature0() {
  console.log("Starting timer 0");
  setTimeout(function exec0() {
    console.log("Completed the timer0");
    for (let i = 0; i < 10000000000; i++) {}
  }, 5000); // 5 sec timer
}

function timeConsumingByRuntimeFeature1() {
  console.log("Starting timer 1");
  setTimeout(function exec1() {
    console.log("Completed the timer1");
  }, 200); // 0 s timer
}

function timeConsumingByRuntimeFeature2() {
  console.log("Starting timer 2");
  setTimeout(function exec2() {
    console.log("Completed the timer2");
  }, 200); // 200 ms timer
}

console.log("Hi");
timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();
console.log("By");
