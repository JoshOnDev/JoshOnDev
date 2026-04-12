// 함수선언

function greeting() {
  // 실행해야 하는 코드 적기
  //   console.log("환영해요!");
}
// 함수는 선언한다고 실행되지 않음
// 함수는 호출해야 함

//greeting(); //함수의 선언 꼭 소괄호를 같이 써줘야 함.

// 함수가 호출되면 프로그램 순서가 함수 내부로 들어감.

// console.log("함수 호출 전");
// greeting();
// console.log("함수 호출 후");

// 함수 호출 전
// 환영해요!
// 함수 호출 후

// 직사각형의 넓이 구하는 함수 만들기

function getArea(weight, height) {
  let area = weight * height;
  function another() {
    console.log("중첩함수"); // 함수 안에 또다른 함수 만들 수 있음 "중첩함수"
  }
  another();
  console.log(area);

  return area;
  // return은 값을 반환하고 끝남. 즉 return 아래 코드는 실행되지 않음

  console.log("어쩌구저쩌구"); // 실제로 수행되지 않는다.
}

getArea(10, 20);

let area1 = getArea(20, 20);

getArea(100, 200);

//호이스팅 -> 끌어올리다 라는 뜻
// 자바스크립트는 함수 호출보다 아래에 함수 선언을 해도 실행을 함(wow!)
// getArea 함수를 호출하고 그 밑에 함수 선언을 해도 동작한다는 얘기.
// 보통 c, java는 오류남.
// 자바스크립트의 "호이스팅" 기능 덕분임. 함수 선언을 맨 위에 하지 않아도
//  내부적으로 선언문을 위로 끌어올려줌
