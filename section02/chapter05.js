let o1 = { name: "정성운", height: 175 };

let o2 = o1; // 얕은 복사, 참조값 그대로 복사
let o3 = { ...o1 }; // 깊은 복사, o1의 특정 프로퍼티만 복사

console.log(o3.name);

o3.name = "이정환"; // 특정 프로퍼티를 복사해 값을 바꿈(참조값 달라짐)

console.log(o3.name);

//얕은 비교
console.log(o1 === o2); // 참조값 같음
console.log(o1 === o3); // 참조값 다름
// === 는 값 뿐만 아니라 참조값도 비교하는 연산자임.

// 깊은 비교
//JSON.stringify() : 자바스크립트 내장함수
//객체를 문자열로 변환하는 기능

console.log(JSON.stringify(o1) === JSON.stringify(o2));
console.log(JSON.stringify(o1) === JSON.stringify(o3));

console.log(o1); // 정성운
console.log(o3); // 이정환

// 배열과 함수도 사실 객체이다.

// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr2[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

//1.2 for of 반복문
for (let item of arr) {
  console.log(item);
}

// 2. 객체 순회

let person = {
  name: "정성운",
  age: 27,
  hobby: "테니스",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환

let keys = Object.keys(person);
for (let key of keys) {
  console.log(key, person(key));
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
console.log(values);
