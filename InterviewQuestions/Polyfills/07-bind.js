// bind() method example -------------------------------
let person1 = {
  name: 'Ayush',
};

let person2 = {
  name: 'Aryan',
};

function printAge(age) {
  console.log(`${this.name} is ${age} years old`);
}

let newFunction = printAge.bind(person2);
newFunction(77); // Aryan is 77 years old

// polyfill for bind() ---------------------------------
Function.prototype.myBind = function (obj, ...args) {
  if (typeof this !== 'function') {
    throw new Error('not callable');
  }

  obj.fn = this;
  return function (...args2) {
    obj.fn(...args, args2);
  };
};

let newFun = printAge.myBind(person1);
newFun(87); // Ayush is 87 years old
