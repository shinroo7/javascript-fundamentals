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


