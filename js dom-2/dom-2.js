// TextContent And NodeValue
// GetAttribute(), SetAttribute()
// ClassList And ClassName
// CreateElement
// InsertBefore
// ReplaceChild
// Prepend InnerText
// Remove And RemoveChild
// InnerHTML And TextContent
// Change CSS With Style Propert

// 01. nodeValue - need to take extra steps to get proper value & textContent - easier to get text content

// const item = document.getElementById('special'); //node object

// const value = item.nodeValue;
// console.log(value); // null

// const value = item.firstChild.nodeValue;
// console.log(value); // console print: this is special content

// console.log(item.childNodes[0].nodeValue);  // console print: this is special content

// console.log(item.firstChild.nodeValue);  // console print: this is special content

// const easyValue = item.textContent;
// console.log(easyValue); // console print: this is special content

// 02. GetAttribute(), SetAttribute()

// const first = document.querySelector('.first');
// const classValue = first.getAttribute('class');
// console.log(classValue); // console print: first

// const links = document.querySelectorAll('.first'); // any item with a class named first
// console.log(links);

// const first = document.querySelector('.first');
// const idValue = first.getAttribute('id');
// console.log(idValue); // console print: special

// const link = document.getElementById('link');
// const showLink = link.getAttribute('href');
// console.log(showLink); // console print: first.html

// add attribute(class or id) to an element
// const last = link.nextElementSibling;
// last.setAttribute('class', 'first');
// last.textContent = 'i also have a class of first';
// console.log(last); // console print: <li class="first">...</li>

// 03. ClassName and ClassList
// ClassName - overwrite the previous one when adding more than one class
// ClassList - not overwriting when there are multiple classes

// const first = document.getElementById('first');
// const second = document.getElementById('second');
// const third = document.getElementById('third');

// const classValue = first.className;
// console.log(classValue); // console print: colors

// second.className = 'colors';
// second.className = 'colors text'; //add multiple classes

// third.classList.add('colors');
// third.classList.add('text');
// OR
// third.classList.add('text', 'colors');
// third.classList.remove('text');

// // check if you have a class
// let result = third.classList.contains('colors');
// if (result) {
//     console.log('Yes, I am here');
// } else {
//     console.log('No found');
// }

// const classValue = third.classList;
// console.log(classValue);

// 04. CreateElement
// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// const result = document.querySelector('#result');

// // create empty element
// const bodyDiv = document.createElement('div');

// // create text node
// const text = document.createTextNode('a simple body div');
// bodyDiv.appendChild(text);
// document.body.appendChild(bodyDiv);
// // Inspect --> Elements: <div>a simple body div</div> be added in html body

// const heading = document.createElement('h2');
// const headingText = document.createTextNode('dynamic heading');
// heading.appendChild(headingText);
// heading.classList.add('blue');

// result.appendChild(heading);
// console.log(result.children);
// Inspect --> Elements: <h2 class="blue">dynamic heading</h2> be added in <div id="result">

// 04-1. InsertBefore
// insertBefore('element','location'); - before which element you want to insert a dynamic element

// const result = document.querySelector("#result");
// const first = document.querySelector(".red");

// // create empty element
// const bodyDiv = document.createElement("div");

// // create text node
// const text = document.createTextNode("a simple body div");
// bodyDiv.appendChild(text);
// document.body.insertBefore(bodyDiv, result);
// // insert "a simple body div" before "i'm the child of result"

// // result element
// const heading = document.createElement("h2");
// const headingText = document.createTextNode("dynamic heading");
// heading.appendChild(headingText);
// heading.classList.add("blue");

// result.insertBefore(heading, first);
// // insert heading ("dynamic heading") before first ("i'm the child of result")

// console.log(result.children);

// 04-2. ReplaceChild
// replaceChild('new','old');

// const result = document.querySelector("#result");

// const bodyDiv = document.createElement("div");
// const text = document.createTextNode("a simple body div");
// bodyDiv.appendChild(text);
// document.body.insertBefore(bodyDiv, result);

// // replace bodyDiv
// const smallHeading = document.createElement('h6');
// const smallText = document.createTextNode("i'm small heading");
// smallHeading.classList.add("red");
// smallHeading.appendChild(smallText);
// document.body.replaceChild(smallHeading, bodyDiv);

// 05. PREPEND & INNERTEXT

// const heading = document.createElement('h2');
// heading.innerText = `i am a dynamic heading`; // assign text value
// document.body.prepend(heading); // allocate the element before the original element

// 06. REMOVE & REMOVECHILD

// const result = document.querySelector('#result');
// // result.remove(); // remove the div with id result

// const heading = result.querySelector('h1'); // assign the value of h1 in the div to heading
// result.removeChild(heading);
// console.log(heading);

// 07. InnerHTML And TextContent
// textContent can only pass text value, innerHTML can include the structure (elements, class, id, etc.)

// const list = document.getElementById('first');
// const div = document.getElementById('second');
// const item = document.querySelector('.item');

// console.log(div.textContent); // text value
// console.log(list.innerHTML); // include whole element structure
// console.log(list.textContent); // text value

// // add new element
// const randomVar = 'random value';

// const ul = document.createElement('ul');
// ul.innerHTML = `<li class="item">${randomVar}</li>
//         <li>list item</li> <li>list item</li>`;
// document.body.appendChild(ul);

// div.textContent = `<li class="item">${randomVar}</li>
//         <li>list item</li> <li>list item</li>`;
// // shows <li class="item">${randomVar}</li> <li>list item</li> <li>list item</li>

// 08. Change CSS With Style Propert

// const random = document.querySelector('.random');

// console.log(random.style); // all the css properties

// add css one by one

// random.style.backgroudColor = "blue";
// random.style.color = "yellow";
// random.style.fontSize = '3rem';
// random.style.textTransform = 'capitalize';

// OR add it by add class
// random.classList.add('title');
