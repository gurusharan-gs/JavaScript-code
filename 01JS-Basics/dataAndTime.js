// console.log(new Date().toString());
let time = new Date();
// console.log(time);
// console.log(time.toString());

const birthday = new Date("August 19, 1975 23:15:30");
// const date1 = birthday.getDate();
// const date2 = birthday.getMonth();
// const date3 = birthday.getFullYear();
// const date4 = birthday.getHours();
// const date5 = birthday.getMinutes();
// const date6 = birthday.getSeconds();

// console.table([date1, date2, date3, date4, date5, date6]);

// const event = new Date();

// console.log(event.toUTCString());

const event = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(event.toLocaleDateString("de-DE", options));
console.log(event.toLocaleDateString(undefined, options));
