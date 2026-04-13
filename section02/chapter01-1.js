function passWord(number) {
  if (!number) {
    console.log("비밀번호가 없습니다.");
  }
  console.log("비밀번호가 있습니다.");
}

let num = { passW: "1234" };
passWord(num); // 비밀번호가 있습니다.

// 객체가 있으면 true, 객체든 뭐든간에 falsy한 값이면 false

function girl(woman) {
  if (!woman) {
    console.log("여자가 아닙니다.");
  }
  console.log("여자입니다.");
}

let woman = { name: "정성운" };
girl(woman);

function animal(cat) {
  if (!cat) {
    console.log("고양이가 아닙니다.");
  }
  console.log("고양이 입니다.");
}

let cat = { name: "정성운 고양이임" };

animal(cat);
