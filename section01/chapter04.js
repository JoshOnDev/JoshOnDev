// 1. 변수
let age;

age = 25;

// 2. 상수(값을 바꿀 수 없음)
// 값 변화 불가, 선언과 동시에 초기값 할당 및 초기화 필수

const birth = "2000.04.17";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _를 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let _2name;
let $2name;

// 3-3. 예약어를 사용할 수 없다.
//let let; (X)
//let if; (X)

// 4. 변수 명명 가이드
let a = 1;
let b = 2;
let c = a - b;

let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
