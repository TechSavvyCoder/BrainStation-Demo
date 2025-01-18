# Exercise: Higher Order Functions

## Getting Started
In this lab you will be writing code in the `main.js` file of the provided starter code. You can test your code by opening `index.html` in a web browser and checking your results, (or errors), in the developer tools console.

To get started, please download the starter code.

## Instructions
### Part 1: Using Array Methods
Let's try using some built-in Array Methods that are Higher Order Functions.

1. Use the Array method `.forEach()` to loop through the movies array and `console.log` each movie title inside an inline anonymous function. You can look at the [Documentation for Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) to get an idea of how this can be done.
2. Use the Array method `.find()` to search for a movie with the tile 'Total Recall'. [Documentation for Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find). Save the found movie in a variable and `console.log` it to confirm you found the correct object.
3. Use the Array method `.filter()` to create a new array called `ninetiesMovies` that contains movies from only the nineties. [Documentation for Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
4. Use the Array method .map() to create a new array called moviesWithPrimaryGenre that contains only the title and first genre of each movie. [Documentation for Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
5. Use the Array method `.sort()` to sort the movies array by year in descending order, from newest movie to oldest. [Documentation for Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

Practice array methods - `.forEach()`, `.find()`, `.filter()`, `.map()`, `.sort()` - try adding your own twist on the steps above by changing some of the parameters, properties or conditions. The objective is to get a better understanding of how each of these functions work.

### Part 2: Create Your Own Higher-order Function That Takes a Function as an Argument
Now that we've used some built-in Array Methods, let's try creating our own Higher Order Function.
1. Write a function called `arrayForEach` that accepts an Array as the first parameter and a function as the 2nd parameter. Leave the function body empty for now.

```javascript
function arrayForEach(arrayInput, callbackFunction) {
    // More code will go here later (in step 3)...
}
```

2. Call the function `arrayForEach` and provide the `movies` array as the first argument. Provide an inline anonymous function as the 2nd argument. This anonymous function can also include a parameter for each element in the array, something like `(element) => { console.log(element); }`

```javascript
arrayForEach(movies, (element) => {
    console.log(element);

    // More code will go here later (in step 5)...
});
```

3. Inside the `arrayForEach` function body, `{}`, write a `for` loop that loops through the passed in array (available as `arrayInput`). Inside the `for` loop `console.log` each array element using the `i` variable from the loop. This should output each item from the `movies` array.
4. Inside the `for` loop try calling the anonymous function (available as `callbackFunction`) you passed in step 2 and invoke it with each array element.
5. Inside the anonymous inline function's body from step 2 add an if statement which will `console.log` the movie if the title is 'Jurassic Park'.

## Addition Resources
- [Eloquent JS: Higher-Order Functions](https://eloquentjavascript.net/05_higher_order.html)
- [Parameters & Arguments in JavaScript](https://codeburst.io/parameters-arguments-in-javascript-eb1d8bd0ef04#:~:text=When%20talking%20about%20functions%2C%20the,function%20when%20it%20is%20invoked.)