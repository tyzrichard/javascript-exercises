const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redText = document.createElement("p");
redText.style.color = "red";
redText.textContent = "Hey I'm red!";

container.appendChild(redText);

const blueText = document.createElement("h3");
blueText.style.color = "blue";
blueText.textContent = "I'm a blue h3!";

container.appendChild(blueText);

const myDiv = document.createElement("div");
myDiv.style.borderColor = "black";
myDiv.style.backgroundColor = "pink";

const header = document.createElement("h1");
header.textContent = "Im in a div";

const paragraph = document.createElement("p");
paragraph.textContent = "me too!!";

myDiv.appendChild(header);
myDiv.appendChild(paragraph);

container.appendChild(myDiv);