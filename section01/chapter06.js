// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
//console.log(result);
// num 에 있는 숫자가 string 타입으로 형변환이 자동으로 일어남.
// 두 개의 문자열이 이어붙여짐
// 결과값 = 1020

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
//Number 은 자바스크립트의 내장함수임
console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = Number(str2);
console.log(strToNum2);
// -> Nan (Not a Number), 사칙 연산 실패

let str3 = "20개";
let strToNum3 = parseInt(str3);
//console.log(strToNum3);
// -> 개 빼고 숫자만 나옴
//문자가 앞에 있으면 형변환 잘 안됨.

// 숫자 -> 문자
let num1 = 240;
let numToStr1 = String(num1);

//console.log(numToStr1 + "00");
// -> 결과값 24000
