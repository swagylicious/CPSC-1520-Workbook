# Intro to Functions in JavaScript ![Code](https://img.shields.io/badge/Code%20Status-Walkthrough-blueviolet?logo=Visual%20Studio%20Code&labelColor=indigo)  ![Docs](https://img.shields.io/badge/Documentation%20Status-10--40%25%20Rough%20Outline-red?logo=Read%20the%20Docs)

> - [ ] TODO: Review/update instructions in student starterkit.

## Demo-Agreement

- What is a function?
  - A function is a block of code that can be called by name.
  - A function can optionally accept parameters.
  - A function can optionally return a value.
- Functions that members of objects include: `console.log`, `document.querySelector`, `document.querySelectorAll`, `document.getElementById`, `document.getElementsByClassName`, `document.getElementsByTagName`
- Built-in "global" functions: `prompt`, `alert`, `confirm`
- Calling a function
  - `prompt` returns a value
  - `alert` does not return a value
  - `confirm` returns a value
  - `console.log` does not return a value

```js
var disclosing;
var receiving;
var date;

disclosing = prompt('Enter disclosing party name:');
receiving = prompt('Enter receiving party name:');
date = prompt('Enter the date [month, day, year]:');

// update the disclosing party areas
document.querySelector('.parties .disclosing-party').innerHTML = disclosing;
document.querySelector('.disclosing-signature .disclosing-party').innerHTML = disclosing;

// update the receiving party areas
document.querySelector('.parties .receiving-party').innerHTML = receiving;
document.querySelector('.receiving-signature .receiving-party').innerHTML = receiving;

// update the date
document.querySelector('.date').innerHTML = date;
```

----

## Demo-Addition

- Ternary operator
  - `condition ? trueValue : falseValue`
  - Used to assign a value to a variable; it is an expression

```js
let first = prompt('Enter a number.');
let second = prompt('Enter another number.');

let result = first + second;

alert(`I calculated a result of ${result} when adding the numbers.`);

firstNumber.innerText = first;
secondNumber.innerText = second;
answer.innerText = result;

let repeat = confirm('Again?');

let para = document.querySelector('p'); // grab the first <p>
para.innerHTML = repeat ? 'Press <a href="#">this link</a> to try again.' : 'Thanks for playing';
```

----

## Demo-Greet

- Declaring functions
  - Parameters and return values
  - Named functions
  - Anonymous functions
  - assigning a function to a variable
    - use `const`
- Calling functions
  - arguments
- [ ] Create a function to get a description of the image from the user and then set the `alt` attribute of the image to that description.
- [ ] Call that function from the console in the dev tools. Then inspect the element to see if the `alt` attribute was set correctly.
- [ ] Add the function call to the script `main.js`.
  - [ ] Does it matter if the call to the function occurs before or after the function declaration?

----

## Practice Agreement

- "Refactoring" refers to the process of improving the code without changing the functionality.
- See the instructions in the [starter-kit](./practice-agreement/README.md)
  - [ ] Move the instructions from the JavaScript file to the ReadMe file.

----

## Practice Review

- [ ] Follow the instructions in the [starter kit](./practice-review/ReadMe.md)

----

## Waiting for the DOM

Generate the example from the MDN documentation on the [Window: load event](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event).

----

## Resources

Review the following articles:

- [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [Functions - reusable blocks of code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
