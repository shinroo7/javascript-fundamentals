## POWERFULL ARRAY METHODS

- forEach, map, filter, find, reduce
- Iterate over array - no for loop required
- Accept CALLBACK function as an argument, calls callback against each item in a array. Reference Item in the CALLBACK paramater.

```
const numbers = [0, 1, 2, 3, 4];

// show all numbers

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

### 01. forEach
 
- Does not return new array.

- Pass values from objects directly by setting up an ANONYMOUS function or pass it as a reference (CALLBACK function).

```
const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" }
];

// CALLBACK function

function showPerson(person) {
  console.log(person.position.toUpperCase());
}
people.forEach(showPerson); 
//don't invoke the CALLBACK function
```

```
// ANONYMOUS function
people.forEach(function(item){
  console.log(item.position.toUpperCase());
});

Console Print (both):
DEVELOPER
DESIGNER
THE BOSS
```

### 02. MAP - use a lot in REACT

- does return a new array
- does not change size of oringinal array
- uses values from oringinal array when making new one
- function by default returns undefined, if no value is assigned.

```
const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" }
];

// callback function
const ages = people.map(function () {});
console.log(ages);

// console print
[undefined, undefined, undefined]
```
```
// callback function
const ages = people.map(function (person) {
    console.log(person);
    return 'hello world';
});

// console print
{name: "bob", age: 20, position: "developer"}
{name: "peter", age: 25, position: "designer"}
{name: "susy", age: 30, position: "the boss"}

console.log(ages);

// console print
["hello world", "hello world", "hello world"]
```
```
// callback function

const ages = people.map(function (person) {
    return person.age + 20;
});

// console print
[40, 45, 50]
```
```
// callback function + DOM

const names = people.map(function (person) {
    return `<h1>${person.name}</h1>`;
});

document.body.innerHTML = names.join('');

console.log(names);
```

### FILTER

- does return a new array
- can manipulate the size of new array
- returns based on condition (if...), if none is matched, the array stays empty

```
const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
];

const youngPeople = people.filter(function(person){
    return person.age <= 25;
})

const developers = people.filter(function (person) {
  return person.position === 'developer';
});

console.log(youngPeople); // new array includes bob and peter
console.log(developers); // new array includes bob
```



