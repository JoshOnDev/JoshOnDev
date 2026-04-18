let arr1 = [1, 2, 3];

let [one, two, three] = arr1;

//
let arr2 = [4, 5, 6];

let [aa, bb, cc] = arr2;

// console.log(aa, bb, cc);

// let person = {
//   name: "정성운",
//   age: 27,
//   hobby: "물멍",
// };

// let { name: me, age, hobby, extra } = person;

// console.log(me, age, hobby, extra);

// console.log(person.extra);
// console.log(person);

// 3. 객체 구조 분해 할당 -> 함수의 매개 변수 받기

let person = {
  name: "정sss운",
  age: 27,
  hobby: "물멍",
};

let { name, age: myAge, hobby, extra = "기타" } = person;

console.log(name);

const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
//함수의 인수로는 객체를 넣어줘야 함
