// call(), apply(), bind() methods (sharing methods)

const student = {
  name: 'Ayush',
  printName: function () {
    console.log(this.name);
  },
};

const student2 = {
  name: 'John',
};

student.printName();
student.printName.call(student2);
