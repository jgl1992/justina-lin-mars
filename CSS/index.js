// Footer copyright
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");

const copyright = document.createElement("p");
copyright.innerHTML = `\u00A9 Your Name ${thisYear}`;
footer.appendChild(copyright);

// Message form logic
const messageForm = document.getElementById("leave_message");
const messageSection = document.getElementById("messages");
const messageList = document.getElementById("messageList");

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = event.target.username.value;
  const usersEmail = event.target.usersEmail.value;
  const message = event.target.message.value;

  // Create new list item
  const newMessage = document.createElement("li");

  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${username}</a>:
    <span> ${message} </span>
  `;

  // Remove button
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";

  removeButton.addEventListener("click", function () {
    newMessage.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});
