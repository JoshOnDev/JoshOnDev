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

let woman = { sex: "woman" };
girl(woman);
