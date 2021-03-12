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
// returns object
// returns first match, if no match --> undefined
// great for getting unique value

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
  { name: "anna", age: 35, position: "the boss" },
];

