// Events Overview​
// Click Event​
// Function Reference​
// Mouse Events​
// Key Events​
// Event Object​
// CurrentTarget Vs Target​
// Event Bubbling Capturing​
// Event Propogation Example


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
// preventDefault() - prevents default behaviour

