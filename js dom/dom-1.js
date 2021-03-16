// Dom Intro
// DOM - General Concepts
// Window And Document Overview​
// GetElementById​
// Get Elements By Tag Name​
// Get Elements By Class Name​
// QuerySelector And QuerySelectorAll
// Navigate The Dom - Children
// Navigate The Dom - Parent Element​
// Navigate The Dom - NextSibling, PrevSibling
// Navigate The Dom - Next/Prev Element Sibling


// DOM - General Concepts
// similar to CSS
// Select the element or group of elements that you want to affect
// Decide the effect you want to apply to the selection

// document.body.style.backgroundColor = 'blue';
// document.body.style.color = 'yellow';
// document.getElementById('btn').style.color = 'red';

// assign to a variable to reduce repetitive coding action (document...), save time.
// const element = document.getElementById("element");

// do something
// document.querySelector('element');

// (global) window object
// console.log(window);

// returns a node object or a node list, which is an arraylike object

// const btn = document.getElementById('btn');
// const name = btn.nodeName;
// const css = btn.style;

// console.log(btn);
// console.log(name);
// console.log(css);


// WINDOW And Document Overview​
// window object = browser api - current tab
// document - within the window object
// console.dir ~= console.log


// SELECT ELEMENTS 

// getElementById('element');

// const h1 = document.getElementById('title');
// h1.style.color = 'red';

// time-consuming
// document.getElementById('btn').style.backgroundColor = 'blue';
// document.getElementById("btn").style.color = "white";

// time-saving: benefit of using variable
// const btn = document.getElementById("btn");

// btn.style.backgroundColor = 'blue';
// btn.style.color = "white";


// GET Elements By Tag Name





