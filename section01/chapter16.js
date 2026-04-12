// 1. 상수 객체

const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; //추가
animal.name = "냥이"; //수정
delete animal.type; //삭제

//상수 객체는 보통 수정이 안된다고 하지만
//객체의 key를 삭제하거나,
//객체의 value값을 수정하거나,
//객체의 key를 추가하는 것은 가능하다.

console.log(animal);

animal.age = 3;

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 의미한다.

const person = {
  name: "정성운",
  sayHi: function () {
    console.log("안녕");
  },
  sayBye: () => {
    console.log("잘가");
  },
  sayCool() {
    console.log("멋지다!");
  },
};

person.sayHi();
person.sayBye();
person.sayCool();

console.log(person.sayBye());
