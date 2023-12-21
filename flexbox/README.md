# Flexbox

## Learning Objectives

- What is Flexbox?
- How to convert float positioning to a flex display
- How to horizontally and vertically align elements using Flexbox
- The difference between the main and cross axes
- Properties that work on flex elements vs flex container
- Shorthands for flex
- How to create a new page with flex in mind

## Requirements

- Allowed editors: vi, vim, emacs
- A README.md at the root of the project directory is mandatory
- All of your code will be executed on Ubuntu 18.04 using Python 3.7.x
- All of your files should end with a new line

## Tasks

0. Add display flex
```
Use the starter HTML and CSS files from this task to task 10. Copy the contents of the starter files into the files that you need to produce and make the necessary changes according to the task description.

When using display: flex; on a container, all direct children become flex-items (and no more inline or block elements).

With display flex, margins are not collapsing as they would with block items. Also remember that flexbox is 1-dimensional system (vs CSS Grid which is a 2 dimensional system)

In the /* Grid section within your CSS
    - Add a selector for the row class
        - Property: display, Value: flex

=> Now, all children from the row class are flex items
    - Entirely remove the row::after declaration
    - Remove the float: left inside [class*='col-']
=> All elements should appear same than before using the float
```

1. Add new classes on sections
```
Using the files from the previous task as the base for this task:

In the outermost section tag for services
    - Add the class section-services

In the outermost section tag for works
    - Add the class section-works

In the outermost section tag for about
    - Add the class section-about-us

In the outermost section tag for latest_news
    - Add the class section-latest-news

In the outermost section tag for testimonial
    - Add the class section-testimonial

In the outermost section tag for contact
    - Add the class section-contact
```
2. Reverse order Latest news cards
```
Using the files from the previous task for this task:

The flex-direction property says how flex items are placed on the main axis and their direction (normal or reversed).

flex-direction is sometimes used when doing responsive design. Some elements may appear better when they are in column mode on mobile and row when on desktop.

row-reverse and column-reverse should be used in specific situation. The visual order of elements should be the same visually and in the HTML code. Refer to flex-direction - CSS: Cascading Style Sheets | MDN for more information

In your CSS file:

Before /*** 4. CARD ***/, add a new comment: /* Section Latest news ============================= */

Under that comment section, target the row class inside section-latest-news class
    - Property: flex-direction, Value: row-reverse
The Latest news should appear in a reverse order.

```
3. Simplify services list
```
Using the files from the previous task for this task:

flex-wrap is a property that can force the flex items to be in one or multiple lines. Learn more about it here.

In the Services section of 3-index.html, remove the second ul and put the 3 lielements under the first ul

Now, in your CSS file, before /*** 4. CARD ***/, add a new comment: /* Section SERVICES ============================= */

Under that comment section, add a new selector targeting the row class inside the section-services class
    - Property: flex-wrap, Value: wrap
```
4. Playing around with the spacing between flex service items
```
Using the files from the previous task for this task:
In 4-styles.css file, within the Grid section
- In .col-1-3 selector
    - Replace the current width with calc((100% / 3) - 2rem)
- In .col-1-2 selector
    - Replace the current width with calc((100% / 2) - 2rem)
- In [class*='col-']
    - Remove the padding declaration
    - Set Property: margin to 1rem
- In ul.row declaration
    - Replace the current margin with -1rem
```
5. Flexify the header
```
Using the files from the previous task for this task:

In your 5-index.html file, inside the Header section
    - Wrap the div with class header-logo and the nav with class navbar-menu with a div that has header-container as a class
In your 5-styles.css file,
    - Inside the /* Header section
    - Add a selector for the header-container class
        - Property: display, Value: flex
        - Property: justify-content, Value: space-between
    - Remove header-logo and header-logo a rules
    - Remove the navbar-menu rule
    - In the variables section
        - Remove
            - header-logo-position
            - header-logo-link-display
            - header-logo-link-position
            - header-logo-link-top
            - header-logo-link-left
```
