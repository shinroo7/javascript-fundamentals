## Conditional Statements

### Basic

- if (condition) {do somthing}..else {do other things}..

// >, <, >=, <=, ==, ===, !=, !==

```
const value = 2 > 1;
const value2 = 3 > 4;

// if the condition is true then print hello truth, otherwise hello lier.

if (value2) {
    console.log('hello truth');
} else {
    console.log('hello lier');
}
```

### Comparison Operators

- else if

```
const num1 = 6;
const num2 = 6;
const result = num1 >= num2;

if (num1 > num2) {
    console.log('first number is bigger than second');
} else if (result) {
    console.log('first number equal to second');
}
else {
    console.log('second number is bigger than first');
}
```

- ! means opposite

```
const value = true;

if (value) {
    console.log('value is true');
}

// !value = the opposite of true, which is false. So the console will print out the log.
const value = false;

if (!value) {
    console.log('value is false');
}
```

- ==/!= checks only value, ===/!== checks value and type

```
// value and type are both equal, value and value2 are both true.
const num1 = 6;
const num2 = 6;

const value = num1 == num2;
const value2 = num1 === num2;

console.log(value);
console.log(value2);

// value is equal (6), but type is different (one number one string). value is true and value2 is false.
const num1 = 6;
const num2 = '6';

const value = num1 == num2;
const value2 = num1 === num2;

console.log(value);
console.log(value2);

// value is not equal, type is not different, value is false and value2 is true.
const num1 = 6;
const num2 = '6';

const value = num1 != num2;
const value2 = num1 !== num2;

console.log(value);
console.log(value2);
```

### Logical Operators - (|| - OR), (&& - AND), !

- || - OR, match one of the condition and it's true

```
const name = 'bob';
const age = 26;

if (name == 'bob' || age === 24) {
    console.log('hello my friend');
} else {
    console.log('who are you? please introduce yourself.');
}
```

- && - AND, need to match all the condition and it's true or it's false

```
const name = "bob";
const age = 26;

if (name == "bob" && age === 24) {
  console.log("hello my friend");
} else {
  console.log("who are you? please introduce yourself.");
}
```

## Switch Statement

### all if

```
const dice = 1;

if (dice === 1) {
    console.log('you got one');
}
if (dice === 2) {
  console.log("you got two");
}
if (dice < 1 || dice > 6) {
  console.log("you did not roll the dice");
}
```

### else if

```
const dice = 1;

if (dice === 1) {
    console.log('you got one');
} else if (dice === 2) {
  console.log("you got two");
} else (dice < 1 || dice > 6) {
  console.log("you did not roll the dice");
}
```

### switch

```
const dice = 4;

switch (dice) {
  case 1:
    console.log("you got one");
    break;
  case 2:
    console.log("you got two");
    break;
  case 3:
    console.log("you got three");
    break;
    default:
        console.log('you did not roll the dice');
}
```

## Loops

Repeatedly run a block of code while condition is true

Note: TURN OFF AUTOSAVE to avoid the loop crash the program

```
// const amount = 10; --- can't use const here, when reassigning new value to the variable, there will be an error message.

let amount = 10;

while (amount > 0) {
  console.log("I have " + amount + " dollars and I'm going to the mall");
  amount--;
}
```

### Do While Loop

- code block first, condition second
- runs at least once (even if the condition doesn't match, i.e. money > 10)

```
let money = 0;

do {
  console.log("You have " + money + " dollars");
  money++;
} while (money < 10);
```

### For Loop

```
let i;
for (i = 0; i < 10; i++) {
    console.log('and the number is : ' + i);
}

OR

for (let number = 11; number >= 0; number--) {
  console.log("and the number is : " + number);
}
```
