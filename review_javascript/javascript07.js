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
