1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

> getElementById("id") selects an element by ID.
> getElementsByClassName("class") selects all elements with a class
>  querySelector("selector") selects the first matching element using a CSS selector.
> querySelectorAll("selector") selects all matching elements

2. How do you create and insert a new element into the DOM?

To create and insert a new element into the DOM, I have first create the element using document.createElement() . Then i can add text to it or set attributes. Finally, Then i choose where it will appear on the page and insert it using methods like appendChild() or append() . This makes the new element visible on the webpage.

3. What is event bubbling and how does it work?

If I click a button inside a < div > , the click event is triggered first on the button, then on the < div > , and then on the parent element above, unless it is disabled.

4. What is event delegation in JavaScript? Why is it useful?

Event delegation in JavaScript is when I attach a single event listener to a parent element to handle events on its child elements. This is useful because I don't need to add a separate listener to each child, which saves memory and also works for dynamically added elements later.

5. What is the difference between the preventDefault() and stopPropagation() methods?

preventDefault() stops the browser's default action for an event, while stopPropagation() prevents the event from bubbling up (bubbling) to the parent element.
