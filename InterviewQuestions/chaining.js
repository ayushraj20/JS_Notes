// Implement below code

const calc = {
  total: 0,
  add: function (a) {
    this.total += a;
    return this;
  },
  multiply: function (a) {
    this.total *= a;
    return this;
  },
  subtract: function (a) {
    this.total -= a;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(10);

console.log(result.total);
