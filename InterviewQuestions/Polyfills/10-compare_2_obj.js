//How to Compare 2 objects or Polyfill for lodash.isEqual()

const objA = { a: 1, b: 2, c: { z: 5 } };
const objB = { a: 1, b: 2, c: { z: 5 } };

/*
Below statement can be used to compare two same objects having keys in same sequence,
If the sequence of keys in objects are different then below approach will fail.

console.log(JSON.stringify(objA) === JSON.stringify(objB));
*/

function isObject(object) {
  return object !== null && typeof object === 'object';
}

function compareObjects(obj1, obj2) {
  const keyArr1 = Object.keys(obj1);
  const keyArr2 = Object.keys(obj2);

  if (keyArr1.length !== keyArr2.length) return false;

  for (let key of keyArr1) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    const isObjects = isObject(obj1) && isObject(obj2);

    if (!isObjects && value1 !== value2) return false;

    if (isObjects && !compareObjects(value1, value2)) return false;
  }

  return true;
}

console.log(compareObjects(objA, objB));
