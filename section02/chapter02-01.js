function returnFalse() {
  console.log("false 값 출력");
  return false;
}

function returnTrue() {
  console.log("true값 출력");
  return 10;
}

//console.log(returnFalse() && returnTrue());
//false값 출력(함수 호출된 값), false(위 콘솔의 결과 값)

//console.log(returnTrue() || returnFalse());
//true값 출력(함수 호출된 값). false값 출력, true(위 콘솔 연산의 결과값)
// -> returnTrue의 값이 truthy한 값이라 뒤까지 연산할 필요 X
// 앞까지만 연산 후 리턴값 출력

//console.log(returnTrue() && returnFalse()); //
// true값 출력, false값 출력, false

//console.log(returnTrue() || returnFalse());
//true값 출력, 10
//숏 서킷

//console.log(returnFalse() || returnTrue());
//false값 출력, true값 출력, 10
// 숏서킷 안되는 경우, 함수 각각 호출 후 연산의 결과값을 함수의 return값으로 반환

// function returnName() {
//   console.log("이름이 없습니다.");
//   return null;
// }

// 단락 평가 예시

// function printName(person) {
//   if (person) {
//     console.log("person에 값이 없음");
//     return;
//   }
//   console.log(person.name);
// }

// 위의 비효율적인 if문 제거 후 단락 평가 적용

// function printName(person){
//     console.log(person && person.name); // 인수로 받은 person값이 있는지 없는지 확인
//     return;
// }

// printName(); // undefined

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
} // name 변수에 논리연산의 결과값을 넣어라.
//

printName(); // person의 값으로 undefine으로 설정되어 있어서 false, 단락평가로 person의 값ㄱ이 없음
// -> 인수 전달 안되어서 false

printName({ name: "정성운" });
//정성운, person의 값이 없음
