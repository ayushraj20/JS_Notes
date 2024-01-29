// async function someFunction(items) {
//   let promise = [];
//   for (let i = 0; i < items.length; i++) {
//     const res = await someAPICall(items[i]);
//     console.log("--->", res);
//   }
// }
// async function someAPICall(param) {
//   return await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Resolved" + param);
//     }, param);
//   });
// }
// someFunction(["3000", "8000", "1000", "4000"]);

async function someFunction(items) {
  let promise = [];
  // for(i=0 ; i< items.length ; i++){
  items.forEach(async (element) => {
    const res = await someAPICall(element);
    console.log("--->", res);
  });

  // }
}
async function someAPICall(param) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved" + param);
    }, param);
  });
}
someFunction(["3000", "8000", "1000", "4000"]);
