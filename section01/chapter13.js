// 1. 콜백함수
function main(value) {
  console.log(value);
}
main(1);

function main2(value) {
  console.log(value);
}

function sub() {
  console.log("i am sub");
}

main2(sub);

// 복습
// 서브2 함수(콜백) 내요을 main3으로 호출하기
function main3(value) {
  value(); // 매개변수에 sub3()을 인수로 받아 호출 -> i am sub 2 출력
}

function sub2() {
  console.log("i am sub 2");
}

main3(sub2);

function main4(value) {
  //   console.log("안녕");
  value();
}

function sub4() {
  console.log("i am sub4");
}

main4(sub4);

function main5(value) {
  console.log("hi");
  value();
  console.log("bye");
}

main5(() => {
  console.log("i am sub 콜백함수 단축");
});

//2. 콜백함수의 활용
// 중복 코드 발생을 줄일 수 있음

// 아래는 중복코드임
// function repeat(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx);
//   }
// }

// function repeatDouble(count) {
//   for (idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }

// repeatDouble(5);

// 중복코드 방지
// repeat 함수에다 인수로 callback 함수 넣어주기

function repeat(count, callback) {
  for (idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

// 1, 2, 3, 4, 5
repeat(5, function (idx) {
  console.log(idx);
});

//2, 4, 6, 8, 10
repeat(5, function (idx) {
  console.log(idx * 2);
});

//3, 6, 9, 12, 15
repeat(5, function (idx) {
  console.log(idx * 3);
});

//좀 더 간결한 코드
// 4, 8, 12, 16, 20

repeat(5, (idx) => {
  console.log(idx * 4);
});

//연습

function repeat2(count, callback) {
  for (let num = 1; num <= count; num++) {
    callback(num);
  }
}

repeat2(5, function (num) {
  console.log(num);
});
