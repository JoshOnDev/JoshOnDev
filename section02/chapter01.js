// 1. Falsy한 값 (7가지)

let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // 빅 인티저라는 특수한 자료형. 아주 큰 숫자 저장. 웹개발엔 잘 이용 안함.

if (!f1) {
  console.log("falsy");
}
// 위 코드는 f1은 falsy한 값인데 !(not)을 만나 참이되고,
// 결과값이 출력되게 됨. falsy

//2. Truthy한 값
// -> 7가지의 Falsy한 값들 제외한 나머지 모든 값

let t1 = "hello";
let t2 = 123;
let t3 = {};
let t4 = [];
let t5 = () => {};

//3. 활용 사례

function printName(person) {
  //person이라는 매개변수로 객체값을 받음
  if (!person) {
    console.log("person값이 없음");
  }
  console.log(person.name);
}

//let person //= { name: "정성운" };
let person = { name: "정성운" };
printName(person);

//서비스상 오류로 인해 person 값이 undefined이 된다면 오류가 생김

// 객체의 특정 프로퍼티에 접근하는 함수는 보통 조건문으로 person매개변수의 값이 null이나 undefined이 아닌지 확인해봄.

function passWord(number) {
  if (!number) {
    console.log("비밀번호가 없습니다.");
  }
  console.log("비밀번호가 있습니다.");
}

let num = { passW: "1234" };
passWord(num); // 비밀번호가 있습니다.
