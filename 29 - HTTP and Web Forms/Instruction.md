# Lab: HTTP & Web Forms

## Getting Started
1. Install the [JSON Formatter Chrome Extension](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?utm_source=gmail)
    * This will show JSON in the browser in a more human-readable format
2. Create a new project-folder with an `index.html` file. Once your HTML and form are set up, you will submit your forms to [this URL](https://postman-echo.com/post) in order to test the values that are sent. Before doing so, first create the required form by following the steps below.

## Exercises
1. Create a form that has:
    * One `text` input
    * One `textarea` input
    * A button with the type attribute of `submit`

2. You can wrap all of your inputs in `<label>` tags or use the `for` attribute to connect labels with inputs.
    * E.g. `<label>My input: <input type="text" /></label>`

3. Give each input a name using the name attribute. Each input field or text-area with a name attribute will have their values sent when submitting the form.
    * E.g. `<label>My input: <input type="text" name="test-input" /></label>`

4. With your form element use the following attributes:
    * `action="https://postman-echo.com/post"`
    * `method="post"`

5. On submit, the values that you sent in the form submission will be echoed back in the `browser` from the `postman-echo` API. The content will be returned in a JSON format, which is why we installed the Chrome extension **JSON Formatter** at the beginning of this exercise. In the JSON that is returned, take a look at the `"form":` content, this is where you should see the values from your input fields e.g. test-input

## Resources
* [MDN: HTML form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
* [MDN: HTML label element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)