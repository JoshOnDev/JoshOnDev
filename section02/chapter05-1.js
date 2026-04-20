//객체 순회 복습

// for 반복
arr = [1, 2, 3];

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for of 반복

arr2 = [4, 5, 6];

for (item of arr2) {
  console.log(item);
}

// Object.keys
//객체를 순회하는 내장함수

person = {
  name: "정성운",
  age: 27,
  heighy: 175,
};

let keys = Object.keys(person); // (object.key에 person의 객체 키값을 넣음)
console.log(keys);

for (i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

for (let key of keys) {
  console.log(key);
} // 위와 같은 결과

//ket 값과 value 값도 동시에 순회하게 하는 법

for (let key of keys) {
  console.log(key, person[key]);
}

// 예시

bird = {
  color: "red",
  size: "Big",
};

let birds = Object.keys(bird);

for (let a of birds) {
  console.log(a, bird[a]);
}

human = {
  color: "white",
  age: 27,
  home: "Seoul",
};

let humans = Object.keys(human);

console.log(humans);

for (let hum of humans) {
  console.log(hum, human[hum]);
}

note = {
  color: "yellow",
  size: "midium",
};

notes = Object.keys(note);

console.log(notes);

for (let noteA of notes) {
  console.log(noteA, note[noteA]);
}
