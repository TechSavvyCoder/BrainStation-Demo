# Control Flow

## Getting Started
In this lab you will be writing code in `script.js`, and running it by opening `index.html` in the browser and/or refreshing the page. Check your results (or errors) using the web inspector. To keep your lab more organized, you might consider putting each exercise inside its own function.

To begin, download the starter files.

## Conditionals
### If/Else
1. Create a variable called `time`
2. Write an if/else block that...
    - Logs **You're early!** if `time` is less than 10
    - Logs **You're on-time!** if `time` is exactly 10
    - Logs **You're late!** for any other `time`
3. Create a variable called `timeOfWeek`
    - You can expect that it will either hold the value `weekday` or `weekend`
4. Modify your if/else block to only log the above messages if it is a weekday
    - Otherwise, log **You shouldn't be in class!**
5. Come up with at least three different times to test your code with and try them out

### Switch
1. Create a variable called `facialExpression`
2. Write a switch statement that...
    - Logs **You look happy** if `facialExpression` is "smiling"
    - Logs **You look sad** if `facialExpression` is "frowning"
    - Logs **You look angry** if `facialExpression` is "scowl"
    - Logs **I don't know** for any other value
3. What happens when you forget to include `break` statements in each case?

## Loops
### For Loops
1. Create an array of strings called `famousCats` with at least three entries
    - You can use "garfield", "felix", "meowth"
2. Write a for loop that prints each cat to the console
3. Write a for loop that prints each cat **except the first** to the console
4. Write a for loop that prints each cat to the console in reverse order

### While Loops
1. Rewrite the previous exercise using a while loop

### Terminating a For Loop
1. Use your `famousCats` array from the previous exercise
2. Create a new variable called `myFavorite` that holds the name of your favorite famous cat
3. Write a for loop that...
    - Logs **Kitty?** if the current cat is not your favorite cat
    - Logs **There you are!** if the current cat is your favorite cat and then `break`s the loop
4. Test your loop with some different arrays
    - Favorite last
    - Favorite first
    - Favorite not in array
    - Empty array

### Terminating a While Loop
1. Rewrite the previous exercise using a while loop
    - Make sure that the loop terminates when...
        - Your favorite cat is found
        - The end of the array is reached