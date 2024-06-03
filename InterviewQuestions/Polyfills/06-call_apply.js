// !call & apply method example -------------------------------
let person1 = {
  name: 'Ayush',
};

let person2 = {
  name: 'Aryan',
};

function printAge(age) {
  console.log(`${this.name} is ${age} years old`);
}

printAge.call(person1, 24); // Ayush is 24 years old
printAge.call(person2, 22); // Aryan is 22 years old

//In case of apply() arguments are passed as an array like below
printAge.apply(person2, [60]); // Aryan is 60 years old

// !polyfill for call() --------------------------------
Function.prototype.myCall = function (obj, ...args) {
  console.log('this', this);

  if (typeof this !== 'function') {
    throw new Error('not callable');
  }

  console.log('obj before', obj);
  console.log('args', args);
  obj.fn = this;
  console.log('obj after', obj);

  obj.fn(...args);
};

printAge.myCall(person1, 18); // Ayush is 18 years old

// !polyfill for apply() --------------------------------
Function.prototype.myApply = function (obj, ...args) {
  if (typeof this !== 'function') {
    throw new Error('not callable');
  }
  if (!Array.isArray(...args)) {
    throw new Error('Argument should be passes as an array');
  }

  obj.fn = this;
  obj.fn(...args);
};

printAge.myApply(person1, [45]); // Ayush is 45 years old
printAge.myApply(person1, 45); // throws error

/*
Basically, polyfill for call() and apply() are exactly same (if we remove console.logs from myCall() polyfill),
only difference is we have added an extra condition in apply() to check weather the args are passed as an array or not.
*/
