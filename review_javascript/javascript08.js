// 배열 변형 메서드
// 1. filter
// 조건에 맞게 필터링해 새로운 배열 생성

let arr01 = [
  { name: "정성운", hobby: "reading" },
  { name: "정성윤", hobby: "coding" },
];

const people = arr01.filter((item) => item.hobby === "coding");

console.log(people);
