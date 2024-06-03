// polyfill for filter() function

// arr.filter((elem,index,arr)=>{})

Array.prototype.myFilter = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

const nums = [1, 2, 3, 4, 5];

const greaterThanTwo = nums.myFilter((elem) => {
  return elem > 2;
});

console.log(greaterThanTwo);
