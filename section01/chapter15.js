//1. 객체 생성
let Object1 = new Object(); // 객체 생성자
let obj1 = {}; // 객체 리터럴 (대부분 사용)

//2. 객체 프로퍼티(객체 속성)
let person = {
  name: "정성운ss",
  age: 27,
  hobby: "moolmeong",
  job: "manager",
  extra: {},
  10: 20,
  "like dog": true,
};

let family = {
  daugther: "정성운성",
  mother: "김영선",
  father: "정수호",
  son: "정성호",
};

console.log("enter");
console.log(family.daugther);

//3. 객체 프로퍼티 다루는 법
//3-1. 특정 프로퍼티에 접근하기 (점 표기법, 괄호 표기법)
let name = person.name;

let age = person["age"];

console.log(age);
console.log(name);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

//3-2. 새로운 프로퍼티를 추가하는 법

person.job = "educator";
person["favoriteFood"] = "초콜릿";

console.log(person.favoriteFood);
console.log(person.job);

// 3. 프로퍼티 삭제하는 법

delete person.job;
delete person["age"];

console.log(person);

// 3.5 프로퍼티 존재 유무 확인 법 (in 연산자)

let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1);
console.log(result2);
