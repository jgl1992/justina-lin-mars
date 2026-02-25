index.js
#lesson-13
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