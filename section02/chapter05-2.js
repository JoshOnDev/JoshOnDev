person = {
  name: "정성운",
  age: 27,
  height: 175,
};

persons = Object.keys(person);

console.log(persons);

for (let per of persons) {
  const value = person[per];
  console.log(per, value);
}

bird = {
  color: "red",
  size: "mid",
};

b = Object.keys(bird);

console.log(b);

for (let bb of b) {
  console.log(bb, bird[bb]);
}

jsw = {
  name: "정성운",
  job: "취준생",
  hope: "프론트앤드 개발자",
};

console.log(jsw);

let jeong = Object.keys(jsw);
// jeong 에 jsw 키값을 새로운 배열로 넣음

for (let jeongs of jeong) {
  // jeong 배열의 키값을 jeongs 변수에 넣음
  console.log(jeongs);
  //jeong의 키 값을 jeongs 변수로 호출함
}

//jeongs의 키값과 벨류값을 모두 호출하기

for (let jeongs of jeong) {
  const value = jsw[jeongs];
  console.log(jeongs, value);
} // 키값, 벨류값

phone = {
  aa: "iphone",
  bb: "silver",
};

phones = Object.keys(phone);

for (let ph of phones) {
  console.log(ph);
}

for (let ph of phones) {
  console.log(ph, phone[ph]);
}

for (let ph of phones) {
  const value = phone[ph];
  console.log(ph, value);
}

food = {
  noodle: "pasta",
  drinks: "beer",
};

foods = Object.keys(food);
//foods 에 food 객체 키값을 배열로 넣음

// for문으로 foods 키값 출력

for (i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

console.log("--------");

for (let ff of foods) {
  console.log(ff);
}

//foods의 키값과 벨류값 출력
for (let ff of foods) {
  const value = food[ff];
  console.log(ff, value);
}
