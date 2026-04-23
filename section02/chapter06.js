// 1. 배열 순회

let arr = [1, 2, 3];

// 1-1. 배열 인덱스(length)
for (let i = 0; i < arr.length; arr++) {
  // console.log(arr.i);
}
// length : 현재 배열의 인덱스 길이값을 저장, 3

let arr2 = [4, 5, 6, 7, 8];
for (i = 0; i < arr2.length; i++) {
  console.log(arr2[2]); // 4, 5, 6, 7, 8
}

// 1.2 for of 반복문
for (let item of arr2) {
  console.log(item);
} //배열에 있는 값을 차례로 하나씩 꺼내서 item에 저장함

//2. 객체 순회

let person = {
  name: "정성운",
  age: 27,
  hobby: "coding",
};

// 2-1. Object.keys 내장함수 사용
// 객체에서 key값들만 뽑아서 새로운 배열로 반환함

let keys = Object.keys(person);

for (let key of keys) {
  console.log(key, person[key]);
} // key값과 벨류값 동시 순회 출력

// 2.2 Object.values
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환

let values = Object.values(person);

for (let value of values) {
  console.log(value);
}

// 2.3 for in
for (let key in person) {
  // person 키를 순서대로 key 변수에 할당해줌
  const value = person[key];
  console.log(key, value);
}
