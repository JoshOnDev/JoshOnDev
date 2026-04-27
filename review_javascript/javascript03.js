//함수를 변수에 담기
function funcA() {
  console.log("hi");
}
let varA = funcA;
// -> 호출해서 결과값을 변수에 담은 게 아니라 함수 자체를 변수에 담음

varA();
// 함수를 변수로 호출가능함

let varB = function funcB() {
  console.log("hello");
};

varB();
// 함수를 만들자마자 변수에 담는 것 가능
//주의 !!!!!!!!!!!
// funcB는 선언식이 아님 표현식임.(그래서 이름 생략하고 익명함수로 쓸 수도 있는거임)
// 선언식은 변수로써 값으로 담기지 않아야 함.
// 그래서 funcB(); 는 오류남
// 함수를 선언식이 아닌 변수 안에서 만들면
// 함수 이름으로는 호출이 안됨. 변수이름으로만
// 호출할 수 있음
// 그래서 변수에 담긴 함수는 호이스팅 안되고
// 값으로서 취급되기 때문에 함수 표현식으로 만든 함수는
// 직접 함수 이름으로 호출 불가함.

// 화살표 함수

let varC = function () {
  return 1;
};

//function 지우고 소괄호 중괄호 사이에 화살표 넣기

let varD = () => {};

// 한 번 더 축약하려면(함수가 값을 반환하기만 할 때)
// 중괄호와 리턴문도 지우기
let varE = () => 1;
console.log(varE());
//1

//매개변수 필요할 때
let varF = (value) => value + 1;

console.log(varF(1));

// 추가적인 작업 필요할 때

let varG = (value) => {
  console.log("hello");
  value + 10;
};

console.log(varG(1));
