// 배열 순회

let arr = [1, 2, 3];
//arr 배열 생성

//1-1. 배열 인덱스로 술회돌리기
//카운터 변수에 인덱스가 저장되기에 인덱스 번호로 작업 가능하다.

for (let i = 0; i < arr.length; i++) {
  // 배열 arr의 길이만큼 순회

  console.log(arr[i]);
  // 0, 1, 2
}

let arr2 = [4, 5, 6];
for (i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

//4, 5, 6 -> 0, 1, 2번 인덱스의 값을 출력

let arr3 = [10, 20, 30, 40];

for (i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

// 1-2. for of 반복문(오직 배열 순회를 위한 특수 반복문임)

for (let item of arr) {
  console.log(item);
} // item에 인덱스 번호가 아니라 배열 내용 자체가 저장됨.

let arr4 = ["정성운", "fe 개발자"];

for (let item of arr4) {
  console.log(item);
} // 정성운 fe 개발자 출력됨

// 2. 객체의 순회 방법

let person = {
  name: "정성운",
  age: 27,
  hobby: "coding",
};

// 2-1. 객체 순회 방법 1. Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환한다.

let keys = Object.keys(person);
console.log(keys);
// person의 키값들이 keys라는 변수에 담기고 배열로 반환해줌
for (let key of keys) {
  console.log(key, person[key]);
}

let cat = {
  age: 1,
  color: "black",
};

let c = Object.keys(cat);

for (let item of c) {
  console.log(item, cat[item]);
}
//item : 키값, cat[item] : 벨류값

let dog = {
  age: 3,
  color: "white",
  hobby: "walk",
};

let d = Object.keys(dog);

for (let item of d) {
  console.log(item, dog[item]);
}

let food = {
  drinks: "water",
  noodle: "pasta",
};
// 객체를 먼저 생성하고

// 키 값을 배열로 반환하기 위해 변수를 선언한다
let f = Object.keys(food);
// food의 key값을 받을 거기 때문에 인수로 food 객체를 받는다

// 이제 food 객체의 프로퍼티와 벨류값을 동시에 호출한다
// for of 반복문

for (let item of f) {
  console.log(item, food[item]);
  // item -> 프로퍼티, food[item] -> 키 값
}

let cafe = {
  coffee: "latte",
  juice: "apple",
  cakes: "cheese",
};

let cc = Object.keys(cafe);

for (let item of cc) {
  console.log(item, cafe[item]);
}

// 2.2 Object.values()
// 객체에서 value값들만 뽑아서 새로운 배열로 반환

let values = Object.values(cat);

for (item of values) {
  console.log(item);
} // 1, black
