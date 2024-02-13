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

1. Create cookie with expiration date and specific path
   In a file 1-index.html:

- Reuse the code of the previous task
- Modify the way you are setting cookies to expire in 10 days

2. Read cookie
   In a file 2-index.html:

- Reuse the code of the previous task
- Create a function getCookie:
  - It accepts name as argument
  - It should return the value of the cookie with the name passed in argument
  - If the cookie does not exist, it should return an empty string
- Modify the function showCookies:
  - It should display the paragraph Email: EMAIL - Firstname: FIRSTNAME

3. Delete cookie and mini application
   mandatory
   in a file 3-index.html, reuse your code from the previous task

- add a div in html that will contain the login form:
  - You can reuse the one you previously wrote
  - It has one h2
  - It has two text inputs
  - It has one button
- Write a function named showForm:
  - It should remove the Welcome message if it exists
  - It should show the form
- Write a function named hideForm:
  - It should hide the form
- Write a function named deleteCookiesAndShowForm:
  - It should remove the two cookies
  - it should show the form by calling the showForm function
- Write a function named showWelcomeMessageOrForm:
  - if user is not logged in, the function showForm is called
  - If the user is logged in, replace the body of the page with a h1
    - It should display Welcome FIRSTNAME (logout)
    - (logout) should be a link
      - The link font should be display in normal weight, italic, and 10px to the right of the message
      - On click, call the function deleteCookiesAndShowForm, hide the welcome message, and show the form
