# Lab: Classes & Object-Oriented Programming

## Overview
In this lab we are going to get some practice with JavaScript classes by creating a class to communicate with a Products API ([documented here](https://bstn-api-lab-f060f124aa11.herokuapp.com/)).

* HTTP-based Web APIs are developed, documented, and shared to allow programmers to make use of their functionality in any programming language.

* Language-specific API wrappers are commonly created to further abstract those HTTP-based APIs in order to provide code in a specific programming language, such as JavaScript.

Our goal in this lab is to create a JavaScript API that other developers could use to access the Products API without having to think about the underlying web requests.

## Getting Started
To get started, please download the starter code.

## Instructions
### Part 1: Create and Validate the API Wrapper Class
1. In `product-api.js`, declare a class called `ProductApi`
    * Create a `constructor` method that accepts an API key as its only parameter (e.g. `apiKey`). Note: _The API key will be used when making requests to the API (see `addProduct` and `getProducts` methods_).
    * You must store the API key parameter (e.g. `apiKey`) in an instance property (e.g. `this.apiKey`).
    * You must also store the Product API's base URL in an instance property (e.g. `this.baseUrl`). Note: _this will be set to a hard coded string as it will not be passed to the `constructor` as a parameter_
2. In `index.js`, create a variable called `API_KEY` that will store an API Key as a string.
    * Register an API key by calling the `/register` endpoint from the browser or postman.
    * Copy the API key returned from the call to `/register` and assign it to the `API_KEY` variable.
3. In `index.js` create an instance of the `ProductApi` class and assign it to a variable called `productApi`.
    * Make sure to pass the `API_KEY` variable to the constructor.
    * Validate the newly created instance of `ProductApi` by logging the `productApi` variable to the console.
    * Note: _your HTML file includes the `product-api.js` script before `index.js` so the `ProductApi` class is available to your code in `index.js`_.

### Part 2: Create the Get Products functionality
1. In `product-api.js`, create a `getProducts` method within the `ProductApi` class:
    * Create an `async` method called `getProducts` that accepts no parameters and uses Axios to send a GET request to the `/products` endpoint of the provided Product API
        * Remember to append the API key instance property (e.g. `this.apiKey`) to the endpoint URL's query string to authenticate the request. See the Product API documentation for more info.
        * Note: _your HTML file includes the Axios script before product-api.js so the `axios` instance is available to your code in `product-api.js`_.
    * The `getProducts` method should `await` the request and return the products array from the response (Recall where the data stored in an Axios response object).
2. In `index.js` create an `async` function called `testApiCalls` to be used to test the `getProducts` method. Inside this function:
    * Add a `try...catch` statement so that you can catch any errors from the API request.
    * Within the `try` block, call `await productApi.getProducts()` to retrieve the list of products, storing the result in a variable called `products` Note: _Since `getProducts` is an `async` method, you must `await` this method call._
    * Also within the `try` block, validate the products were retrieved successfully by logging the `products` variable to the console.
    * Within the `catch` block, log any errors from the API request using `console.error`
3. Call the `testApiCalls` function to test the `getProducts` method is working correctly.
    * Determine if the `getProducts` method returns what you expect. If not, try to investigate where things could be going wrong and remember to ask for help if you get stuck.