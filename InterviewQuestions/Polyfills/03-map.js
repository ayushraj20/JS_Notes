// polyfill for map() function

// arr.map((elem,index,arr)=>{})

Array.prototype.myMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;
};

const nums = [1, 2, 3, 4, 5];

const multiplyByTwo = nums.myMap((elem) => {
  return elem * 2;
});

console.log(multiplyByTwo);
