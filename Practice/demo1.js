let a = {
  name: 'test',
  add: {
    code: 1,
  },
};

let b = { ...a };

b.add.code = 2;

console.log(a.add.code);
console.log(b.add.code);

// Spread operator makes shallow copy in the memory
