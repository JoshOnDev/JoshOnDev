// falsy한 값 7가지 유형

let f1 = undefined; // 정의되지 않음
let f2 = null; //데이터 자체가 아예 없거나 초기화되지 않은 상태
let f3 = 0;
let f4 = -0;
let f5 = NaN; //숫자가 아님, 정의되지 않은/표현할 수 없는 수치(not a number)
let f6 = "";
let f7 = 0n; // 빅 intiger 특수 자료형, 아주 큰 숫자 저장, 웹개발엔 사용을 잘 안한다.

if (!f1) {
  // f1이 아니면(falsy한 값이면) 아래 코드 실행
  console.log("falsy");
}

// truthy한 값

let t1 = "hello";
let t2 = 123;
let t3 = {}; // 빈 객체, 프로퍼티와 밸류값 없음
let t4 = []; //빈 배열
let t5 = () => {}; // 함수

// 활용 사례

function printName() {
  if (!person) {
    // person 아니면 아래 코드 실행
    console.log("person값이 없음");
  } //false
  console.log("true");
}

let person = {
  name: "정성운",
};

printName(person);

// 객체의 특정 프로퍼티에 접근하는 함수는 보통 조건문으로 person 매개변수의 값이 null 또는 undefuned가 아닌지 확인함.

function passWord(number) {
  if (!number) {
    // number가 아니면 아래 코드 실행
    console.log("비밀번호가 없습니다.");
  }
  console.log("비밀번호가 있습니다.");
}

let number = {
  aaa: 123,
};

passWord(number);

function animal(value) {
  if (!Cat) {
    console.log("it's not a Cat");
  }
  console.log("It's a Cat");
}

let Cat = { color: "black" };

animal(Cat);

function people(value) {
  if (!sw) {
    console.log("it's not seongwoon");
  }
  console.log("it's seongwoon!");
}

let sw = { name: "seongwoon" };

people(sw);
