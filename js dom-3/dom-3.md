### Events Overview​

- select Element --> addEventListener() --> (what event, what to do)

```
const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
        console.log(`hey you clicked me!`);
});
// anonymous function. When the button is clicked, console prints 'hey you clicked me!'
```
```
const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

btn.addEventListener('click', function() {
    heading.classList.add('red');
});
// when the button is clicked, h2 changes to .red css setting
```

### Function Reference (callback function)

```
const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");

function changeColors(){
    let hasClass = heading.classList.contains('red');
    if (hasClass) {
        heading.classList.remove('red');
    } else {
        heading.classList.add('red');
    }
}
// click second time, h2 becomes black back, don't need to refresh. Because the remove/add in the function

btn.addEventListener('click', changeColors)
// After the event (clicked here), do the reaction. Not right away users open the page, so keep the reference, do not invoke ()
```

### Mouse Events​

- click - fires after full action occurs
- mousedown - button is pressed
- mouseup - button is released
- mouseenter - move onto an element
- mouseleave - move out of an element

```
const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    console.log('you clicked me!');
});

btn.addEventListener("mousedown", function () {
  console.log("down");
});
btn.addEventListener("mouseup", function () {
  console.log("up");
});

// console print: down --> up --> you clicked me! === button is pressed --> button is released --> fires after full action occurs
```
```
heading.addEventListener('mouseenter', function () {
  heading.classList.add('blue');
});

heading.addEventListener('mouseleave', function () {
  heading.classList.remove('blue');
});

// mouse hover to the element and make it change according to the class setting. You can do this in CSS, it doesn't mean you need to set it up in js. Here is just a simple example to show the mouse events.
```

### KEY events

- keypress - when key is pressed
- keydown - when key is down
- keyup - when key is released

```
const nameInput = document.querySelector('#name');

nameInput.addEventListener('keypress', function() {
  console.log('you pressed a key');
});

nameInput.addEventListener("keydown", function () {
  console.log("you pressed a key");
});

nameInput.addEventListener("keyup", function () {
  console.log(nameInput.value);
});
// each time you release the key, you see the value is printed out in console log: asd ---> a, as, asd
```

