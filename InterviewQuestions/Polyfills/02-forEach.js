// Polyfill for arr.forEach()

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

arr = [1, 2, 3, 4, 5];

arr.myForEach((elem) => {
  console.log(elem);
});
