### GLOBAL SCOPE

- any variable outside code block {} is said to be in Global Scope
- can be access anywhere in the program
- Gotchas: name collisions, modify by mistake

### Situation 1

```
let name = 'bobo';
name = 'peter';

function calculate() {
    // some other code...
    console.log(name); 
    name = 'orange';
}

calculate(); 
// print the previous variable value setting which is peter (not reach orange yet)

console.log(`my name is ${name} and I'm awesome`); 
// print the previous variable value setting which is orange
```

### Situation 2

```
let name = 'bobo';
name = 'peter';

function calculate() {
    // some other code...
    console.log(name); 
    name = 'orange';
}

calculate(); 
// print the previous variable value setting which is peter (not reach orange yet)

if (true) {
  // some other code...
  console.log(name); 
  // print the previous variable value setting which is orange (not reach pants yet)
  name = "pants";
}

console.log(`my name is ${name} and I'm awesome`); 
// print the previous variable value setting which is pants
```

### Situation 3

```
let name = 'bobo';
name = 'peter';

function calculate() {
    // some other code...
    console.log(name); 
    name = 'orange';
    function inner() {
        name = 'inner name value';
        console.log(`this is from inner function ${name}`);
    }
    inner();
}

calculate(); 
// print the previous variable value setting which is peter (not reach orange yet) and the value in inner():this is ...

if (true) {
  // some other code...
  console.log(name); 
  // print the previous variable value setting which is inner name value (not reach pants yet)
  name = "pants";
}

console.log(`my name is ${name} and I'm awesome`); // print the previous variable value setting which is pants
```

### LOCAL SCOPE

- can't be access from outside code blocks ({const, let})
- if - NOT VAR (ES6)

### Situation 1 - keywords: const, let
```
let name = 'bobo';

function calculate() {
const name = 'john'; 
const age = 25;
// variable setting within the {} doesn't affect programe outside {}
}

calculate();  
// invoke the function

console.log(age); 
// Uncaught ReferenceError: age is not defined. You can't reach the variable in the {} from outside

if (true) {
  const name = "john"; 
  // variable setting within the {} doesn't affect programe outside {}
}

console.log(`my name is ${name} and I'm awesome`); 
```

### Situation 2 - no keyword in {}
```
let name = "bobo";

function calculate() {
  const name = "john";
  const age = 25;
  // variable setting within the {} doesn't affect programe outside {}
  becomeGlobal = "global variable";
}
calculate(); 
// invoke the function

console.log(becomeGlobal); 
// No keyword use with the variable, so the value can be reached from outside {}
```

You can also use just {} to set up the local variables.

```
{
    const name = "john";
    const special = 'special';
}
```

### VARIABLE LOOKUP

{} - code block

Javascript check the local variable first then global scope. If we do not set globalNumber (=20) within the function, js will check outside of the function and find the variable globalNumber (=5).

```
const globalNumber = 5;

function add(num1, num2) {
    const globalNumber = 20;
    const result = num1 + num2 + globalNumber;
    return result;
}

console.log(add(3, 4));
```

```
const globalNumber = 5;

function add(num1, num2) {
    const globalNumber = 20;
    const result = num1 + num2 + globalNumber; 

    function multiply() {
        const globalNumber = 100;
        const multiplyResult = result * globalNumber;
        console.log(multiplyResult);
    }

    console.log(multiplyResult); 
    // Error, js only lookup variable outward not inward. So it can't find the multiplyResult anywhere.

    multiply();
    return result;
}

console.log(add(3, 4));
```

### CALLBACK FUNCTIONS, HIGHER ORDER FUNCTIONS , Functions as First Class Objects/Citizens

- Function is to help reduce the repetitive action (code)

- Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)


### Situation 1 - repetitive code

When you want to greet people mornig, afternoon, etc., you will write some repetitive code to start with..

```
function greetMorning(name) {
    const myName = 'john';
    console.log(`Good morning ${name}, my name is ${myName}`);
}
function greetAfternoon(name) {
  const myName = "john";
  console.log(`Good afternoon ${name}, my name is ${myName}`);
}

greetMorning('bobo');
greetAfternoon("Mike");
```

### Example 1 - improvement
- Higher Order Function - accepts another function as an argument or returns another function as a result

- Callback Function - passed to abother function as an argument and excuted inside that function

```
//callback function
function morning() {
    console.log(`Good morning Bobo`);
    return `Good morning Bobo`;
}

// Higher order function
function greet(name, cb) {
  cb(); 
  // can be here or latter, but before the return

  const myName = "john";
  console.log(`${name}, my name is ${myName}`);
}

// ** morning ==> cb, pass a function (morning) to another one (greet(name, cb)). And invoke the callback function in the higher order function by cb().

greet('bobo', morning);
greet("Mike", morning);
```

### EXAMPLE 2 - more callback functions
```
// callback function
function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}
function afternoon(name) {
  return `Good afternoon ${name.repeat(3)}`;
}

// Higher order function
function greet(name, cb) {
  const myName = "john";
  console.log(`${cb(name)}, my name is ${myName}`); 
  //cb() invoke the callback functions
}

// ** morning ==> cb, pass a function (morning) to another one (greet(name, cb)). And invoke the callback function in the higher order function by cb().

greet("bobo", morning);
greet("Mike", afternoon);
```
