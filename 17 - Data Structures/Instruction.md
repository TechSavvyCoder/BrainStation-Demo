# Data Structures

## Overview
In this lab you will be writing code in the file `script.js` and running it by opening `index.html` in the browser or refreshing the page. Check your results (or errors) using the Chrome inspector.

To get started, please download the starter files.

## Instructions
### Arrays
1. Create an array containing three strings in a single line
    - Use web development terms that you have learned so far for your string values
    - Use the **literal** syntax
2. `console.log` the array
3. `console.log` the first item in the array
4. `console.log` the last item in the array
    - What happens when you try to access an index that does not have an item?
5. Create the same array that you did in step 1, but this time start with an empty array and then `push` your strings
    - What is a return value of `push` operation?
6. `console.log` this array to confirm it is same as your literal array
7. `pop` and then `console.log` each of the items in this array
    - How many items are in the array now?
8. Use square bracket syntax to set the value of **literal** array at index 1 to a new string
    - `console.log` the array after setting the value of index 1
    - Now set a value at index 5 and `console.log` the resulting array. Observe what happens to values in indices between 3 and 5?
9. Remove all `undefined` values from **literal** array using the `splice` function

### Objects
1. Create an object that contains three properties using the **literal** syntax
    - firstName
        - Your first name as a `string`
    - lastName
        - Your last name as a `string`
    - likesCoffee
        - A `boolean` indicating whether or not you like coffee
2. Create the same object, but this time start with an empty object and then add the properties
    - Have at least one example of **dot-notation** assigning and one example of **square brackets** assigning
3. `console.log` the `firstName` property of your object using **dot-notation** access
4. `console.log` the `lastName` property of your object using **square brackets** access
5. Create a variable named `currentKey` and set its value to `”firstName”`. Using square bracket syntax and your new variable as a dynamic key, get a value of `firstName` of your object. Try changing the value of `currentKey` to `lastName` and `likesCoffee` to observe the dynamic functionality of using variables as keys
6. Add a new property to your object named `areasOfExpertise` and set the value to a **literal** array from _Arrays_ exercise
    - `console.log` your object and inspect it using Chrome Dev Tools