# DOM

## DOM - General Concepts

- similar to CSS
- Select the element or group of elements that you want to affect
- Decide the effect you want to apply to the selection

```
document.body.style.backgroundColor = 'blue';
document.body.style.color = 'yellow';
document.getElementById('btn').style.color = 'red';

// assign to a variable to reduce repetitive coding action (document...), save time.
const element = document.getElementById("element");

// do something
document.querySelector('element');
```
```
// (global) window object
console.log(window);

// returns a node object or a node list, which is an arraylike object

const btn = document.getElementById('btn');
const name = btn.nodeName;
const css = btn.style;

console.log(btn);
console.log(name);
console.log(css);
```

## WINDOW And Document Overview​

- window object = browser api - current tab
- document - within the window object
- console.dir ~= console.log

## SELECT ELEMENTS 

### GetElementById

```
getElementById('element');

const h1 = document.getElementById('title');
h1.style.color = 'red';

// time-consuming
document.getElementById('btn').style.backgroundColor = 'blue';
document.getElementById("btn").style.color = "white";

// time-saving: benefit of using variable
const btn = document.getElementById("btn");

btn.style.backgroundColor = 'blue';
btn.style.color = "white";
```

### Get Elements By Tag Name

- node-list = array-like Object
- index, length property but not array methods
- getElementsByTagName('tagname');

```
// headings[0] is the first h2 (index = 0)
const headings = document.getElementsByTagName("h2");

headings[0].style.color = 'red';

console.log(headings.length);

// it is dynamic, if the previous one is gone the next one will take over the setting. Ex. if 'hello world' is deleted, 'hello people' will become red.
```
```
// use forEach to get items

const items = document.getElementsByTagName('li');

items.forEach(function(item) {
  console.log(item);
})

// console print:
// Uncaught TypeError: items.forEach is not a function

// Because it's not an array, just array-like Object, so forEach can't be used here.


// instead of forEach - ES6: transfer node-list to array

const betterItems = [...items];

betterItems.forEach(function(item) {
    console.log(item);
})
```
```
// use index to choose the element
items[2].style.color = "orange";
```
```
// Comparison
console.log(items); // node-list
console.log(betterItems); // array

// console print:
// HTMLCollection(5) [li, li, li, li, li]
// (5) [li, li, li, li, li]
```

### Get Elements By Class Name​

- getElementsByClassName('classname');
- select multiple elements by class
- node-list = array-like Object
- index, length property but not array methods

```
const listItems = document.getElementsByClassName('special');
console.log(listItems);

// change text color for banana to orange, use index number
listItems[1].style.color = 'orange';
```

### QuerySelector And QuerySelectorAll

- querySelector('any css'); - selects single
- querySelectorAll('any css'); - selects all, can use forEach
- very powerful because you can pass css to it

```
const result = document.querySelector('#result'); // id(#), class(.)
result.style.backgroundColor = 'tomato';

const item = document.querySelector('.special'); 
console.log(item); 
// only show the 1st one (single), if want to select all, need to use querySelectorAll('any css')
```
```
// select last element of the list
const lastItem = document.querySelector('li:last-child');
console.log(lastItem);
```
```
// querySelectorAll & forEach
const list = document.querySelectorAll('.special');

list.forEach(function(item) {
    console.log(item);
    item.style.color = 'yellow'; // elements with special class change to yellow
})
```

### Navigate The Dom - Children

- childNodes - returns all childNodes including whitespace which is treated as a text node

```
const result = document.querySelector('#result');
const allChildren = result.childNodes;
console.log(allChildren);
// console print: 11 items, cuz it includes the whitespace

// children - 5 items
const children = result.children;
console.log(children);

// firstChild & lastChild
console.log(result.firstChild);
console.log(result.lastChild);
```

### Navigate The Dom - Parent Element​

```
const heading = document.querySelector('h2');
const parent = heading.parentElement;
parent.style.color = 'red'; // h2 and h3
```
```
console.log(heading); 
// h2

console.log(heading.parentElement); 
// div with class=second

console.log(heading.parentElement.parentElement); 
// div with id=result

console.log(heading.parentElement.parentElement.parentElement); 
// body

console.log(heading.parentElement.parentElement.parentElement.parentElement); 
// html

console.log(heading.parentElement.parentElement.parentElement.parentElement.parentElement); 
// null (no more parent element)
```

### Navigate The Dom - NextSibling, PrevSibling

```
// nextSibling
const first = document.querySelector('.first');
const second = first.nextSibling;
const second2 = first.nextSibling.nextSibling;

console.log(second); // #text (whitespace)
console.log(second2); // list item 2
```
```
// change color of list item 2
const second2 = (first.nextSibling.nextSibling.style.color = "tomato");
```
```
// previousSibling
const last = document.querySelector("#last");
const third = last.previousSibling.previousSibling;
console.log(third); // list item 3
console.log(last.nextSibling); // #text (whitespace)
console.log(last.nextSibling.nextSibling); // null
```

### Navigate The Dom - Next/Prev Element Sibling

- skip the whitespace to next element

```
const first = document.querySelector('.first');
first.nextElementSibling.style.color = 'red';

const last = document.querySelector("#last");
```
