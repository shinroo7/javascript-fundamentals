// Events Overview​
// Click Event​
// Function Reference​
// Mouse Events​
// Key Events​
// Event Object​
// CurrentTarget Vs Target​
// Event Bubbling Capturing​
// Event Propogation Example
// Form Submit​
// Local Storage​
// Local Storage With Multiple Values


// 01. select Element --> addEventListener() --> (what event, what to do)
// Function Reference

// const btn = document.querySelector('.btn');
// const heading = document.querySelector('h2');

// // btn.addEventListener('click', function() {
// //     console.log(`hey you clicked me!`);
// // });
// // // when the button is clicked, console prints 'hey you clicked me!'

// btn.addEventListener('click', function() {
//     heading.classList.add('red');
// });
// // when the button is clicked, h2 changes to .red css setting


// 02. Function Reference (callback function)

// const btn = document.querySelector(".btn");
// const heading = document.querySelector("h2");

// function changeColors(){
//     let hasClass = heading.classList.contains('red');
//     if (hasClass) {
//         heading.classList.remove('red');
//     } else {
//         heading.classList.add('red');
//     }
// }

// btn.addEventListener('click', changeColors) // do not invoke


// 03. Mouse Events​
// click - fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - move onto an element
// mouseleave - move out of an element

// const heading = document.querySelector('h1');
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', function() {
//     console.log('you clicked me!');
// });

// btn.addEventListener("mousedown", function () {
//   console.log("down");
// });
// btn.addEventListener("mouseup", function () {
//   console.log("up");
// });

// console print: down --> up --> you clicked me!

// heading.addEventListener('mouseenter', function () {
//   heading.classList.add('blue');
// });

// heading.addEventListener('mouseleave', function () {
//   heading.classList.remove('blue');
// });

// mouse hover to the element and make it change according to the class setting


// 04. KEY events
// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released

// const nameInput = document.querySelector('#name');

// nameInput.addEventListener('keypress', function() {
//   console.log('you pressed a key');
// });

// nameInput.addEventListener("keydown", function () {
//   console.log("you pressed a key");
// });

// nameInput.addEventListener("keyup", function () {
//   // console.dir(nameInput); // find the property
//   console.log(nameInput.value);
// });
// // each time you release the key, you see the value is printed out in console log: asd ---> a, as, asd


// 05. Event Object
// event object argument e, evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour - use a lot in the form

// const heading = document.querySelector('h1');
// const btn = document.querySelector('.btn');
// const link = document.getElementById('link');

// heading.addEventListener("click", function(event) {
//   console.log(event.currentTarget); //console print: <h1>some heading</h1>
//   console.log(this); // keyword 'this' has different functions, will look into it later
// });

// btn.addEventListener("click", function(event) {
//   event.currentTarget.classList.add("blue");
//   console.log(event.type); // console print: click
// });

// // stop going back to the top (default setting) by click the random link
// function someFunc(e) {
//   e.preventDefault();
// };

// link.addEventListener('click', someFunc); // don't invoke, just reference


// 06. CurrentTarget Vs Target​
// currentTarget - always refers to the element to which the event handler has been attached to
// target - indentifies the element on which the event occured

// const btns = document.querySelectorAll('.btn');

// // not change all the button at once, only the clicked one (callback function)
// btns.forEach(function(btn){
//   btn.addEventListener('click', function(e){
//     // console.log(e.currentTarget);
//     // e.currentTarget.style.color = 'green';
//     console.log('target', e.target);
//     console.log('currentTarget', e.currentTarget);
//     e.target.style.color = 'green';
//   });
// });


// 07. Event Bubbling Capturing​
// allows select dynamic elements
// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target (ex. window -> document -> container(div) -> list-items(ul))

// const container = document.querySelector('.container');
// const list = document.querySelector('.list-items');

// function showBubbling(e) {
//   console.log('current target', e.currentTarget);
//   // console.log('target', e.target);
//   // if(e.target.classList.contains('link')) {
//   //     console.log('you clicked on the link');
//   // }
//   // even though you didn't directly add eventlistener to the class link, you can still access it.
// }

// function stopPropagation(e) {
//   console.log('you clicked on the list');
//   e.stopPropagation();
// }

// container.addEventListener('click', showBubbling, {capture: true});
// document.addEventListener("click", showBubbling, {capture: true});
// window.addEventListener("click", showBubbling, {capture: true});
// list.addEventListener("click", showBubbling, { capture: true });


// 08. Event Propogation Example
// target parent element when dynamically add new element, event listener can still find it

// const container = document.querySelector('.container');
// const btn = document.querySelector(".btn");
// // const heading = document.querySelector(".heading");

// function sayHello() {
//   console.log('hello there');
// }

// heading.addEventListener('click', sayHello);

// btn.addEventListener('click', function() {
//   const element = document.createElement('h1');
//   element.classList.add('heading');
//   element.textContent = `i'm inside the container`;
//   container.appendChild(element);
// })

// container.addEventListener('click', function(e) {
//   if (event.target.classList.contains('heading')) {
//     console.log('hello you');
//   }
// });
// not target right away the element, the events will bubble up, therefore can target the parent container to be able to access the actual element being click on


// 09. Form Submit
// submit event listener
// prevent default
// how to get a value

// const form = document.getElementById('form');
// const name = document.getElementById('name');
// const password = document.getElementById('password');

// form.addEventListener('submit', function(e) {
//   e.preventDefault();
//   console.log('form submitted');
//   console.log(name.value);
//   console.log(password.value);
// });


// 10. Local Storage​
// Web Storage API - provide by browser
// session storage, local storage
// setItem, getItem, removeItem, clear
// Inspect -> Application -> Storage (key & value)

// localStorage.setItem('name', 'john');
// sessionStorage.setItem('name', 'john');

// // avoid the duplicat of key name, it overwrites
// localStorage.setItem('name', 'john');
// localStorage.setItem('friend', 'peter');
// localStorage.setItem('job', 'develop');
// localStorage.setItem('address', 'street 123');

// const name = localStorage.getItem('name');
// console.log(name); // john

// localStorage.removeItem('name');
// const anotherName = localStorage.getItem('name');
// console.log(anotherName); // null

// localStorage.clear(); // clear all the data


// 11. JSON.stringify(), JSON.parse() - keep the data structure

// const friends = ['john', 'peter', 'bob']; //array

// localStorage.setItem('friends', friends); // becone string

// const values = localStorage.getItem('friends');
// console.log(values[0]); // console print: j

// to solve the issue, use JSON.stringify() to get the value and use JSON.parse() to return the values

const friends = ['john', 'peter', 'bob']; 

localStorage.setItem('friends', JSON.stringify(friends)); // transfer string to array

const values = JSON.parse(localStorage.getItem('friends'));
console.log(values[0]); // console print: john

// check if the value is existing in the local storage. Yes, then assign the value to variable (once the page is loaded)

let fruits; // an empty array

if(localStorage.getItem('fruits')) {
  fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
  fruits = [];
};
console.log(fruits);

fruits.push('apple'); // push apple to fruits array
fruits.push('orange'); // store in an array
localStorage.setItem('fruits', JSON.stringify(fruits));
