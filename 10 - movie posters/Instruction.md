# Exercise: Movie Posters

## Scope
This exercise is designed to give you a better understanding on how flexbox works using its rulesets. To begin, please download the starter code.

## Using Flexbox
Here we have a basic cinema website with 10 blockbuster movie posters with the default display property of block. Using flexbox, we will position our elements around the page.

1. The first thing we need to do is wrap our movie posters in a container

    * Place all the images inside a `div` representing our `parent` container

2. Notice how not much has changed, that's because our parent `div` is still `display: block;`. We will now need to change the parent's display property to `display: flex;`

    * What do you think will happen? Will anything change?

3. By default, the direction of `display: flex;` is `row`. Change the `flex-direction` of the container to `column`.

    * Notice the difference? When the `flex-direction` was row, you may have noticed that the images shrank to fit. That's because it will always try to fit all the elements in the row.

4. To have our posters maintain their original size and flow onto multiple lines we have to add `flex-wrap: wrap;` to our parent container.

    * Notice that now the images go back to their original sizing but when there isn't enough room in the row it will automatically jump down to a new row. We need to pair our `flex-wrap` property with another flexbox property in order to have everything space correctly.

5. Now that we have the posters maintaining their original size, we have to make sure that they are spaced apart properly. Here is where we need to use the `justify-content` property. The `justify-content` property gives us more control with how our elements are spaced.


    * Give the container the `justify-content` property and play around with the different values to see what happens with the posters.
    * Once you have played with the different layouts, choose the one you think looks best.
    * After you have picked a layout, resize your browser window to see how the layout will change across different viewports.

6. We have not introduced responsive design yet, but let's imagine that we are now viewing our cinema website on a mobile device.

    * Change the `flex-direction` back to `column`
    * Instead of modifying the `justify-content` property, lets use the `align-item` property. Add the align-item property to the container `div` and give it a value of `center` to center all the posters to the middle of the screen.