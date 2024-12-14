# Advanced Functions

## Getting Started
In this lab you will be writing code in the `script.js` file of the provided starter code. You can test your code by opening `index.html` in a web browser and checking your results, (or errors), in the developer tools console.

To get started, please download the starter code.

## Note: Argument vs Parameter
It is important to remember the distinction between an `argument` and a `parameter`. While these terms are often used interchangeably, there is a difference.

When defining a function, the variables within the parentheses are **parameters**.
```javascript
// param1 and param2 are parameters here
function myFunc(param1, param2) {
}
```

When invoking a function, the variables passed to the function are **arguments**.
```javascript
let someVar = 'hello';
myFunc(someVar); // someVar is considered an argument here
```

## Exercises
### Named Functions as Parameters
1. Create a function declaration called `outputName` that takes one string parameter (`nameToPrint`). In the body of the function:
    - Create a variable called `finalString`
    - Concatenate the `nameToPrint` parameter with `"Your name is: "` string and assign the results to `finalString` variable
    - `console.log` the `finalString` variable
2. Create a function declaration called `sayMyName` that takes two string parameters (`firstName` and `lastName`) and one function parameter (`printFunction`). In the body of the function:
    - Create a variable called `fullName`
    - Concatenate the `firstName` and `lastName` parameters into a single string and assign it as a value of `fullName`. Don't forget the space between the first name and last name!
    - Invoke the `printFunction` function passed in as a parameter, passing the `fullName` variable as an argument to it
3. Call `sayMyName` with your first and last name as the string arguments, and your out`putName function as the function argument.

4. Call `sayMyName` with `console.log` as the function argument

_Did you get what you expected as the results of each call in steps 3 and 4?_

### Anonymous Functions as Parameters
1. Use the `setTimeout` function to `console.log` a message of your choice after 2 seconds
    - Recall that `setTimeout` takes two arguments
        - A function to be invoked
        - The number of milliseconds to wait before invoking
    - Make the function argument of your `setTimeout` call an anonymous function
    - Put the `console.log` inside of the body of the anonymous function
2. Modify the body of the anonymous function passed to `setTimeout` to call `sayMyName` instead of `console.log` after 2 seconds
    - You should call `sayMyName` in the same way you did in step 4 of the last exercise

### Arrow Functions
1. Rewrite the previous exercise with the **arrow function** syntax for anonymous function
2. Rewrite `outputName` and `sayMyName` functions with the **arrow function** syntax