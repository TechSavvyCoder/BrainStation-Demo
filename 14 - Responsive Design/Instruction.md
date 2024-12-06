# Exercise: Responsive Design
## Getting Started
To begin, please download the starter code.

## Instructions
### Opening your site on "mobile"
1. Open the `index.html` in your browser.
2. Open the web inspector.
3. In the top left corner of the inspector you will find an icon that says **Toggle Device Toolbar** when you hover over it.
4. Click it to enable a **Responsive** view of the site.
    - You can always click this button again to go back to the desktop view.
5. To the right of the webpage you should now have a handle that you can use to adjust the size of the screen.
    - This allows you to easily simulate screens of any size.
6. See what the site looks like with a width of roughly:
    - 1280px
    - 768px
    - 320px
7. Do you notice any **responsive** behavior?
    - What do you think is causing this behavior?
8. Would you be happy with the current "desktop" experience?

### Media Queries
1. Create a "tablet" mixin for a media query that is activated when the screen width is at least `768px`
2. With the example tablet screenshot as a guide, use this mixin to:
    - Make the **header links** around the **header** visible.
    - Change the arrangement of the elements in the **header** such that they are side-by-side.
        - Hint: review the _Flexbox_ lecture.
    - Change the arrangement of the elements in the **main** block such that they are side-by-side, with the **article list** growing to fill the available space.
3. Create a "desktop" mixin for a media query that is activated when the screen width is at least **1280px**
4. With the example desktop screenshot as a guide, use this mixin to:
    - Ensure that each **article** is exactly `150px` wide.
    - Change the arrangement of the **articles** to be side-by-side, wrapping to the next line(s) if necessary.
    - Increase the `height` of the **hero** to be `25%` of the `width` of the **screen**.
        - Hint: review the _CSS Units_ lecture.

You have created a mobile-first responsive web page!