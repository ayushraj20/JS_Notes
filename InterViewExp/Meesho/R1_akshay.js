/* 


let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

// answer
False
True
True



let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
// answer
1
2
2


// promise
State = pending
Value = undefined
onFullfillmentArr []
onRejectionArr []


console.log(1); 
setTimeout(() => console.log(2), 1000); 
setTimeout(() => console.log(3), 0); 
Promise.resolve(5).then((val) => console.log(val)); 
console.log(4)

// answer
1
4
5
3
2



for (var i = 0; i < 3; i++) { 
setTimeout(() => console.log(i), 1); 
} 

for (let i = 0; i < 3; i++) { 
setTimeout(() => console.log(i), 1);
}

// answer
3,3,3
1,2,3

const shape = { 
radius: 10, 
diameter() { 
return this.radius * 2; 
}, 
perimeter: () => 2 * Math.PI * this.radius, 
};

console.log(shape.diameter()); 
console.log(shape.perimeter());

// answer
20


const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);

// answer
False
True
True
True



function sayHi() { 
console.log(name); 
console.log(age); 
var name = 'Lydia';
 	let age = 21;
 } 
sayHi();
// answer
Undefined
Error



https://jsonplaceholder.typicode.com/todos/

Async function getData(){
 Const data = await fetch(url)
Const json = await data.json()
}


Const data =   await axios.get(‘URL’)

*/
