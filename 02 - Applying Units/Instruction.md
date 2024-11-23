# Exercise: Applying Units

## Scope
This exercise will provide an opportunity to gain, through experimentation, a better understanding of how absolute and relative CSS units work.


## Setup
We will be playing around with styling some HTML elements in this exercise. For setup:
1. Create a new HTML file with an empty `body`.
2. Create a separate CSS file and connect it to your HTML file with a `link` tag.


## Instructions
### Pixels and Percentages
1. In the `body` create a `div` with the class "container" that is 500px wide.
    * Give it a background color and a min-height of 100px so you can see it.
2. Drag the corner of the browser to make the browser window smaller and bigger (in both height and width).
    * What do you expect to happen? What actually happened?
3. Now let's try percentage units. Change the width of the div from 500px to 50%.
4. Drag the corner of the browser to make it smaller and bigger. Now that we have changed the width units from pixels to percentage, what do you expect to happen?

### Ems and Rems
1. Create a div, give it the class of .text-container and give that .text-container class the following properties:
    * 100% width
    * A colored background
    * A font-size of 2.0em
2. Inside that div, create three p tags:
    * One with font size set to 16px
    * One with font size set to 1.5em
    * One with font size set to 1.5rem
3. What is the resultant font size (in pixels) for each of those p tags? Why?
4. Change the font-size of the `.text-container` class to 4.0em. What happened to the font size of each of the paragraph tags? Why?

### vw and vh
1. Change the `.text-container` width to 100vw and height 100vh
    * What do you expect to happen to the container `div` when you change the browser width or height?
2. Change the width to 100vh
    * What do you expect to happen to the container `div` when you change the browser width or height?