/* Infinite Currying */

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

const result = add(1)(2)(3)(1)(3)();
console.log(result);
