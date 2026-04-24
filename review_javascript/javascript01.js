let a = 1;
let name = "josh";

let b = name / a;
console.log(b); // NaN
// 숫자로 연산할 수 없어서 NaN

console.log("정성운 \njosh");

let num = 10;
let str = "10";

const result = num + str;
console.log(result);

let str1 = "10";
let strToNum1 = Number(str1);
// 변수 str1 을 number 타입으로 명시적 형변환 함.
// 내장함수 Number() 이용

let num2 = 3;
console.log(strToNum1 + num2);
//13

let str2 = "10개";
let strToNum2 = Number(str2);
console.log(strToNum2);

let str3 = "20개";
let strToNum3 = Number(str2);
console.log(strToNum3 + 1);

let str4 = "20개";
let str4toNum = Number(str4);
console.log(str4toNum);
//NaN 형변환 안됨
let par1 = "10개";
let par1toInt = parseInt(par1);
console.log(par1toInt);
//10

let num01 = 230;
let numToStr = String(num01);
console.log(numToStr);
//230

console.log(numToStr + 1);
// 2301 (X) 231 (O)

let str01 = "10";
let strToNum = Number(str01);

console.log(20 + strToNum);

let son = 20;
console.log(son + 10);
//30

sonToStr = String(son);
console.log(son + "10");
//2010
