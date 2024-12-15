# DOM

## Overview
In this exercise, we will be writing JavaScript that will be executed when a page loads. This particular code will help in changing the appearance of our sample webpage. Understanding how to manipulate the DOM is critical when looking to build more professional and interactive web-pages.

Before starting the exercise, please download the starter files.

## Directions
### Selecting Elements
1. Get the `nav-bar` element by its id and output the result with `console.log`
    - Which data type was returned?
2. Get the `main` element using the `querySelector` method and `console.log` the result
    - Which data type was returned?
3. Get a list of every `<a>` element using `querySelectorAll`
    - Which data type was returned?
4. Now try selecting the `<a>` tag with `querySelector`
    - What is the observed difference between `querySelectorAll` and `querySelector`?

### Getting and Setting InnerHTML
1. Get the **Logo** element and store it in a variable
2. `console.log` the `innerHTML` property of the element
3. Assign a new value to the `innerHTML` property to change the **Logo** on the site

### Setting Style on Multiple Elements
1. Get a list of every `<a>` element using `querySelectorAll` again and store it in a variable
2. Use a `for` loop with the list to apply a new style to each element
    - Use `classList` to add a new CSS class to each element in the list (ie: `link`)
    - Add a new class selector (matching the class added in previous step) in `styles.css`
    - Add the `text-decoration: underline` and `color: #7FDEFF` properties to the selector

## More Practice
Now that you know how to change HTML and the style of elements using JavaScript, try changing other elements on the page for example how would you change the text of the **User** from **Grace Jones** to be **Your Name**?

## Resources
- [MDN innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- [MDN classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)