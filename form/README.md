# Forms

## Learning objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
- How to create an HTML5 form
- How to choose the right input type
- How to constrain a form field with regular expressions
- How to style inputs for invalid, valid, and required fields
- How to build a a comment form
- How to build a simple search form
- How to create usable and accessible forms

## Requirements
- Allowed editors: vi, vim, emacs
- A README.md at the root of the project directory is mandatory
- HTML and CSS have been rendered on Chrome 78 or more.

## Tasks

0. basic comment structure
```
In your 01-article.html file
    - Sibling to the <div class="post">, create a new <section> with the class post-comments
    - Inside the section create an header
        - In the <header> create a heading level 2 with class section-title and text: Leave a comment
        - under the level 2 heading create a paragraph with text: All fields are required.
    - Create a form siblings to the header
        - Action: #
        - Method: post

In your 01-styles.css file
    - After the Tag list styles, create a new comment
/*** FORM ***/
/* Comment section
    ============================= */

    - Target post-comments class
        - Property: width, Value: 80%
        - Property: margin, Value: 10rem 0 0 auto
        - Property: padding-left, Value: 7rem
    - Target the section-title class inside the post-comments class
        - Property : font-variant, Value: small-caps

    - Add a new comment section
/* Basic form
    ============================= */

    - Target all form
        - Property: display, Value: flex
        - Property: flex-direction, Value: column
        - Property: padding, Value: 1rem 0
        - Property: margin, Value: 0
```