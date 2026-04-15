// 1. 배열의 구조 분해 할당
// let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// console.log(one, two, three);

//-> 더 간결하게 하려면 배열의 구조 분해 할당을 이용할 수 있음

let arr = [1, 2, 3];

//let [one, two, three] = arr;
// let 배열 표현하듯 세개의 변수 동시 선언 = 초기값으로 arr 넣어줌
//1 -> one이라는 변수에 저장되고, 2, 3은 각각 two, three 변수에 저장됨.

// let [one, two] = arr;
// console.log(one, two);
// -> one, two라는 변수에만 배열 값이 할당됨, 3은 할당 안됨

let [one, two, three, four, five = 5] = arr;
//console.log(one, two, three, four, five);
// -> 이때 four라는 변수에는 배열의 값이 없기 때문에 undefined으로 표현됨
// five는 초기값을 넣어줬기 때문에 5가 출력됨

// 2. 객체의 구조 분해 할당

let person = {
  name: "정성운",
  age: 27,
  hobby: "물멍",
};

// 객체 안에 있는 프로퍼티를 변수에 할당하려면 구조분해 할당이 쉬움

// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

//console.log(name, age, hobby);
// -> 위 코드는 아주 기본식임. 근데 너무 번거로움

// 아래 코드처럼 적는 게 객체 구조 분해 할당임.

//let { name, age, hobby } = person;
// person 객체의 프로퍼티 순서대로 변수에 저장됨

//console.log(name, age, hobby);
// 정성운 27 물멍
// 객체를 상징하는 중괄호를 이용함.

// 존재하지 않는 프로퍼티를 구조분해할당으로 받으려고 하면 undefined
// 기본값을 설정하는 것도 가능

let { name, age: myAge, hobby, extra = "hello" } = person;
// 기본 값을 설정하는 것도 가능~
// 할당받는 변수 이름 변경 가능
console.log(name, myAge, hobby, extra);

// 3. 객체의 구조분해 할당을 이용해서 함수의 매개변수를 받는 방법

const func = ({ name, age, hobby, ectra }) => {
  console.log(name, age, hobby, extra);
  //인수로 전달한 프로퍼티들 모두 콘솔에 출력 가능해짐
};

func(person);
// 주의 : 함수는 객체를 넘겼을 때만 구조분해할당을 할 수 있음
