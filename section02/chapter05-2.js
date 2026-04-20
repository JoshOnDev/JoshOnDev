person = {
  name: "정성운",
  age: 27,
  height: 175,
};

persons = Object.keys(person);

console.log(persons);

for (let per of persons) {
  console.log(per, person[per]);
}
