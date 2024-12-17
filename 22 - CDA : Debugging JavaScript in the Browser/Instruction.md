# CDA: Debugging JavaScript in the Browser

## Debugging in JavaScript
As a web developer we are bound to make mistakes unknowingly while writing code. Once we start writing thousands of lines of code, we can't keep track of all the changes we made to our code and which piece of code is actually throwing us error or stopping the execution of our code.

> Debugging is a technique used for the step-by-step execution of our code thereby figuring out what mistakes or bugs we have in our code and to fix them. Modern browsers deploy a number of tools to help us debug our code and they are readily available as part of developer tools in any modern browser.

### Setup
- Please download the starter code to be used for this debugging activity.
- Open the starter code in VS Code & run the project using the Live Server extension.

In this particular code along, we are going to look into three important ways, a developer might debug the code:

- using console object (code based approach)
- using Sources Panel available under Developer Tools (UI based approach)
- using debugger; statement (code/UI based approach)

### Using console object (code based approach)
In this approach, we are going to look into different methods available under `console` object and how to use them to output or debug values in our code using browser's console. You might have already seen `console.log()` by now, but let's take a look at how we can get most out of the `console` object for the purpose of debugging.

**Console** is available under browser developer tools which can be opened by:

- right clicking on your page in browser and then clicking on **Inspect**
- by pressing _F12_ key on your keyboard
- or by pressing _Command+Option+I (Mac)_ or __Control+Shift+I (Windows, Linux)_

![console](./images/console.png)