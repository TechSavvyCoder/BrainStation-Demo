# Exercise: Event Handling & Callbacks

## Getting Started
To begin, download the starter files here.

This lab will focus on `click` and `keyup` events.


## Click Events
1. Add a `click` listener to the `window`
2. Within the event handler, log the `event.target` property. Depending on where you click the window, you will see that element printed in console.
3. Add a `click` listener to the Logo
4. Within the event handler, add a class `header__logo--big` to the logo. When you click, the logo will become styled according to this class in the stylesheet.

## Keyboard Events
1. Find the search textbox using `querySelector` and add a `keyup` event listener to it.
2. Within the event handler, find the Hero Title element and change its `innerHTML` to be the key (`event.key`) that was pressed.
3. Also within the event handler, find the Content element and change its `innerHTML` to the value of the search element (`event.target.value`).