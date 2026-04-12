//1. 함수 표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA; // 초기값으로 funcA를 호출한 결과가 아니라 함수 자체를 저장
//함수 자체가 콘솔에 출력됨.

console.log(varA);

varA = funcA;
// console.log(funcA);

let varB = function funcB() {
  // 이때 funcB는 선언된 게 아님. 호이스팅 안됨. 변수로 호출해야 되는 함수임(익명함수라고 부름)
  console.log("funcB");
};
//varB();

// 2. 화살표 함수
// 함수를 더 빠르고 간결하게

let varC = (value) => {
  console.log(value);
  return value + 1;
};

//console.log(varC(10));

function funcD() {
  console.log("복습");
}
let varD;

varD = funcD;
console.log(varD);
varD = funcD();
console.log(varD);

function funcF() {
  console.log("안녕");
}
let varF = funcF;

console.log(varF);
// 함수 자체 콘솔

varF = funcF();
console.log(varF);
// 안녕 호출

let varG = function funcG() {
  return 1;
};
console.log(varG);
//함수 자체 콘솔

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
