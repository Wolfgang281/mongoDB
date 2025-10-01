//! objects ==> objects are used to store data in key-value pair separated by comma
//? we cannot use duplicate keys inside an object
//? we can use strings(avoid reserved words) and numbers as a key
let student = {
  username: "utk",
  age: 23,
  email: "utk@gmail.com",
  1: "value",
};
console.log(student.username);
// console.log(student.age);

// console.log(student[1]);
// console.log(student['username']);

// console.log(student);

let object = {
  key1: "string",
  key2: 123,
  key3: 12.23,
  key4: true,
  key5: function () {
    console.log("inside object");
  },
  key6: undefined,
  key7: null,
  key8: {},
  key9: [],
  key10: Date.now(),
};

console.log(object);

function hello() {}
//! method and function ==> a function used inside an object is called as method
