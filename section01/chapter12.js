//1. 함수 표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA; // 초기값으로 funcA를 호출한 결과가 아니라 함수 자체를 저장
//함수 자체가 콘솔에 출력됨.
varA = funcA();
// 함수를 변수에 담아둘 수 있음
// 변수 이름으로 호출도 가능
// -> varA();

console.log(varA);

varA = funcA;
console.log(funcA());

let varB = function funcB() {
  // 이때 funcB는 선언된 게 아님. 호이스팅 안됨. 변수로 호출해야 되는 함수임(익명함수라고 부름)
  console.log("funcB");
};
varB();

// 2. 화살표 함수
// 함수를 더 빠르고 간결하게

let a = function b() {
  console.log("일반 함수지롱");
  return "";
};

console.log(a());
a();

let b = () => {
  console.log("화살표 함수지롱");
};
b();
console.log(b());

let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));

console.log("enter");
varC(10);
console.log("enter");

function funcD() {
  console.log("복습");
}
let varD;

varD = funcD;
console.log(varD);
varD = funcD();
console.log(varD);

function name() {
  console.log("정성운");
}

let me = name;
console.log(me); // 함수 기계 자체 출력
me = name();
console.log(me); // 함수 결과값 출력

function funcF() {
  console.log("안녕");
}
let varF = funcF;

console.log(varF);
// 함수 자체 콘솔

varF = funcF();
console.log(varF);
// 안녕 호출

let varG = (function funcG() {
  return 1;
})();
console.log(varG);
//()를 붙임으로써 함수 변수에 담고 호출까지 함.("함수를 실행한 결과값"을 저장)

let varH = () => {
  return 1;
};
console.log(varH);
// 함수 자체 콘솔

let varI = (H) => {
  console.log(H);
  return 1 + H;
};

console.log(varI(10));

console.log("커밋 테스트");
