person = {
  name: "정성운",
  age: 27,
};

// 객체 person을 persons라는 배열로 만듦
// Object.keys() 내장함수 활용

persons = Object.keys(person);

console.log(persons);

// persons 배열의 키값 호출

for (pp of persons) {
  console.log(pp);
} // 키값 name, age 출력

// persons 배열의 밸류값 호출

for (pp of persons) {
  const value = person[pp];
  console.log(value);
}

console.log("--------------");

// persons 배열의 키값과 밸류값 동시 호출

for (p of persons) {
  const value = person[p];
  console.log(p, value);
}
