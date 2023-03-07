/**
 * fun -> HOF ? -> it takes fn (which is a function) as argument
 *
 * x -> number
 * fn -> function
 */

function fun(x, fn) {
  for (let i = 0; i < x; i++) {
    console.log(i);
  }

  fn();
}

fun(10, function exec() {
  // callback
  console.log("I am executed also");
});

// Summary
// Here function fun is called a Higher Order Function (HOF) because it takes another function (fn) as an argument
// Also the function fn is called as Callback function.
