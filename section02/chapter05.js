// // 1. 배열 순회
// let arr = [1, 2, 3];

// // 1.1 배열 인덱스(카운터 변수에 인텍스가 저장되기 때문에 인덱스 번호로 작업가능)
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let arr2 = [4, 5, 6, 7, 8];
// for (let i = 0; i < arr2.length; i++) {
//   console.log(arr2[i]);
// }

// //1.2 for of 반복문(오직 배열을 순회하기 위한 특수한 반복문)
// for (let item of arr) {
//   //(인덱스 번호가 아니라 배열의 내용이 저장됨)
//   console.log(item);
// }

// 2. 객체 순회

// let person = {
//   name: "정성운",
//   age: 27,
//   hobby: "테니스",
// };

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환

// let keys = Object.keys(person); //Object.keys()함수 : 주어진 객체에서 key값들만 뽑아서 새로운 배열로 반환해줌
// for (let key of keys) {
//   console.log(key, person(key));
// }

// for 반복문 순회

// for of 반복문 순회

// 2.2 Object.values
// // -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
// let values = Object.values(person);
// console.log(values);

// 2.3 for in
// -> 객체만을 위하는 특수 반복문
// for of와 비슷함

// let person = {
//   name: "정성운",
//   age: 27,
// };

// for (let key in person) {
//   //person객체 프로퍼티의 키를 key 변수에 할당해줌

//   console.log(key);
// }

let person = {
  name: "정성운",
  age: 25,
  hobby: "coding",
};

// 객체의 키값을 배열로 반환
let p = Object.keys(person);

for (item of p) {
  console.log(item);
  // person의 key값을 item 변수로 출력
  console.log(item, person[item]);
  // persond의 key값과 value값을 동시에 출력
  const value = person[item];
  console.log(item, value);
}

// for of -> 배열에만
// for in -> 객체에만
