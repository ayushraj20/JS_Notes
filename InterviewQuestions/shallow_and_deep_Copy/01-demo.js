let p1 = {
  name: 'Ayush',
  skills: { primary: 'Front end', secondary: 'devOps' },
};

let p2 = { ...p1 }; // spread operator does shallow copy of 'p1',hence they share the same nested object.
// let p2 = //Object.assign({}, p1); //this also does shallow copy same as spread operator.

p2.name = 'Aryan';
p2.skills.primary = 'Back End';

console.log(p1);
console.log(p2);

/*

Shallow Copy - 
A shallow copy of an object or array is a copy that only copies the top-level properties.
If any of these properties are objects or arrays themselves, the references to those objects/arrays
are copied, not the objects/arrays themselves. This means that the shallow copy and the original
object share the same nested objects.

Deep Copy -
A deep copy of an object or array creates a new object or array, and recursively copies all nested
objects or arrays. This means that the deep copy and the original object do not share any references
to nested objects or arrays.They are exact copies.

*/
