console.log("starting...");

function DO(task) {
  // task is local to function 'DO' and 'exec' func of setTimeout remembers it -> closures.
  setTimeout(function exec() {
    console.log(task);
  }, 2000);
}

DO("do Homework");
console.log("end");
