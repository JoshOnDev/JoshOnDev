// function main(value) {
//   //   console.log(value);
//   value();
// }

// function sub() {
//   console.log("나는 콜백함수 sub입니다");
// }

// main(sub);

// main(function sub() {
//   console.log("서브");
// });

// main(() => {
//   console.log("sub");
// });

function name(value) {
  console.log("name ㄴㄴ함수입니다.");
  console.log(value);
  value();
}

name(function cb() {
  console.log("my name is seongwoon");
});
//함수
//my name is seongwoon

name(() => {
  console.log("나는 성운입니다.");
});
//함수
//나는 성운입니다.
