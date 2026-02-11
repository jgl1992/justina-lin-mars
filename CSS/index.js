index.js
// 1. Create a date object for today
const today = new Date();

// 2. Get the current year from the date object
const thisYear = today.getFullYear();

// 3. Select the footer element from the DOM
const footer = document.querySelector('footer');

// 4. Create a new paragraph element
const copyright = document.createElement('p');

// 5. Set the inner HTML with your name, copyright symbol, and current year
// Replace "Your Name" with your actual name
copyright.innerHTML = `\u00A9 Your Name ${thisYear}`;

// 6. Append the paragraph to the footer
footer.appendChild(copyright);