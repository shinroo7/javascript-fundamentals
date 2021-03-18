### nodeValue & textContent

get same results, the content of the text

- nodeValue: need to take extra steps to get proper value 
- textContent: easier to get text content

```
const item = document.getElementById('special'); //node object

const value = item.nodeValue;
console.log(value);
// null

const value = item.firstChild.nodeValue;
console.log(value); 
// console print: this is special content

console.log(item.childNodes[0].nodeValue);  
// console print: this is special content

console.log(item.firstChild.nodeValue);  
// console print: this is special content
```
```
const easyValue = item.textContent;
console.log(easyValue); 
// console print: this is special content
```

### GetAttribute(), SetAttribute() - class/id

```
const first = document.querySelector('.first');
const classValue = first.getAttribute('class');

console.log(classValue); 
// console print: first
```
```
const links = document.querySelectorAll('.first'); // any item with a class named first

console.log(links);
```
```
const first = document.querySelector('.first');
const idValue = first.getAttribute('id');

console.log(idValue); 
// console print: special
```
```
const link = document.getElementById('link');
const showLink = link.getAttribute('href');

console.log(showLink); 
// console print: first.html
```
```
// add attribute(class or id) to an element
const last = link.nextElementSibling;
last.setAttribute('class', 'first');
last.textContent = 'i also have a class of first';

console.log(last); 
// console print: <li class="first">...</li>
```

### ClassName and ClassList

- ClassName - overwrite the previous one when adding more than one class 
- ClassList - not overwriting when there are multiple classes

```
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const classValue = first.className;
console.log(classValue); 
// console print: colors

second.className = 'colors'; 
//dynamically add class to h1 with id second

second.className = 'colors text'; 
//add multiple classes
```
```
third.classList.add('colors');
third.classList.add('text');

// OR

third.classList.add('text', 'colors');

third.classList.remove('text');
```
```
// check if you have a class

let result = third.classList.contains('colors');

if (result) {
    console.log('Yes, I am here');
} else {
    console.log('No found');
}

const classValue = third.classList;
console.log(classValue);
```
