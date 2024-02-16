// console.log("hello");
// console.log("hii");

// Destructuring assignment
// let arr = [1, 2];
// let [a, b] = arr;
// console.log(a, b);

// let a, b, rest;
// [a, b] = [22, 30];
// console.log(a); // 22
// console.log(b); // 30

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(rest); // [30, 40, 50]

let obj = {
  name: "guru",
  age: 26,
};

let { ...rest } = obj;
// console.log(rest);

// const { a, ...others } = { a: 1, b: 2, c: 3 };
// console.log(a); // 1
// console.log(others); // {b:2, c:3}

// ):

// Spread syntax (...)

// function sum(a, b, c) {
//   return a + b + c;
// }

// const number = [1, 2, 3];
// console.log(sum(...number)); // sum = 6

// let count = 0;
// const intervalID = setInterval(() => {
//   console.log("counter", count++);
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalID);
// }, 10000);

// function a() {
//   var i = 10;
//   function b() {
//     console.log(i);
//   }
//   b();
// }
// a();

function a() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
a();

function b() {
  for (var i = 1; i <= 5; i++) {
    function c(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    c(i);
  }
}
b();

function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
x();
