// 1. 배열 생성

let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];

// 2. 배열 요소 접근

let item1 = arrC[0]; //arrC 배열의 0번 인덱스에 접근하여 그 값을 item1에 넣음
let item2 = arrC[1];

arrC[0] = "hello"; // arrC의 0번 인덱스의 값을 "hello"로 수정
arrC[1] = 10; // arrC의 1번 인덱스 값을 10으로 수정

console.log(arrC[0]);

console.log(arrC);
