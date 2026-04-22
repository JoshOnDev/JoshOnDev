function returnFalse() {
  console.log("hi");
  return false;
}

function returnTrue() {
  return true;
}

console.log(returnFalse());
console.log(returnTrue());

console.log(returnFalse() && returnTrue()); // false
// && : 둘 다 참이어야 참

function returnFalse() {
  console.log("False함수");
  return false;
} // False를 리턴하는 함수

function returnTrue() {
  console.log("True함수");
}
console.log(returnFalse() && returnFalse());
// false 함수 호출, return false
// -> 단락 평가 적용됨. 둘 다 참이어야 참인데 false로 시작해서 단락평가 적용.

function returnTrue() {
  console.log("Truthy");
  return 10;
}

console.log("d");

console.log(returnFalse() || returnTrue());
// 하나는 참이거나 거짓이면 참
// || 오어 연산으로 앞 계산이 false 라서 뒤까지 연산하게 됨
// returnFalse() 함수와 returnTrue() 함수 둘 다 호출 되고, True의 리턴값 10 반환됨
