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
```
```
console.log(text.charAt(5)); 

// string's index start at 0

console.log(text.charAt(text.length - 1)); 

//lenght might change, can use this formula to find the last character
```
```
console.log(text.indexOf('m')); 

//JS is case sensitive, if the indexOf doesn't find the match one, it will return -1. If there are more than one same character, it returns the first one.
```
```
console.log(text.trim()); 

//remove the white spaces in the string

console.log(text.startsWith('michael')); 

// a space and uppercase don't match the condition, then it returns false

console.log(text.trim().toLowerCase().startsWith('michael')); 

// trim remove the space and toLowerCase changes the M to m, startsWith find the same condition, it returns true.
```
```
console.log(text.includes('ae')); 

//find the match characters and return true/false

console.log(text.slice(3, 6)); 

//return a section of a string. Start from index 3 character and end at index 5.

console.log(text.slice(-3)); 

//return a section of a string starting from the end. EX. -3 shows the last 3 characters of Jordan -- 'dan' 
```

```
const person = {
    name: 'Michael', //property
    greeting() {
        // method
        console.log("Hey, I'm Michael");
    },
};

console.log(person);
console.log(person.name);
person.greeting();
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

### Array Properties And Methods

```
let names = ['john', 'bobo', 'betty', 'olga', 'ben'];
```

- length - how many elements in an array
```
console.log(names.length);
```

- find the last elements in an array
```
console.log(names[names.length - 1]);
```

- concat - combine multiple arrays
```
const lastNames = ['pepper', 'onion', 'banana'];
const allNames = names.concat(lastNames);
console.log(allNames);
```

- reverse - change the order of the elements in an array
```
console.log(allNames.reverse());
```

- unshift - inserts new elements at the start of an array
```
allNames.unshift('cindy')
allNames.unshift("Jouns");
console.log(allNames);
```

- shift - removes elements at the start of an array
```
allNames.shift();
allNames.shift();
allNames.shift();
console.log(allNames);

// console log print: "Jouns", "cindy", "banana", "onion", "pepper", "ben", "olga", "betty", "bobo", "john" ---> "onion", "pepper", "ben", "olga", "betty", "bobo", "john"
```

- push - inserts new elements at the end of an array
```
allNames.push('cindy');
console.log(allNames);
```

- pop - removes elements at the end of an array
```
allNames.pop();
allNames.pop();
allNames.pop();
console.log(allNames);
```

- splice - mutates original array. Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
- splice (indexNo. , deleteCount#)
```
const specificNames = allNames.splice(0, 2);
console.log(specificNames);
console.log(allNames);
```

### Arrays and for loop

```
const names = ["anna", "susy", "bob"];
const lastNames = "shakeandbake";
let newArray = [];

// for loop
// i is variable and assign 0 (index) as value

for (let i = 0; i < names.length; i++) {
  console.log(i);
  console.log(names[i]);
  
  // method 1 - calculation

     newArray.push(`${names[i]} ${lastNames}`);

  //method 2 - another variable

  const fullName = `${names[i]} ${lastNames}`;
  newArray.push(fullName); 
}

console.log(names);
console.log(newArray);
```

### Functions, return, if, arrays, for loop

```
const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
      console.log('You spend too much!');
      return total; // need to add return total here to avoid repetitive message
  }
  console.log('Good job! Less than 100');
  return total;
}

// arr === gas/food
// calculateTotal(gas);
// calculateTotal(food);

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000, 700, 1]);

// objects
console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});
```

Console log print:
```
You spend too much!  // gasTotal
Good job! Less than 100  // foodTotal
You spend too much!  // randomTotal
{gas: 190, food: 100, random: 4901}
```

### REFERENCE VS VALUE

- Primitive Data Types: String, Number, Symbol, Boolean, Undefined, Null
- Non- primitivve data type: Arrays, Functions, Objects = object

Can use ```typeof``` to find out the data type.


When assigning primitive data type value to a variable, any change is made firectly to that value, without affecting original value

```
// console log print 
// the first number is 1
// the second number is 7

const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first number is ${number}`);
console.log(`the second number is ${number2}`);
```

When assigning non-primitive data type value to a variable is done by reference, any change will affect all the references.

```
// * both person and person2 change to anna. Because the data type is non-primitive ({} ---> object)
// console log print 
// the first person is anna
// the second person is anna

// * by using let person2 = {...person} can prevent the effect of all reference
// console log print 
// the first person is bob
// the second person is anna

let person = {name: 'bob'};
let person2 = person; // *
person2.name = 'anna'; 
console.log(`the first person is ${person.name}`);
console.log(`the second person is ${person2.name}`);
```

### NULL AND UNDEFINED

Both represent "no value"

- undefined - "javascript can not find value for this"
  - variable without value
  - missing function arguments
  - missing object properties

- null - "developer sets the value"

```
let number = 20 + null; // 20 + 0
console.log(number);

let number2 = 20 + undefined; // 20 + undefined
console.log(number2);

// console print
// 20 --- null
// NaN --- undefined
```

### TRUTHY AND FALSY

Falsy: "", '', ``, 0, -0, NaN, false, null, undefined. Others are truthy.

```
const bool1 = true;
const bool2 = 2 > 1;

const text = `hello`;

if (text) {
    console.log('hey the value is truthy');
} else {
    console.log('hey the value is falsy');
}

// console print
// hey the value is truthy  <-- when text is any but falsy selection
// hey the value is falsy  <-- when text is "", '', ``, 0, -0, NaN, false, null, undefined
```
```
if (bool1) {
    console.log(`Hey it works!`);
}
if (bool2) {
    console.log(`Hey it also works!`);
}
```

### TERNARY OPERATOR 

- unary operator -  typeof
```
let text = 'some text';
console.log(typeof text); //operand
```

- binary operator - assignment
```
let number = 3;
let number2 = 2 + 5;
```

- ternary operator - option to shorten the amount of code

```condition ? (runs if true) : (runs if false)```

```
const value = 1 < 0;

// ternary operator:
value ? console.log('value is true') : console.log('value is false');

// usual way:
if (value) {
    console.log('value is true');
} else {
    console.log("value is false");
}
```