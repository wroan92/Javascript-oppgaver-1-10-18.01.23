document.addEventListener("DOMContentLoaded", function() {
  const navbarContainer = document.querySelector("header")
  
  const nav = document.createElement("nav");
  const navbar = document.createElement("ul");

  const homeBtn = document.createElement("a")
  homeBtn.className = "homeBtn"
  homeBtn.href = "./index.html";
  homeBtn.innerText = "Hjem"
  
  const taskOne = document.createElement("li");
  const taskOneLink = document.createElement("a");
  taskOneLink.href = "./oppgave1.html";
  taskOneLink.innerText = "Oppgave 1";
  taskOne.appendChild(taskOneLink);

  const taskTwo = document.createElement("li");
  const taskTwoLink = document.createElement("a");
  taskTwoLink.href = "./oppgave2.html";
  taskTwoLink.innerText = "Oppgave 2";
  taskTwo.appendChild(taskTwoLink);
  
  const taskThre = document.createElement("li")
  const taskThreLink = document.createElement("a")
  taskThreLink.href = "./oppgave3.html"
  taskThreLink.innerText = "Oppgave 3"
  taskThre.appendChild(taskThreLink)
  
  const taskFour = document.createElement("li")
  const taskFourLink = document.createElement("a")
  taskFourLink.href = "./oppgave4.html"
  taskFourLink.innerText = "Oppgave 4"
  taskFour.appendChild(taskFourLink)
  
  const taskFive = document.createElement("li")
  const taskFiveLink = document.createElement("a")
  taskFiveLink.href = "./oppgave5.html"
  taskFiveLink.innerText = "Oppgave 5"
  taskFive.appendChild(taskFiveLink)
  
  const taskSix = document.createElement("li")
  const taskSixLink = document.createElement("a")
  taskSixLink.href = "./oppgave6.html"
  taskSixLink.innerText = "Oppgave 6"
  taskSix.appendChild(taskSixLink)
  
  navbarContainer.appendChild(homeBtn);
  navbar.appendChild(taskOne);
  navbar.appendChild(taskTwo);
  navbar.appendChild(taskThre);
  navbar.appendChild(taskFour);
  navbar.appendChild(taskFive);
  navbar.appendChild(taskSix);
  
  nav.appendChild(navbar);
  navbarContainer.appendChild(nav);
});
