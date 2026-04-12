// 1. if 조건문(if문)
// if문의 소괄호에는 "조건"이 들어감
let num1 = 9;

if (num1 >= 10) {
  //   console.log("num1은 10 이상입니다.");
  //   console.log("조건은 참입니다!");
  // 여러개 조건을 추가할 수 잇음
} else if (num1 >= 5) {
  //   console.log("num1은 5 이상입니다.");
}

// 조건이 거짓일  때 실행하고 싶으면 else를 씀
else {
  //   console.log("num1은 10 이상이 아닙니다.");
  //   console.log("조건이 거짓입니다!");
}

// if문은 무조건 if로 시작해서 else로 끝나야 함. elseif 가 else 이후에 나오면 안됨.

//2. switch문
// -> if문과 기능 자체는 동일
// -> 다수의 조건 처리할 때 if보다 더 직관적임
// switch문의 소괄호에는 "변수"가 들어감.

let animal = "dd";
switch (animal) {
  case "cat": {
    console.log("고양이");
  }
  case "bear": {
    console.log("곰");
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
// swith문은 변수에 맞는 값을 위에서부터 찾고, break가 없으면 맞는 조건 이후를 다 출력함.
// 그래서 break를 모든 조건에 다 넣는 것이 일반적임
// 만약 조건에 모두 안 맞으면 "default" 값을 출력함(if문의 elseif 와 같음)

// 어떤 변수 값을 기준으로 각각 다른 코드를 실행 -> switch
// 복잡한 조건을 이용하고 싶다 -> if문
