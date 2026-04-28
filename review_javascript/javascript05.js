// 일반 함수 선언식/표현식 버전

function funcA() {
  console.log(1);
  return 1;
}

console.log(funcA);
funcA();

let varA = function funcB() {
  console.log(2);
  return 1;
};

console.log(varA);
// funcB 함수 자체가 나옴

console.log(varA());
//funcB를 호출함, 호출된 값이 반환됨
