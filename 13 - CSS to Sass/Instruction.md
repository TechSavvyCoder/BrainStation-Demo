# Exercise: CSS to Sass
Before completing the exercise, please download the starter code

## Getting Started
Before diving into the requirements, please download the starter code.
**Note**: For Design Requirements I and II, all styling will be written in a styles.css file.

## Design Requirements I
**Must be done exclusively with element selectors**
1. Set all `<h2>` headers to have a font size of `14px` and a font family of `cursive`
2. Give all of the unordered lists a `beige` background color
3. Give the `<h1>` header a solid, 4px border with a color of `teal`
4. Bold all of the `<li>` items

## Design Requirements II
**Must be done without modifying the previous CSS rulesets!**
1. Set the snack list background to `lightsalmon`
2. Set the cold drink list background to `rgb(127, 255, 212)`
3. Un-bold and italicize the cold drink special
4. Set the `<h1>` header to an `arial` font with only an element selector
    - Will this affect previous styles applied to the `<h1>` header?
5. Set the hot drinks background to `#DC143C` with only an element selector
6. Give the drink and food lists each a `thin` `dashed` `black` border

## Design Requirements III
**Setup**
1. Rename your `styles.css` file to `styles.scss`
2. Write all your styling in the `styles.scss`
    - Every time you save your `styles.scss` file, your Sass compiler will automatically update your `styles.css` file

    > "Note the .css and .map.css that are generated in your project by the Sass compiler."

**Instruction**
1. Set all colors as variables and use those variables in your rulesets
    - Remember, using variables makes it easier to change one color that is used multiple times, just by changing the color set to that variable
2. Create a `daily-special` mixin for the `#cold-drink-special` ruleset
    - Create `#hot-drink-special` and `#snack-special` rulesets that use the mixin to apply the "special" styling
    - Reminder: To create a mixin you must use `@mixin` followed by the name and then styling, and to apply that style to a class you must use `@include` to the class selector, followed by the name of the mixin
3. Create a `.list` ruleset that defines the common border property for the lists
    - Use `@extend` to include the parent (`.list`) ruleset in each of the lists
    - Go to the slides and see an example of how to use `@extend`
4. Inside your `.snacks-list` ruleset, change all `<li>` elements with a nested selector.
    - Change their content color to `teal`

**Congratulations, the client loves the look of the new site!**