// function repeat(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx);
//   }
// }
// repeat(5);

function repeat(count, callback) {
  for (idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(6, function (idx) {
  console.log(idx);
});

repeat(7, () => {
  console.log(idx);
});

console.log("중간");

function A(count) {
  for (id = 1; id <= count; id++);
  console.log(id);
}

A(2);

function A(count) {
  for (id = 1; id <= count; id++) {
    console.log(id);
  }
}

A(5);

console.log("중간");

function AB(count, callback) {
  for (id = 1; id <= count; id++) {
    console.log(id * 2);
  }
}

AB(5, function (id) {
  console.log(id);
});

AB(3, (id) => {
  console.log(id);
});

function name(value) {
  console.log("start");
  value();
  console.log("end");
}

name(function me() {
  console.log("i am seongwoon");
});

name(() => {
  console.log("i am developer");
});

name(function () {
  console.log("me my mine");
});

function number(callback) {
  console.log(1);
  callback();
  console.log(2);
}

number(function () {
  console.log("test");
});

console.log("rest");

function num2(count, callback) {
  for (id = 1; id <= count; id++) {
    callback(id);
  }
}

num2(3, () => {
  console.log(id);
});
