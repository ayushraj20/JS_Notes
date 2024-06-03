//arr.flat() method return a new array, If we don't pass the argument(depth) to 'flat()', it will take '1' by default.
let arr = [1, 2, [[3, 4]]];

console.log(arr.flat()); // [ 1, 2, [ 3, 4 ] ]
console.log(arr.flat(1)); // [ 1, 2, [ 3, 4 ] ]

console.log(arr.flat(2)); // [ 1, 2, 3, 4 ]

// polyfill for arr.flat() ------------------------
Array.prototype.myFlat = function (depth) {
  let res = [];
  if (!Array.isArray(this)) {
    throw new Error('called should be an array');
  }

  this.forEach((elem) => {
    if (Array.isArray(elem) && depth > 0) {
      res.push(...elem.myFlat(depth - 1)); // recursive call
    } else {
      res.push(elem);
    }
  });

  return res;
};

let flatArray = arr.myFlat(2);
console.log('flatArray', flatArray);
