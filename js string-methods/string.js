// Connect The Dots
// String Properties And Methods ​
// Template Literals ​
// Array Properties And Methods
// Exercise - Full Name ​(array + for loop)
// Exercise - Calculate Total ​
// Value Vs Reference ​
// Null And Undefined
// Truthy And Falsy
// Ternary Operator

// String Properties And Methods +()
// wrapper String Object, don't need to memorise methods

// let text = ' Michael Jordan';
// let result = text.length;
// console.log(text.length);

// // methods
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(5)); // string's index start at 0
// console.log(text.charAt(text.length - 1)); //lenght might change, can use this formula to find the last character
// console.log(text.indexOf('m')); //JS is case sensitive, if the indexOf doesn't find the match one, it will return -1. If there are more than one same character, it returns the first one.
// console.log(text.trim()); //remove the white spaces in the string
// console.log(text.startsWith('michael')); // a space and uppercase don't match the condition, then it returns false
// console.log(text.trim().toLowerCase().startsWith('michael')); // trim remove the space and toLowerCase changes the M to m, startsWith find the same condition, it returns true.
// console.log(text.includes('ae')); //find the match characters and return true/false
// console.log(text.slice(3, 6)); //return a section of a string. Start from index 3 character and end at index 5.
// console.log(text.slice(-3)); //return a section of a string starting from the end. EX. -3 shows the last 3 characters of Jordan -- 'dan' .

// const person = {
//     name: 'Michael', //property
//     greeting() {
//         // method
//         console.log("Hey, I'm Michael");
//     },
// };

// console.log(person);
// console.log(person.name);
// person.greeting();

// Template Literals - ES6+
// Backtick characters `` - above tab (left from one), easier and simpler
// Interpolation ${} - insert expression(value)

// const name = 'john';
// const age = 25;

// // general
// const sentence = "Hey it's " + name + ' and he is ' + age + ' years old';

// console.log(sentence);

// // template literals
// const value = `Hey it's ${name} and he is ${age} years old. And here is some simple math ${
//     4 + 10
// }`;

// console.log(value);

// ARRAY Properties And Methods
// let names = ['john', 'bobo', 'betty', 'olga', 'ben'];

// // length - how many elements in an array
// console.log(names.length);

// // find the last elements in an array
// console.log(names[names.length - 1]);

// // concat - combine multiple arrays
// const lastNames = ['pepper', 'onion', 'banana'];
// const allNames = names.concat(lastNames);
// console.log(allNames);

// // reverse - change the order of the elements in an array
// console.log(allNames.reverse());

// // unshift - inserts new elements at the start of an array
// allNames.unshift('cindy');
// allNames.unshift("Jouns");
// console.log(allNames);

// // shift - removes elements at the start of an array
// // "Jouns", "cindy", "banana", "onion", "pepper", "ben", "olga", "betty", "bobo", "john" ---> "onion", "pepper", "ben", "olga", "betty", "bobo", "john"
// allNames.shift();
// allNames.shift();
// allNames.shift();
// console.log(allNames);

// // push - inserts new elements at the end of an array
// allNames.push('cindy');
// console.log(allNames);

// // pop - removes elements at the end of an array
// allNames.pop();
// allNames.pop();
// allNames.pop();
// console.log(allNames);

// // splice - mutates original array. Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
// // splice (indexNo. , deleteCount#)
// const specificNames = allNames.splice(0, 2);
// console.log(specificNames);
// console.log(allNames);

// ARRAYS and for loop

// const names = ["anna", "susy", "bob"];
// const lastNames = "shakeandbake";
// let newArray = [];

// // for loop
// // i is variable and assign 0 (index) as value

// for (let i = 0; i < names.length; i++) {
//   console.log(i);
//   console.log(names[i]);
//   // method 1 - calculation
//     // newArray.push(`${names[i]} ${lastNames}`);
//   //method 2 - another variable
//   const fullName = `${names[i]} ${lastNames}`;
//   newArray.push(fullName);
// }

// console.log(names);
// console.log(newArray);

// FUNCTIONS, return, if, arrays, for loop

// const gas = [20, 40, 100, 30];
// const food = [10, 40, 50];

// function calculateTotal(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   if (total > 100) {
//     console.log('You spend too much!');
//     return total;
//   }
//   console.log('Good job! Less than 100');
//   return total;
// }

// // arr === gas/food
// // calculateTotal(gas);
// // calculateTotal(food);

// const gasTotal = calculateTotal(gas);
// const foodTotal = calculateTotal(food);
// const randomTotal = calculateTotal([200, 4000, 700, 1]);

// // objects
// console.log({
//   gas: gasTotal,
//   food: foodTotal,
//   random: randomTotal,
// });


// REFERENCE VS VALUE
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null
// Arrays, Functions, Objects = object
// typeof

// when assigning primitive data type value to a variable, any change is made firectly to that value, without affecting original value

// when assigning non-primitive data type value to a variable is done by reference, any change will affect all the references.


