console.log("자바스크립트 함수 연습");

// 함수 선언식과 함수 표현식

// 함수 선언식

function funcA() {
  console.log("funcA 선언식 함수");
}

let a = function funcB() {
  console.log("funcB 표현식 함수");
};

let person = {
  name: "정성운",
  age: 27,
};

let people = {
  a: 1,
  b: 2,
  ...person,
};

console.log(people);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [...arr1, ...arr2];

let arr4 = [1, 2, 3];
let arr5 = [4, 5, 6];

let arr6 = [...arr4, ...arr5];

console.log(arr6);
