/* Currying in JS */

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// const res = sum(1)(2)(3);
// console.log(res);

/* Infinite Currying */

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

const result = add(1)(2)(3)(1)(3)();
console.log(result);
