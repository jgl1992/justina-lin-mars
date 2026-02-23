index.js
#lesson-13
 
    // Get form values
    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;

    console.log(name, email, message); // log values to console

    // Display in Messages list
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
        <a href="mailto:${email}">${name}</a>
        <span>: ${message}</span>
;

// Remove button
const removeButton = document.createElement("button");
removeButton.type = "button";
removeButton.innerText = "Remove";
removeButton.addEventListener("click", function() {
const entry = removeButton.parentNode;
entry.remove();
});
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);

    // Reset the form
    messageForm.reset();
});
fetch('https://api.github.com/users/{jgl1992}/repos')
  .then(response => {
    // Check if the request was successful (status in the 200s range)
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }
    // Parse the response body as JSON
    return response.json(); 
  })
  .then(data => {
    // Work with the fetched data
    console.log(data);
  })
  .catch(error => {
    // Handle network errors or errors thrown in the .then() block
    console.error('Fetch error:', error);
  });

const projectSection = document.getElementById("projects");
const projectList = projectSection.querySelector("ul");
  // --- Your previous lesson's code goes above this line ---

// Replace this with your actual GitHub username
const username = "jgl1992";

// Fetch the list of repos for your GitHub account
fetch(`https://api.github.com/users/${username}/repos`)
  .then(function(response) {
    return response.json();   // convert the response into JSON
  })
  .then(function(data) {
    console.log("Your GitHub Repos:", data);
  })
  .catch(function(error) {
    console.log("Error fetching repos:", error);
  });
  ]fetch("https://api.github.com/users/YOUR_USERNAME/repos")
  .then(function(response) {
    return response.json();   // <-- this is the step you're asking about
  })
  .then(function(data) {
    console.log(data);        // this receives the parsed JSON
  });
  fetch()
.then(function(respone){
return response.json()'
})
.then(function(parsedResponse){
const repositories = parsedResponse;
console.log(repositories)'
});
for (let i = 0; i < repositories.length; i++) {
  const project = document.createElement("li");
}
for (let i = 0; i < repositories.length; i++) {
  const project = document.createElement("li");
  project.innerText = repositories[i].name;
  projectList.appendChild(project);
}