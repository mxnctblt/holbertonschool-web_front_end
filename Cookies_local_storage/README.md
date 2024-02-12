# Cookies & local storage

## Learning Objectives

- Understand how to create cookies using Javascript
- Learn how to set specific settings for the cookie
- Learn how to read cookies with Javascript
- How to use js-cookie for easy cookie manipulation
- How to use the browser web storage
- The differences between local storage and session storage

## Tasks

0. Create basic cookie
   In a file 0-index.html, create a basic html template:

- Add two text inputs, with the id firstname and email
- Add one button with the text “Log me in” that will call the function setCookies
- Add one button with the text “Show the cookies” that will call the function showCookies
- Create a function setCookies:
  - It should set the cookie firstname with the value in the firstname input
  - It should set the cookie email with the value in the email input
- Create a function showCookies:
  - It should create a DOM element p
  - It should set the inner html with Cookies: and the value of the cookie
  - It should append the paragraph at the bottom of the page
