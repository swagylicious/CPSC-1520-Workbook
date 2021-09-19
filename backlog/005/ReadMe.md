# Handling Information ![Code](https://img.shields.io/badge/Code%20Status-Walkthrough-blueviolet?logo=Visual%20Studio%20Code&labelColor=indigo)

> Begin this lesson by moving this folder into the [`src\`](../../src/) folder.

## REPL in your Browser

> "The acronym **REPL** stands for read-eval-print loop and basically provides a programmer with an interactive programming environment."
>
> <cite>[source](https://techcrunch.com/2018/03/15/repl-it-lets-you-program-in-your-browser/)</cite>

The console in your browser's native developer tools is effectively a REPL for JavaScript. In this lesson, we'll explore how to use variables to aid us in handling and manipulating information.

[The data types in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) can be loosely categorized as *primitive* data types and *object* data types. The primitive types include **Boolean** (with the permissible values of `true` and `false`), **String** (anything that is text) and the numeric types of **Number** and **BigInt**. There is also the **Symbol** type (similar to the notion of a GUID or a UUID) as well as the special types of **Null** (whose only value is [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)) and **Undefined** (whose only value is [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

Values for these primitive types can be expressed as **literal values** or be contained in variables that we can declare. A variable is simply a "named container" or *identifier* that we use to "store" a value. For a deeper discussion, see the section ["Variables, Values and Data Types"](https://programming-0101.github.io/TheBook/Teach/chapter1.html#variables-values-and-data-types) in the article *"What is a Computer Program"*.

The three keywords we use to declare variables are [**`let`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), [**`var`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) and [**`const`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const). Variables have their data type determined by the value stored in the variable. The data type of a variable is *mutable*. In other words, you can change the data type of a variable by simply putting in a value with a different data type. Variables in javaScript are **not** type-safe.

The primitive data types can be expressed as **literal values**. For strings, we simply enclose the text in a pair of either single quotes (as in `'Hello'`) or double quotes (as in `"Hello"`). For numbers, we use simple digits, as in `3.14159` or `7`. To distinguish a *BigInt* literal value, we place the character `n` at the end of the number, as in `100n`.

One of the ways we can find out what data type is in a variable is by using the [**`typeof`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator. If your data type is some kind of object (as opposed to a primitive type), then you can use the [**`instanceof`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) keyword to test the specific kind of object that the variable represents.

> *Follow along with your instructor as they demonstrate working with variables and values in the browser.*

We can manipulate information in JavaScript through the use of [**Expressions and Operators**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators). As it states in the linked article, "An expression is any valid unit of code that resolves to a value." It's common to see operators used in expressions to perform tasks such as arithmetic or string concatenation.

JavaScript uses some internal rules for "**implicit** conversion" based on the combination of operators and data types whenever the data types are different. For example, try out the following in your browser's console.

```js
5 + '7' // should return a string value of '57'

5 * '7' // should return a number value of 35
```

Usually, we should apply some form of **explicit** conversion when mixing different data types. If you want to get the string value of a variable's content, you could use the `.toString()` function (which works for any kind of variable).

```js
let theAnswer = 42
theAnswer.toString()
```

When you have a number data type, you can use the `.toFixed()` method to get the string version with a specific number of decimal places.

```js
let unitCost = 12.50
let quantity = 10
let total = unitCost * quantity
total
total.toFixed(2)
```

If you want to convert a string to a number, you can use the `parseFloat()` or `parseInt()` functions.

```js
5 + parseInt('7') // should return a number value of 12
5 + parseFloat('7') // should return a number value of 12

5 + parseInt('7.5') // should return a number value of 12
5 + parseFloat('7.5') // should return a number value of 12.5
```

If you need additional mathematical operations besides what is available as arithmetic operators, you can use the built-in [**Math**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) object.

----

## Learn by Play
One of the ways we are wired to learn is by play. I encourage you to apply what we're learning in our classes to something that personally interests you!

Create a folder at the root of your repository called **`sandbox`** and use it as a place to experiment.
Do you have a favorite web page you made in a previous course? See what you can do to add interactions using JavaScript! Is there something you learned in class that interested you? Turn what you learned into its own web page as a summary lesson!

For example, see what [**Stewart**](https://github.com/StewDent) created as a [live-demo](./live-demo/index.html) for working with JavaScript in the Browser. He also added some notes and screenshots in the *docs* folder of his repository:

> ### Retrospective: JavaScript in the Browser
> 
> We learned about the DOM (*Document Object Model*) and how to access/manipulate it using JavaScript.
> 
> ![DOM and JS](./images/computer_program.png)
> 
> We also learned about creating our own variables in JavaScript, and that we can get a "reference" to an item/element in the DOM.
> 
> ![Variables](./images/variables.png)
