// {배열} 의 구조 분해 할당

let arr = [1, 2, 3];

let one = arr[0]; // 배열 arr의 첫번째 인덱스 0의 값을 변수 one에 저장
// -> 너무 복잡스러움

console.log(one);

// -> 배열의 구조 분해 할당을 통해 더 간결하게 표현 가능

let arr2 = [1, 2, 3];

let [one1, two2, three3] = arr2;
// let 배열 표현하듯 세개의 변수 동시선언하고 초기값으로 arr을 넣어줌
// 1 -> one, 2 -> two, 3 -> three 변수에 각각 저장됨

console.log(two2);

let fruit = ["apple", "melon", "banana"];

let [f1, f2, f3] = fruit;

console.log(f2);

function getLocation() {
  // 위도와 경도 계산해서 배열로 반환한다고 가정
  return [345634.234, 234.456456];
}

const [latitude, longitude] = getLocation();
// getLocation(의 리턴 값을 각각 변수에 할당해줌)

console.log(`위도 : ${latitude}, 경도 : ${longitude}`);

let [o, t, th, f, fd = "apple"] = fruit;

console.log(o, t, th, f, fd);
//apple melon banana "undefined" apple

// 객체의 구조 분해 할당

let person = {
  name: "정성운",
  age: 27,
  hobby: "coding",
};

// 비효율적인 방법(번거로움)
// let name = person.name;
// console.log(name);

// 효율적인 방법(구조분해 할당)
//let { name, age, hobby } = person;
// person 객체의 프로퍼티가 각각 변수 name, age, hobby에 저장됨

// console.log(name, age, hobby);

let { name, hobby, extra = "hello" } = person;
// 객체 프로퍼티의 이름, 객체 프로퍼티의 키값을 바꿀 수도 있음

console.log(name, hobby, extra);
// 객체는 순서를 지킬 필요 없음. 이름 따라 찾아들어감.
//따라서 배열처럼 0번, 1번... 순서를 지킬 필요가 전혀 없음

// 객체 구조분해 할당 이용해 함수의 매개 변수 받는 법

// const func = ({ name, age, hobby, extra }) => {
//   console.log(name, age, hobby, extra);
// };

let people = {
  name: "정성운",
  age: 27,
};

function a() {
  return 1;
}

const func3 = function (name) {
  return "ht" + " " + name;
};

console.log(func3(people.name));

const func4 = (age) => {
  return "dd" + age;
};

console.log(func4(people.age));

const func5 = ({ name, age }) => {};

function a(value) {
  console.log("a 함수입니다.");
  console.log(value);
  value();
}

a(function b() {
  console.log("b 콜백함수 입니다.");
});
// a 함수 입니다.
// b()함수 자체
// b 콜백함수 입니다.
