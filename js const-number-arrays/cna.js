// Const, Let, Var
// Quatation Marks
// String Concatenation
// Number Basics
// Numbers - Additional Features​
// Implicit Type Conversion
// Data Types
// Arrays
// Functions - Declare, Invoke​
// Functions - Parameters, Arguments​
// Functions - Return
// Functions - Expressions​
// Objects


// 01. Keywords: LET vs CONST vs VAR

// using var - can re-assign
// var value = "some value";
// value = "other values";

// using let - can re-assign
// let name = "john";
// name = "ross";

// using const (CONSTANT) - can't re-assign
// always need to assign a value by using const, the value can't be empty
// const lastName = "jordan";
// lastName = "Bing"; <- not work, has an error message

// console.log(value);
// console.log(name);
// console.log(lastName);


// 02. Quatation Marks: "" or '' both can do, just don't mix them

// const name = "freya";
// const name = 'freya';

// can use \ to aviod error or just use ""
// const name = 'freya\'s dress is pretty';
// const name = "freya's dress is pretty";
// console.log(name);


// 03. String Concatenation - combine string values
// `` - backticks (template strings) easier option.

// const name = "freya";
// const lastName = 'braveandstrong';
// let fullname;

// console.log('Hello there the full name is : ' + name + ' ' + lastName);

// const name = 'freya';
// const lastName = 'braveandstrong';
// let fullname = name + ' ' + lastName;

// console.log('Hello there the full name is : ' + fullname );

// const website = 'google';
// const url = 'https://www.' + website + '.com';
// console.log(url);


// 04. Numbers
// 04-01. Loosely Typed = don't declare type. You don't need to specify what data type is stored in value (string, number, etc.). But in Java, you need to set the value to be string or number (int or deci).

// let trousers = 1.341716;
// trousers = 'amazing colour';
// console.log(trousers);
// in the console, number is shown in blue, string (''/"") is in black
// const number = 77;
// const number2 = 2.3456; 
// const number3 = '2.3456';
// console.log(number);
// console.log(number2);
// console.log(number3);

// // use number to the calculation
// const add = number + number2;
// const sub = number - number2;
// const mult = number * number2;
// const div = number / number2;

// console.log(add);
// console.log(sub);
// console.log(mult);
// console.log(div);


// 04-02. +=, -=, /=, *=, ++, --, %

// let number = 77;
// number += 3;
// number += 3;
// number += 3;
// number += 3;
// number -= 3;
// number++;
// number--;
// number--;
// console.log(number);

// Modulus (%) operator returns the remainder after integer division
// const slices = 12;
// const students = 7;
// const amount = slices / students;
// const amount2 = slices % students;

// console.log(amount);
// console.log(amount2);

// in math, there is precedence rules, can use parenthesis to avoid the mistake
// const random = 3+4+5*10;
// const random2 = (3+4+5)*10;

// console.log(random);
// console.log(random2);


// 05. Implicit Type Conversion
// js can link string with string, can calculate number with number, but can it calculate the strings?
// const name = 'freya';
// const lastName = 'braveandstrong';
// const fullname = name + ' ' + lastName;

// console.log(fullname);

// const number = 77;
// const number2 = 2.3456; 
// const result = number + number2;
// console.log(result);

// const value = name - lastName;
// console.log(value);
// value shows NaN(not a number) in console, however...

// even when you set the number to be string (which is not calculatable), js will do you a favour by conversing them to number so the formula can be performed. You can use -, /, *, but when you use +, it will show 2 strings combination: 1023.

// let number3 = '10';
// let number4 = '23';
// const result2 = number3 + number4;
// console.log(result2);

// Example 
// const randomNumber = 13;
// document.querySelector('.form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     let value = document.getElementById('amount').value;
//     value = parseInt(value);
//     console.log('Input Value Type');
//     console.log(value);
//     console.log('Sum of Two Values');
//     console.log(randomNumber + value);
// });


// 06. Data Types - 7 total
// Primitive - String, Number, Boolean (true/false), Null, Undefined, Symbol(ES6)
// Object - Arrays, Functions, Objects (Crucial)
// typeof - operator (typeof variable) (typeof value)

// String
// const text = 'some text';
// // Number
// const number = 77;
// // Boolean
// let value1 = true;
// let value2 = false;
// // Null - in the console, it shows object and it has been a bug since the beginning of js.
// const result = null;
// // Undefined (not assign value yet), 
// let name;

