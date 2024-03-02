// TypeError: Promise.then is not a function in JavaScript

// EXAMPLE 1 - Only call the `.then()` method on valid promises

const p1 = Promise.resolve('Hello');

p1.then(value => {
  console.log(value); // 👉️ Hello
});

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using the Promise() constructor and calling resolve() manually

// function sum(a, b) {
//   return new Promise((resolve, reject) => {
//     resolve(a + b);
//   });
// }

// sum(5, 5).then(result => {
//   console.log(result); // 👉️ 10
// });

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if the value is a Promise before calling `.then()`

// const p1 = null;

// if (typeof p1 === 'object' && p1 !== null && 'then' in p1) {
//   p1.then(value => {
//     console.log(value);
//   });
// }
