let p1 = {
  name: 'Ayush',
  skills: { primary: 'Front end', secondary: 'devOps' },
  calculateAge: function () {
    return 24;
  },
};

let p2 = JSON.parse(JSON.stringify(p1));

p2.name = 'Aryan';
p2.skills.primary = 'Back End';

console.log(p1);
console.log(p2);

/*
JSON.parse(JSON.stringify(p1)) -> It does the job well in case of nested objects,
                                  but fails to copy, if object contains functions inside it.
*/

/*

For complete deep copy we have to use lodash library-
let _ = require('lodash');
let deepCopy = _.cloneDeep(original);

*/
