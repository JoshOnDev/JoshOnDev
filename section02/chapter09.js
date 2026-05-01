// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건에 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "정성운", hobby: "coding" },
  { name: "정현석", hobby: "reading books" },
  { name: "정진아", hobby: "studying" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "coding");

console.log(tennisPeople);
//2. map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
