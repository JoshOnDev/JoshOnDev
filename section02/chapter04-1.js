let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [...arr1, ...arr2];

console.log(arr1);
console.log(arr2);
console.log(arr3);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  c: 3,
  d: 4,
};

let obj3 = {
  ...obj1,
  ...obj2,
};

console.log(obj1);
console.log(obj2);
console.log(obj3);
