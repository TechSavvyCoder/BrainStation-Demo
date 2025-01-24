# Challenge: Functions

## Introduction
Create a new JavaScript file, and proceed to try the exercises below.

## Number Pyramid
Referencing back to our number pyramid exercise from loops, write a function called `printPyramid` that will take in an integer as a parameter and will print out a pyramid of that size.


printPyramid(5) 
```javascript
// should result in:
    1
   2 2
  3 3 3
 4 4 4 4
5 5 5 5 5
```

## Framed String
Write a function that takes in an array of strings, and prints them one per line inside a rectangular frame of asterisks (*).

```javascript
	// given ['Hello', 'World'], it should print:
	*********
	* Hello *
	* World *
	*********
	// given ['The', 'Quick', 'Brown', 'Fox'], it should print:
	*********
	* The   *
	* Quick *
	* Brown *
	* Fox   *
	*********
```

# Diving Deeper
## Student Directory
Download the starter code for the next challenge. The starter code contains the array of data that you need to work with.

Create a function that can search through the given array `PERSONDATA` and find a person by a given name. If the person with a matching name is found, the function should log the name and their position in the array. If they are not found, the function should log that this name could not be found.

Create a function that will take in an array of people (e.g.,`PERSONDATA`) and an integer, and return a new array with the people filtered based on the given integer. For example, if the function is called with a parameter of 50, it should return an array of all the people with a score greater than 50.

Note: the goal of this challenge is to advance your understanding of loops and data structures. While there are built-in Array methods that you can use to accomplish these tasks, you should be able to finish this challenge by just using loops.