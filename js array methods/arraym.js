// Reminder: Higher Order Function - accepts another function as an argument or returns another function as a result.
// Callback Function - passed to abother function as an argument and excuted inside that function.

// Array Iterators
// For Each
// Map ​
// Filter ​
// Find ​
// Reduce


// POWERFULL ARRAY METHODS
// ** forEach, map, filter, find, reduce
// Iterate over array - no for loop required
// Accept CALLBACK function as an argument, calls callback against each item in a array. Reference Item in the CALLBACK paramater.

// const numbers = [0, 1, 2, 3, 4];

// // show all numbers

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }


// 01. forEach
// does not return new array

// const people = [
//   { name: "bob", age: 20, position: "developer" },
//   { name: "peter", age: 25, position: "designer" },
//   { name: "susy", age: 30, position: "the boss" }
// ];

// // pass values directly by setting up an anonymous function or pass it as a reference (CALLBACK function)

// // CALLBACK function
// // function showPerson(person) {
// //     console.log(person);
// // }
// function showPerson(person) {
//   console.log(person.position.toUpperCase());
// }
// // people.forEach(showPerson); //don't invoke the CALLBACK function

// // ANONYMOUS function
// people.forEach(function(item){
//   console.log(item.position.toUpperCase());
// });


// 02. MAP 
// does return a new array
// does not change size of oringinal array
// uses values from oringinal array when making new one

// const people = [
//   { name: "bob", age: 20, position: "developer" },
//   { name: "peter", age: 25, position: "designer" },
//   { name: "susy", age: 30, position: "the boss" }
// ];

// // callback function 01
// const ages = people.map(function (person) {
//     console.log(person);
//     return 'hello world';
// });
// console.log(ages);


// callback function 02
// const ages = people.map(function (person) {
//     return person.age + 20;
// });

// console.log(ages);


// callback function 03
// use object to return more values
// const newPeople = people.map(function (person) {
//     return {
//         firstName: person.name.toUpperCase(),
//         oldAge: person.age + 20,
//     };
// });

// console.log(newPeople);


// callback function 04 + DOM
// const names = people.map(function (person) {
//     return `<h1>${person.name}</h1>`;
// });

// document.body.innerHTML = names.join('');

// console.log(names);


// FILTER
// does return a new array
// can manipulate the size of new array
// returns based on condition (if...), if none is matched, the array stays empty

// const people = [
//   { name: "bob", age: 20, position: "developer" },
//   { name: "peter", age: 25, position: "designer" },
//   { name: "susy", age: 30, position: "the boss" },
// ];

// const youngPeople = people.filter(function(person){
//     return person.age <= 25;
// })

// const developers = people.filter(function (person) {
//   return person.position === 'developer';
// });

// console.log(youngPeople); // new array includes bob and peter
// console.log(developers); // new array includes bob


// FIND
// returns single instance - (in this case object)
// returns first match, if no match --> undefined
// great for getting unique value

// const people = [
//   { name: "bob", age: 20, position: "developer", id: 1 },
//   { name: "peter", age: 25, position: "designer", id: 2 },
//   { name: "susy", age: 30, position: "the boss", id: 3 },
//   { name: "anna", age: 35, position: "the boss", id: 4 },
// ];

// const person = people.find(function(person) {
//   return person.id === 3;
// });

// console.log(person.name);

// // New object as String, return string bob in console
// const names = ['bob', 'peter', 'susy'];
// console.log(
//   names.find (function (name) {
//     return name === 'bob';
//   })
// );

// // filter - return an array with index #0
// const person2 = people.filter(function (person) {
//   return person.id === 3;
// });

// console.log(person2);
// console.log(person2[0].name); // if only want name, you can add index no.


// REDUCE
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations (accumulation). ALWAYS return it first.
// 2 parameter ('curr') - current iteration/value

// const people = [
//   { name: "bob", age: 20, position: "developer", id: 1, salary: 200 },
//   { name: "peter", age: 25, position: "designer", id: 2, salary: 300 },
//   { name: "susy", age: 30, position: "the boss", id: 3, salary: 500 },
//   { name: "anna", age: 35, position: "the boss", id: 4, salary: 500 },
// ];

// const total = people.reduce(function(acc, currItem) {
//   console.log(`total ${acc}`);
//   console.log(`current money : ${currItem.salary}`);
//   acc += currItem.salary;
//   return acc;
// }, 0)

// console.log(total);


// MATH
// Standard built-in objects - always available

// const number = 4.56789;
// const result = Math.floor(number); // Returns the greatest integer less than or equal to its numeric argument. Here is 4.

// const number = 4.12222;
// const result = Math.ceil(number); // Returns the smallest integer greater than or equal to its numeric argument. Here is 5.

// const number = 49;
// const result = Math.sqrt(number);

// const result = Math.PI;
// const result = Math.min(4, 5, 6, 7, 8);
// const result = Math.max(4, 5, 6, 7, 8);

// const result = Math.random(); 
// value is less than 1 (0 - 0.9999999...)

// to make random number >= 1 and only get the integer
// const result = Math.floor(Math.random() * 10); // 0 - 9
// const result = Math.floor(Math.random() * 10 + 1); // 1 - 10
// const result = Math.ceil(Math.random() * 10); // 1 - 10

// console.log(result);


// DATE

const months = [
  "January", // index no is 0
  "February", // index no is 1
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday", // index no is 0
  "Monday", // index no is 1
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// const date = new Date(); // the current date
const date = new Date('1/12/2004'); // setting the date you need (in the past or future)

const month = date.getMonth();
console.log(month); // index no
console.log(months[month]); // match the index no to the month

const day = date.getDay();
console.log(day);
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()} `;

console.log(sentence); // Tuesday, 16 March 2021

document.body.innerHTML = sentence; // show in web page Tuesday, 16 March 2021
