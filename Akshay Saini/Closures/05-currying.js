// Currying in JS, Currying uses concept of closures.

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const res = sum(1)(2)(3);
console.log(res);
