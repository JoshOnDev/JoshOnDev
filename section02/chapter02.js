// function returnFalse(){
//     return false;
// }

// function returnTrue(){
//     return true;
// }

// console.log(returnFalse() && returnFalse);
// -> false

// function returnFalse(){
//     console.log("False 함수");
//     return false;
// }

// function returnTrue(){
//     console.log("True함수");
//     return true;
// }

// console.log(returnFalse() && returnFalse());
// False 함수
// false
// -> 단락 평가 작동됨
// -> returnFalse() 함수 자체가 false라서 앤드&& 계산이 숏서킷 됨.
// 이 경우 앞의 값의 결과값만 동작됨.

// function returnFalse() {
//   console.log("falsy");
//   return undefined;
// }

// function returnTrue() {
//   console.log("truthy");
//   return 10;
// }

// console.log(returnFalse() || returnTrue());
// // -> 이 경우 오어|| 연산으로 앞 계산이 false니까 뒤까지 연산하게 됨.
// // -> 뒤의 값 returnTrue의 함수까지 동작하여 결과값으로 returnTrue() 함수 값이 출력됨.

// // 결과값 : falsy, truthy, 10
