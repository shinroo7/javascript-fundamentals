## Keywords: LET vs CONST vs VAR

- using var - can re-assign

'other values' will replace the 'some value'

```
var value = "some value";
value = "other values";
```

- using let - can re-assign

'ross' will replace the 'john'

```
let name = "john";
name = "ross";
```

- using const (CONSTANT) - can't re-assign

    -- 'Bing' doesn't replace 'jordan'

    -- always need to assign a value by using const, the value can't be empty

Code Example
```
const lastName = "jordan";

// lastName = "Bing"; <- not work, has an error message

console.log(value);
console.log(name);
console.log(lastName);
```

## Quatation Marks

- "" or '' both can do, just don't mix them

Code Example
```
const name = "freya";
const name = 'freya';
```

- can use \ to aviod error or just use ""

Code Example
```
const name = 'freya\'s dress is pretty';
const name = "freya's dress is pretty";

console.log(name);
```

## String Concatenation - combine string values

note: `` - backticks (template strings) easier option.

Code Example
```
const name = "freya";
const lastName = 'braveandstrong';
let fullname;

console.log('Hello there the full name is : ' + name + ' ' + lastName);
```

```
const name = 'freya';
const lastName = 'braveandstrong';
let fullname = name + ' ' + lastName;

console.log('Hello there the full name is : ' + fullname);
```

```
const website = 'google';
const url = 'https://www.' + website + '.com';
console.log(url);
```


## Numbers

- Loosely Typed = don't declare type. 

You don't need to specify what data type is stored in value (string, number, etc.). But in Java, you need to set the value to be string or number (int or deci).

Code Example
```
let trousers = 1.341716;
trousers = 'amazing colour';
console.log(trousers);
```

```
// in the console, number is shown in blue, string (''/"") is in black

const number = 77;
const number2 = 2.3456; 
const number3 = '2.3456';
console.log(number);
console.log(number2);
console.log(number3);
```

```
// use number to the calculation

const add = number + number2;
const sub = number - number2;
const mult = number * number2;
const div = number / number2;

console.log(add);
console.log(sub);
console.log(mult);
console.log(div);
```

## Numbers - Additional Features​

- +=, -=, /=, *=, ++, --

```
let number = 77;
number += 3;
number += 3;
number += 3;
number += 3;
number -= 3;
number++;
number--;
number--;
console.log(number);
```

- Modulus (%) operator returns the remainder after integer division.

```
const slices = 12;
const students = 7;
const amount = slices / students;
const amount2 = slices % students;

console.log(amount);
console.log(amount2);
```

- In math, there is precedence rules, can use parenthesis to avoid the mistake.

```
const random = 3+4+5*10;
const random2 = (3+4+5)*10;

console.log(random);
console.log(random2);
```

## Implicit Type Conversion

- js can link string with string, can calculate number with number, but can it calculate the strings?

```
const name = 'freya';
const lastName = 'braveandstrong';
const fullname = name + ' ' + lastName;

console.log(fullname);

const number = 77;
const number2 = 2.3456; 
const result = number + number2;
console.log(result);

const value = name - lastName;
console.log(value);

// value shows NaN(not a number) in console, however...
```

- Even when you set the number to be string (which is not calculatable), js will do you a favour by conversing them to number so the formula can be performed. 
- You can use -, /, *, but when you use +, it will show 2 strings combination: 1023.

```
let number3 = '10';
let number4 = '23';
const result2 = number3 + number4;
console.log(result2);
```

Example 
```
<!-- HTML -->
<form class="form">
        <label for="amount">Enter Number</label>
        <input type="number" id="amount">
        <button type="submit">Submit</button>
</form>

// JS
const randomNumber = 13;
document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();
    let value = document.getElementById('amount').value;
    value = parseInt(value);
    console.log('Input Value Type');
    console.log(value);
    console.log('Sum of Two Values');
    console.log(randomNumber + value);
});
```

## Data Types - 7 total

- Primitive - String, Number, Boolean (true/false), Null, Undefined, Symbol(ES6)
- Object - Arrays, Functions, Objects (Crucial)
- typeof - operator (typeof variable) (typeof value)

String
```
const text = 'some text';
```

Number
```
const number = 77;
```

Boolean
```
let value1 = true;
let value2 = false;
```

Null - in the console, it shows object and it has been a bug since the beginning of js.
```
const result = null;
```

Undefined (not assign value yet), 
```
let name;
```
```
console.log(typeof text);
console.log(typeof number);
console.log(typeof value1);
console.log(typeof value2);
console.log(typeof null);
console.log(typeof name);
```

## Arrays, Functions, Objects
### Arrays

- store a list of items by using [], and it's 0 index based which means the first item's index is 0.

```
const friend1 = 'Serene';
const friend2 = "Celine";
const friend3 = "Karen";
const friend4 = "Cindy";

const friends = ['Serene','Celine','Karen','Cindy',77,null, true];

console.log(friends);
```

- assign value to another variable
```
let bestFriend = friends[3];
console.log(bestFriend);
```

- change the value
```
friends[4] = 'Joey';
console.log(friends);
console.log(friends[4]);
```

### Functions


```

```

### Objects


```

```





