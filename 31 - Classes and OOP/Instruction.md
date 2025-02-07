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