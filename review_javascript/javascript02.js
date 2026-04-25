// 배열 인덱스를 사용한 배열 순회

let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("\n");
// for of를 사용한 배열 순회

arr2 = [4, 5, 6, 7, 8];

for (let item of arr2) {
  // 배열 arr2에 있는 값을 item 변수에 순서대로 저장함.

  console.log(item);
}

console.log("\n");
// for of 반복문
for (let item of arr2) {
  const a = item;
  console.log(a);
}

// 객체 순회 방법

let person = {
  name: "정성운",
  age: 27,
  hobby: "coding",
};

console.log("\n");

// 2-1. 내장함수 Object.keys 활용
// 객체에서 key값들만 뽑아서 새로운 배열로 반환해준다.

let keys = Object.keys(person);

for (let key of keys) {
  console.log(key, person[key]);
}
