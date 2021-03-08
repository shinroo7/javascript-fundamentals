## String 
### Properties And Methods +()

wrapper String Object, don't need to memorise methods

```
let text = ' Michael Jordan';
let result = text.length;
console.log(text.length);

// methods
console.log(text.toLowerCase());
console.log(text.toUpperCase());

console.log(text.charAt(5)); 
// string's index start at 0

console.log(text.charAt(text.length - 1)); 
//lenght might change, can use this formula to find the last character

console.log(text.indexOf('m')); 
//JS is case sensitive, if the indexOf doesn't find the match one, it will return -1. If there are more than one same character, it returns the first one.

console.log(text.trim()); 
//remove the white spaces in the string

console.log(text.startsWith('michael')); 
// a space and uppercase don't match the condition, then it returns false

console.log(text.trim().toLowerCase().startsWith('michael')); 
// trim remove the space and toLowerCase changes the M to m, startsWith find the same condition, it returns true.

console.log(text.includes('ae')); 
//find the match characters and return true/false

console.log(text.slice(3, 6)); 
//return a section of a string. Start from index 3 character and end at index 5.

console.log(text.slice(-3)); 
//return a section of a string starting from the end. EX. -3 shows the last 3 characters of Jordan -- 'dan' 
```

```
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
```

### Template Literals - ES6+

- Backtick characters `` - above tab (left from one), easier and simpler
- Interpolation ${} - insert expression(value)

```
const name = 'john';
const age = 25;

// general
const sentence = "Hey it's " + name + ' and he is ' + age + ' years old';

console.log(sentence);

// template literals
const value = `Hey it's ${name} and he is ${age} years old. And here is some simple math ${
    4 + 10
}`;

console.log(value);
```







```
```