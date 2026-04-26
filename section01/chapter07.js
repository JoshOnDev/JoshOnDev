// // 1, 대입 연산자 '='
// let var1 = 1;
// // var a = 1;
// // var a = 2;
// a();

// function a() {
//   let var1 = 0;
//   console.log("hello!");
// }

// console.log("\n");
// // 2. 산술 연산자
// let num1 = 3 + 2;
// let num2 = 3 - 2;
// let num3 = 3 * 2;
// let num4 = 3 / 2;
// let num5 = 3 % 2;

// // 8 *, /, % -> +. - 연산자보다 먼저 실행됨.(계산 우선순위 높음)

// let num6 = 1 + 2 * 10;
// //console.log(num6);
// // 소괄호로 묶으면 -, +여도 괄호가 먼저 계산됨

// //3. 복합 대입 연산자
// //산술 + 대입
// let num7 = 10;
// num7 += 20;
// num7 -= 20;

// num7 = num7 + 10;

// console.log(num7);
// num7 -= 10;
// console.log(num7);

// 4. 증감 연산자(1씩 늘리거나 줄일 때 사용
let num8 = 10;
console.log(++num8); //10


// 증감 연산자를 변수명 뒤에 쓰게 되면 이 라인이 끝나고 나서야 1이 증가됨.
// 위 num8++ 은 이 줄에서 9가 11이 됨
console.log(num8); // ->  출력하면 결과는 11임.
//바로 1 증가되게 하고 싶으면 console.log(num8++); 이라고 하면 안되고 아래처럼 해야 함.
//console.log(++num8); // 12출력
//또는 복합대입 연산자를 이렇게 console.log(num8 +=1); 라고 쓰든가.
//변수명 앞에 증감연산자를 쓰는 것을 전위 연산이라고 함.
//변수명 뒤에 증감연산자 = 후위 연산
//덧셈말고 뺏셈으로도 사용 가능
//console.log(--num8); // 11출력
//console.log(--num8); //10 출력

// 5. 논리 연산자 true, false
let or = true || false; // 두개의 값 중 하나만 참이면 참
let and = true && false; // 두개 값이 모두 true 여야 true
let not = !true; // 참거짓 반대됨. true라면 false로, false라면 true로

//console.log(or, and, not); // true, false, false

// 6. 비교 연산자
let comp1 = 1 === 1; // 1과 2가 같은 값인지 동등연산자
let comp2 = 1 !== 2; // 두개의 값이 서로 같지 않은지 연산하는 비동등 연산자, 같지 않으면 true, 같으면 false
console.log(comp1, comp2); // false, true
//한가지 문제, =을 두개만 넣으면 값의 자료형까지 비교가 안됨.
// -> 1 == "1" -> 왼쪽은 숫자(int형)이고 오른쪽은 문자열임(string). 이때 ==을 쓰면 값만 비교해서 true가 나와버림
// -> 1 === "1" -> =을 3번 쓰면 자료형까지 비교가 되기 때문에 숫자가 같더라도 자료형이 달라서 결과값은 false가 됨
// =을 3번 써야 자료형까지 비교됨.

let comp3 = 2 == "2"; // 느슨한 비교로, 타입이 달라도 내용이 숫자 2로 같아서 true
//"오, 숫자 2랑 문자 2? 결국 생긴 건 똑같네!" 하고 true를 줌
// -> true
let comp4 = 3 === "3"; // 문자열과 숫자는 타입이 같지 않기 때문에 false
//"값은 3으로 똑같지만, 한 놈은 숫자고 한 놈은 문자잖아? 이건 완전히 같은 게 아니야!"
// -> false
console.log(comp3, comp4);

//자바스크립트에서는 ===을 쓰는 게 일반적임

let comp5 = 2 > 1; // true
let comp6 = 2 < 1; // false
//console.log(comp5, comp6);

// 이상, 이하를 연산하고 싶을 때

let comp7 = 2 >= 2;
let comp8 = 2 <= 2;
console.log(comp7, comp8); // true true
