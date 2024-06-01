/**
 * Problems with Callbacks--
 *  1. Inversion of control (Promises can resolve this issue)
 *  2. Callback hell -> readability problem
 */

function doTask(fn, x) {
  // whole implementation is done by TeamA
  fn(x * x); // calling my callback with square of x
  fn(x * x);
}

// here TeamB tries to use it and TeamB has implemented exec
doTask(function exec(num) {
  // due to callbacks, I am passing control of how exec should be called to doTask
  // this is inversion of control
  console.log("Woah num is", num);
}, 9);

/* Summary --
   In this case TeamA has implemented the function doTask and TeamB has implemented function exec.
   but TeamB is giving their's function (exec) control to TeamA (doTask) on when shold be exec called
   or how many times it shold be called or it should be called at all or not , this is called Inversion of Control.
 */
