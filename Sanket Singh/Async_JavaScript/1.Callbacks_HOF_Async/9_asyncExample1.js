/*
  Output of below code is generally asked as a warmup que in an interview. ;)
*/

console.log('Hello world');
setTimeout(function exec() {
  console.log('Timer done');
}, 0);
console.log('End');

/*
  Que -> Since 'console.log()' is also not a native part of JS then Why does it works like sync piece of code ??

  Ans -> https://nodejs.org/api/process.html# processstdout
         Note- Read the first line of Warning in the link.

*/
