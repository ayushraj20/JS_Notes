// function func() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 3000);
//   }
// }
// func();

let x = {},
  y = { name: "kishan" },
  z = { name: "suraj" };

x[y] = { name: "axbs" };
x[z] = 3;

console.log(x[9], x, y, z);
console.log(Object.values(x));
