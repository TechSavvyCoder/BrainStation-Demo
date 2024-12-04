# Exercise: Positioning
Before completing the exercise, please download the starter code

## Using Relative Positioning
1. Using `relative` positioning and the `top` property, re-order the colored blocks to be red | green | purple | blue.

2. Once you have accomplished this goal, remove the styling you just applied to return the blocks to their original order.

## Using Fixed Positioning
1. In the CSS file, uncomment the `.fixed` ruleset. This sets the purple block to have `position: fixed`.

    - What happens to the purple block when you scroll?
    - Where is the blue block?

2. Try using the `top` and `left` attributes to move the purple block to roughly the centre of the screen.

3. Once you have accomplished this goal, comment out the `.fixed` ruleset and remove the styling you just applied to return the blocks to their original places.

## Using Absolute Positioning
1. In the CSS file, uncomment the two rulesets for the `.parent-square` and `.child-square` classes. This will cause a new block to appear with a smaller box inside.

2. Your job here is to set the smaller block (the one with class `'child-square'`) to position absolute, and position it so that it's in the bottom right corner of it's parent (the violet block). It should be 10px from the bottom edge and 10px from the right edge.

    - What is the difference between absolute and fixed positioning?