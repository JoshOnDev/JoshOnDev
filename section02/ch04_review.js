// Spread 연산자
// : 객체나 배열에 저장된 여러개 값을 개별로 흩뿌려주는 연산자
// 표현 : "..."

// let arr1 = [1, 2, 3];
// let arr2 = [4, ...arr1, 5, 6];

// let obj1 = {
//   a: 1,
//   b: 2,
// };

// let obj2 = {
//   ...obj1,
//   c: 3,
//   d: 4,
// };

// console.log(obj2);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [...arr1, ...arr2];

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

console.log(obj3);

function funcA(p1, p2) {
  console.log(p1, p2);
}

funcA(...arr1);

// Rest 매개 변수

// 나머지 값들을 모두 모아주는 상자(배열로)
// 낱개로 들어온 값들 중 남은 걸 다시 배열로 묶어줌
// 반드시 매개변수 목록의 맨 마지막에 딱 한번만 써야됨.
// rest 변수는 "나머지 전부"를 의미하기 때문에.
function funcB(one, ...dd) {
  console.log(dd);
}

funcB(...arr1);

let arr4 = [(name = "정성운"), (age = 27), (hobby = "coding")];

function aa(a, ...d) {
  console.log(d);
}

aa(...arr4);
// 27, codin
//

let arr5 = ["cat", "white", 2];

function aaa(value) {
  arr5.push(1, 2);
  console.log(value);
}

aaa(arr5);
