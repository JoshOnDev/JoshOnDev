let arr1 = [1, 2, 3];

let [one, two, three] = arr1;

//
let arr2 = [4, 5, 6];

let [aa, bb, cc] = arr2;

// console.log(aa, bb, cc);

let person = {
  name: "정성운",
  age: 27,
  hobby: "물멍",
};

let { name: me, age, hobby, extra } = person;

// console.log(me, age, hobby, extra);

// console.log(person.extra);
// console.log(person);

// 3. 객체 구조 분해 할당 -> 함수의 매개 변수 받기

const func = ({ name, age }) => {
  person.name;
  person.age;
  name: me;
};

console.log(person);
