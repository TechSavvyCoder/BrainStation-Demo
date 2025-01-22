# Challenge: Control Flow

## Introduction
In this exercise, you will create a program for a restaurant's ordering system. It will test your understanding of functions, parameters and control flow.

## Instruction
Please download the starter code. This starter code contains a function that returns a menu array. This menu array contains the items that the restaurant can serve. Each menu item object will have a name, price, and a time property.

This exercise will require you to write 3 functions. These functions will accept a user's order, cook the specified meal, and then serve the meal. For this exercise, all meals will consist of 3 items, a main dish, a side dish, and a drink.

- The first function will be the **'order'** function, which should take in 3 parameters, the main, side, and drink. If these 3 arguments are provided by a user, then the order function will call the next function, the cook function, with the 3 items as arguments. If less than 3 arguments are provided, then the function should display an error and ask the user to order again.

- The second function will be the **'cook'** function, which again will take in the 3 meal parameters. This function will need to look through the restaurant's menu and determine the total time it will take to prepare the 3 items that were ordered. Once the total time has been determined, the function should tell the user how much time it will take to prepare the meal, and then wait that amount of time in seconds. After that, the 'serve' function will be called with the 3 meal items as arguments.

- The final **'serve'** function will need to take in the 3 meal parameters, and loop through the menu to find out the total price of all 3 menu items. The function should log that the meal is ready to serve, and also inform the user what the price of the meal will be.

> **HINT**: look up how to use the `setTimeout()` function to wait for a period of time. 

## Diving Deeper
Modify the order function of your restaurant to check whether or not the user's ordered items are on the menu. If not, the function should reject the user's order and ask the user to order different items.

Then, modify all 3 functions so that a user can order any number of items from the restaurant, as long as they are on the menu. You may need to use JavaScript [arguments](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/arguments) object to accomplish this.