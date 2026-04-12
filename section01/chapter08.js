// 1. null 널 병합 연산자
// 존재하는 값을 추려내는 기능
// null, undefined가 아닌 값을 찾아내는 연산자

let var1; // undefined
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
//var1 은 undefined, var2는 10으로 초기화된 값임
//var2 는 10이니까 undefined 나 null이 아님.
// 그러므로 10이 var4에 저장됨

//console.log(var4);

let var5 = var1 ?? var3;
//console.log(var5);
// -> 20 출력됨

// 둘 다 null이나 undefined가 아닌 값이면?
let var6 = var2 ?? var3;
let var7 = var3 ?? var2;

// 맨 처음에 적힌 값이 출력됨
//console.log(var6); // -> 10
//console.log(var7); // -> 20

// 실제로 실무에서 null 병합 연산자가 요긴하게 쓰임 특히 회원가입 등
let userName = "정성운";
let userNickname = "josh";

//userName이 있다면 화면에 userName 표시하고, 없다면 닉네임 표시해라(저장해라)
let displayName = userName ?? userNickname; // 항 2개
//console.log(displayName);

// 2. Typeof 연산자
// -> 값의 "현재 타입" 을 문자열로 변환하는 기능을 하는 연산자

let var8 = 1; // 숫자
var8 = "1"; // string 문자열로 바꿈

let t1 = typeof var8;
// -> var8의 현재 변수 타입이 뭐냐?

console.log(t1); // string

var8 = true;
t2 = typeof var8;

console.log(t2);

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// 항 : 연산자 양쪽에 있는 애들, 보통 연산자는 항을 2개를 쓰거나 1개만 씀
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환

let var9 = 10;

//요구사항 : 변수 res에 var9의 값이 짝수면 "짝", 홀수면 "홀" 저장하라

var res = var9 % 2 === 0 ? "짝" : "홀";
console.log(res);
