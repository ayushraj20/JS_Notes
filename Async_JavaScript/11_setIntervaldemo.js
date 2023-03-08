let count = 0;
let y = setInterval(function exec() {
  count++;
  console.log(count);
  if (count > 9) {
    clearInterval(y);
  }
}, 2000);
