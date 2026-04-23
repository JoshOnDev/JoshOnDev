// 6가지 요소 조작 메서드

//1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드

let arr1 = [1, 2, 3];
arr1.push(4, 5, 6);
console.log(arr1);

// push 메서드는 push 수행 이후 변경된 배열 길이를 반환함.

const newLength = arr1.push(7, 8);
console.log(newLength);
//8

// 2. pop
// 배열의 맨 뒤에 있는 요소 제거, 반환

let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();
console.log(poppedItem);
3; //(뽑힌 아이템)
console.log(arr2);
(1, 2); //(남아있는 아이템)

// 3. shift
// 배열의 맨 앞에 있는 요소 제거, 반환

let arr3 = [1, 2, 3];
const shiftItem = arr3.shift();

console.log(shiftItem); //1
console.log(arr3); //2, 3

//4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0); //0,1,2,3

console.log(arr4); // 0, 1, 2, 3

console.log(arr4, newLength2); // 0,1,2,3 4

// 참고 shift와 unshift는 push, pop보다 느리게 동작함

// 5. slice
// 마치 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환

let arr5 = [1, 2, 3, 4, 5];

// arr5.slice(2, 5);
// 자르기 시작할 인덱스, 잘라낼 범위의 끝 인덱스번호 + 1(이유 : 그 전까지 잘라내기 때문)
//1,2

let sliced1 = arr5.slice(2, 5);
let sliced2 = arr5.slice(2);
// 끝까지 잘라낼거면 두번째 인수는 생략 가능

console.log(sliced1);
console.log(arr5); // 원본 배열 값은 변경되지 않음
// 잘라낸 값만 활용하고 싶을 때 변수로 활용하기

console.log(sliced2);

//배열의 뒤에서부터 잘라내고 싶을 때
// 인수에 음수값 넣기
let sliced3 = arr5.slice(-1);
// 5
console.log(sliced3); //5

//6. concat 메서드
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환함

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr); //1, 2, 3, 4
let concatedArr2 = arr7.concat(arr6);
console.log(concatedArr2); //3, 4, 1, 2
