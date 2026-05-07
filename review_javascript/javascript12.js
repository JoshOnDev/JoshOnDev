for (i = 0; i < 5; i++) {
  console.log(i);
} //0, 1, 2

for (let idx = 1; idx < 10; idx++) {
  console.log(idx); // 0, 1, 2, 3, 4 총 5번
  1;
  if (idx % 2 === 0) {
    continue; // 1, 1, 2, 3, 3, 4, 5, 5
  }
  console.log(idx); //1

  if (idx >= 5) {
    // idx값이 5 이상일 떄 반복을 중지해라
    break; // 반복문 종료
  }
}

let animal = "dd";
switch (animal) {
  case "cat": {
    console.log("고양이");
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "tiger": {
    console.log("호랑이");
  }
  case "snake": {
    console.log("뱀");
  }
  default: {
    console.log("그런 동물은 없습니다.");
  }
}
