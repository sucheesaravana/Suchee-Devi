const containerdiv = document.getElementById("container")
console.log(containerdiv);

const headerh2 = document.querySelector(".title")
console.log(headerh2);

headerh2.textContent = "DOM Practice Header";
headerh2.style.color = "blue";

const newP = document.createElement('p')
console.log(newP);

newP.textContent = "This is a new Pargraph";
newP.setAttribute ="data status attribute","created";

containerdiv.appendChild(newP);

const paragraph = document.querySelectorAll("p");
console.log(paragraph.length);

for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].style.backgroundColor = "lightgray";
}
