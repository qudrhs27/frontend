// 변수 선언
const users = [
  { id: 1, name: "철수", age: 20 },
  { id: 2, name: "영희", age: 17 },
  { id: 3, name: "민수", age: 25 },
];

let numbers = [1, 2, 3];

// 배열요소 접근
users.forEach((item) => {
  console.log(item.name);
});

// filter()
// users 에서 id가 3번이 아닌 user 만 추출해서 새로운 배열 생성

console.log(users.filter((user) => user.id !== 3));

// map() : 각 요소에 특정 연산을 하거나, 그냥 하나씩 가지고 나와서 새로운 배열로 리턴
const result = numbers.map((num) => num * 2);
console.log(result); // [ 2, 4, 10 ]

// 자바스크립트 객체 {키:값, 키:값...}
const obj1 = { name: "철수" };
// obj1, obj2 는 같은 객체를 가르킨다
const obj2 = obj1;

obj1.name = "영희";
console.log(`obj1 ${obj1.name}, obj2 ${obj2.name}`);

const user = {
  name: "철수",
  age: 20,
};

// user 복사(age만 21로 변경)
const newUser = {
  ...user,
  age: 21,
};

user.name = "영희";
console.log(newUser);

// numbers 를 복사
// const newArr = numbers; // 같은 배열

const newArr = [...numbers];
numbers[1] = 5;
console.log(numbers);
console.log(newArr);

// 구조 분해 할당
// user.name, user.age
const { name, age } = user;
console.log(`${name} : ${age}`);

// [ 1, 5, 3 ]
const [num1, ...num2] = numbers;
console.log(`${num1}, ${num2}`);

// 삼항연산자 : 조건 ? 참일때 : 거짓일때
// age가 20 이상이면 성인 / 미성년자
const result2 = age >= 20 ? "성인" : "미성년자";
console.log(result2);

// &&

// 콜백함수
// fetch()