// console.log(typeof text);
// console.log(typeof number);
// console.log(typeof value1);
// console.log(typeof value2);
// console.log(typeof null);
// console.log(typeof name);


// 07. Arrays, Functions, Objects
// 07-1. Arrays - store a list of items by using [], and it's 0 index based which means the first item's index is 0.

// const friend1 = 'Serene';
// const friend2 = "Celine";
// const friend3 = "Karen";
// const friend4 = "Cindy";

// const friends = ['Serene','Celine','Karen','Cindy',77,null, true];

// console.log(friends);

// // assign value to another variable
// let bestFriend = friends[3];
// console.log(bestFriend);

// // change the value
// friends[4] = 'Joey';
// console.log(friends);
// console.log(friends[4]);


// 07-2-1. Functions - declare and then invoke
// when you have repetitive elements in different sections, you can use function to organise them better.
// Example: replace Karen to Joey...

// console.log('Hello there Serene');
// console.log('Hello there Celine');
// console.log('Hello there Karen');
// // come code here...
// console.log('Hello there Serene');
// console.log('Hello there Celine');
// console.log('Hello there Karen');
// // come code here...
// console.log('Hello there Serene');
// console.log('Hello there Celine');
// console.log('Hello there Karen');
// // come code here...

// instead of change the name one by one, you can use function.
// function hello() {
//     // logic
//     console.log("Hello there Serene");
//     console.log("Hello there Celine");
//     console.log("Hello there Joey");
// }

// hello();
// // come code here...
// hello();
// // come code here...
// hello();
// // come code here...


// 07-2-2. Functions - Parameters, Arguments​
// params - when declare/define
// placeholders, local vars (can only use in the function)
// arguments - when invoke/call/run
// use vars/values, multiple params, undefined

// const serene = 'Serene';
// const celine = "Celine";
// const joey = "Joey";

// function greet(name, second) {
//     console.log("Hello there " + name);
//     console.log(second);
// }

// // greet serene
// greet('Serene');
// // greet celine 
// greet('Celine');
// // greet joey
// greet('Joey');
// // greet Celine and Joey, you need to set up the second param to declare(assign) for the second value(joey or 'Joey').
// greet(celine, 'Joey');


// 07-2-3. Functions - Return
// default undefined, shortcuts, ignores after
// all functions by default return undefined
// anything behind the return will be ignore

// const wallHeight = 80;

// function calculate(value) {
//   /* console.log('The value in cm is: ' + value * 2.54 + ' cm'); --- or...
//     const newValue = value * 2.54; */

//   // return newValue;  --- or...
//   return value * 2.54;
//   //   console.log('hello'); --- anything behind return will be ignored
// }

// const width = calculate(100);
// const height = calculate(wallHeight);

// const dimensions = [width, height];
// console.log(dimensions);



// 07-2-4. Functions - Expressions​
// expressions - another way define a function
// create a variable, assign to FUNCTION (not value), use var
// diff - hoisting, use - arrow func (=>), libraries. 

// function definition/declaration
// function addValues(num1, num2) {
//     return num1 + num2;
// }
// const firstValue = addValues(3, 4);
// const secondValue = addValues(12, 34);

// // function expression
// const add = function addValues(num1, num2) {
//   return num1 + num2;
// };

// // many ways to write the values in the array
// const thirdValue = add(5, 6);
// // const values = [firstValue, secondValue, thirdValue];

// // const values = [firstValue, secondValue, 11];

// const values = [firstValue, secondValue, add(5, 6)];

// console.log(values);


// 07-3. Objects - key(property)/value pairs methods
// dot notation --- variable.property

const person = {
    name: "Joey",
    lastName: "Tribiani",
    age: 31,
    education: true,
    married: false,
    sibilings: ["Deena", "Anna", "Mina"],
    /* greeting: function greeting() {
    console.log('Hello my name is Joey');
    } */

  // can omit property/function
    greeting() {
    console.log("Hello my name is Joey");
    },
};
// assign property to a variable
const age = person.age;
console.log(age);

// re-assign a value to the property
person.name = 'Chandler';
console.log(person.name);

console.log(person.sibilings[0]);
person.greeting();
