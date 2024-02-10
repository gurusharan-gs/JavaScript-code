/**
 * javascript is programming language that is used for converting static web pages to interactive and dynamic web pages
 *
 * in javascript there two types of data types
 * 1. primitive data type
 * 2. non primitive data type
 *
 * primitive data type
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Undefine
 * 5. Null
 *
 * non primitive data type
 * 1. Array
 * 2. Object
 * 3. Function
 * 4. Data
 *
 *
 */

// Array
let number = [1, 2, 3, 4, 5];
let name = ["apple", "orange", "mango", "banana"];

let types = [1, true, "guru", null, { a: 1, b: 2 }, [3, 4]];
// console.log(types);

// function
function getName() {
  let fruit = "apple";
  return fruit;
}
// console.log(getName());

// object
let obj = {
  name: "Ravi",
  age: 25,
  city: "Bangalore",
  fun: function print() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.city);
  },
};

// obj.fun();

// global variable
// let a = 25;
// function globalFun() {
//   console.log(a);
// }
// console.log(a);
// globalFun();

// local variable
// function localFun() {
//   let b = 30;
//   console.log("inside fun", b);
// }
// console.log("outside fun", b);
// localFun();

// const m = 23;
// console.log(m);
// m = 20;
// console.log(m);

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

/** Palindrome Checking */

const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

let str = "ama";
if (isPalindrome(str)) {
  console.log("true");
} else {
  console.log("false");
}
