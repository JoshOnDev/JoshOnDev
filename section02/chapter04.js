//1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

// let arr1 = [1, 2, 3]; // 배열은 원소를 바꿔가면서 쓰려고 있는 거임
// let arr2 = [4, ...arr1, 5, 6]; // ... -> 개별로 흩뿌려줘라

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

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

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

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

// funcA(...arr1);

// 함수 호출하면서 인수로 배열 또는 객체의 구성을 순서대로 받게 하고 싶다면
//원소 객체 수만큼 함수 인수를 구성하고 호출할 때 스프레드 함수 쓰기

//2. Rest 매개 변수
// REST = 나머지, 나머지 매개변수
// 나머지 값들을 모두 모아주는 상자(배열)

function funcB(one, two, ...dd) {
  console.log(dd);
}

funcB(...arr1);

// 함수를 부를 때(Call) = Spread(펼치기)
// funcB(...arr1) : 묶여있는 배열을 낱개로 풀어서 던져줌
// [1,2,3] => 1, 2, 3

// 함수를 만들 때(Define) = Rest(모으기)
// functon funcB(a, ...rest) : 낱개로 들어온 값들 중 남은 것들을 다시 배열로 묶어줌
// 2, 3 -> [2,3](rest 변수 안에 저장됨)
// 단, rest 매개변수는 "나머지 전부"를 의미하기 때문에 반드시 매개변수 목록의 맨 마지막에 딱 한 번만 써야 함.
