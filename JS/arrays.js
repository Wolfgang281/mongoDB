// let/const/var
// let arr = [];
// console.log(arr[2]); // 3
// console.log(arr[-2]); //
// console.log(arr[56]); //

// let nestedArr = ['utk', 'varus', ['aswhin', 'chetna']];
// console.log(nestedArr[2][1]);
// let innerArr = nestedArr[2];
// console.log(innerArr[1]);

let emp = [
  {
    username: 'abc',
    email: 'abc@gmail.com',
    skills: ['html', 'css'],
  },
  {
    username: 'def',
    email: 'def@gmail.com',
    skills: ['js', 'node'],
  },
];

console.log(emp[1]);
console.log(emp[1].skills);
console.log(emp[1]['skills']);
