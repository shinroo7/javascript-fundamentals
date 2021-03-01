# JavaScript
## Helper Methods
- document.write('hello world');
- alert('hello world'); 
- console.log('hello world');

console.log() is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user (debug). 

Ref: https://www.freecodecamp.org/news/how-to-use-the-javascript-console-going-beyond-console-log-5128af9d573b/


Code Example
```
document.write('hello world')
alert("hello world")
console.log("hello world");

// only show object {}
document.write({name:'John'});
alert({ name: "John" });
console.log({ name: "John" });
```

## Statements 
- sets of instructions (communicate with the computer)

Code Example
```
// this is console statement
console.log("hello world");
console.log("hello people");
console.log("hello my friends");
console.log("hello family");
```

## Variable(s)
- Most Basic Building Block
- Variables - Store, Access, Modify === value
- Declare, Assignment Operator, Assign Value
- Assign value later, modify existing

Code Example
```
let name = 'john shrimp taco VI';
console.log(name);
// some code here
console.log(name);
// some code here
console.log(name);
```

Code Example
```
// assign variable(s) to the value. 
// name is rewrite with latter value

let name = 'john shrimp taco VI';
let address, zip, state;
address = "101 Main Street";
zip = "60612";
state = "CA";
name = "naked burrito";
console.log(address, zip, state);
console.log(name);
```

### Variable Naming Rules
- Variable(s) can contain digits, letters, underscore, $, but MUST start with letter, $ or _
- no key word (i.e. let) and cannot start with number
- case sensitive - fullname vs Fullname are different
- camelCase or underscore

Code Example
```
let random123_$ = "random";
console.log(random123_$);

let full_name = "full name";
console.log(full_name);
```

