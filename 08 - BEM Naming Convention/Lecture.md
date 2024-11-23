# Lecture: BEM Naming Convention

When writing styles, it is very easy to misuse and abuse CSS inheritance. If you spent some time trying to organize your CSS and make it DRY, you might have done the following; write global styles using element selectors, write highly reusable classes, then overwrite them with classes with higher specificity most likely using nested selectors. This is a good approach in general, but is easy to eventually bloat the codebase.

## Block Element Modifier
This is where BEM comes in. BEM is a methodology, not a piece of technology. You don't download and install anything, you just study it and apply it to your code. It is a set of rules (or guidelines) on how to name your classes. As its name - Block Element Modifier - suggests, it states that your CSS classes should look like the following:

```CSS
// a standalone entity like .list
.block {} //

// a child element like .list__item
.block__element {}

// a variation of the block like .list--expanded
.block--modifier {}
```

If going by block and elements isn't as straight forward, consider the following pseudo code:

```CSS
// Block
.dog {
  // has fur and four legs
}

// Element
.dog__tail {
  // has wagging animation
}

// Modified Block
.dog--golden-retriever {
  // long hair and golden in color 
}

// Modified Element
.dog__ear--floppy {
  // ears don't stand up
}
```
```HTML
<!--Here's an example of BEM in HTML-->
<div class="dog">
  <div class="dog__ear dog__ear--left">
  </div>
  <div class="dog__ear dog__ear--right">
  </div>
</div> 
```

### Why Use BEM
What are we trying to accomplish by doing this? What is the philosophy behind it?

* **Composition over Inheritance**
HTML elements are to contain other styles by choice, rather than inheriting such styles automatically. In other words, we're trying to force our elements to behave in a more predictable manner by making the styles it receives more explicit. An aspect of this is to apply the single responsibility principle to CSS, by creating classes that do one thing well and have elements have multiple classes. However, BEM focuses more on:

* **Avoiding Inheritance with unique classes per element**
So composition happens more in the stylesheet than in the HTML document. This also means:

* **Lowest Specificity to Minimize Conflicts**
As elements will receive styles from unique classes, there is no need to use nested selectors.

## Additional Info
For naming suggestions and further readings, check out this BEM Cheat Sheet [BEM Cheat Sheet](https://9elements.com/bem-cheat-sheet).