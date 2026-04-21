function passWord(number) {
  if (!number) {
    console.log("비밀번호가 없습니다.");
  }
  console.log("비밀번호가 있습니다.");
}

let num = { passW: "1234" };
//num 객체 생성 및 프로퍼티와 벨류값 입력

passWord(num);

// 객체 있으면 true, 객체든 뭐든간에 falsy한 값이면 false

function girl(woman) {
  if (!woman) {
    console.log("여자 아님.");
  }
  console.log("여자임.");
}

// let woman = { sex: "woman" };
// girl(woman);

// function person(woon) {
//   if (!woon) {
//     console.log("운이 아닙니다.");
//   }
//   console.log("운입니다.");
// }

// let woon = { name: "성운" };

// person(woon);

// let person = {
//   name: "정성운",
//   age: 27,
//   hobby: "coding",
// };

function name(value) {
  console.log(value);
  value();
}

name(function me() {
  console.log("정성운");
  console.log("입니다");
});
