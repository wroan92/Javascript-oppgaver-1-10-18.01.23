document.addEventListener("DOMContentLoaded", function() {
  const navbarContainer = document.querySelector("header")
  
  const nav = document.createElement("nav");
  const navbar = document.createElement("ul");
  
  const home = document.createElement("li");
  const homeLink = document.createElement("a");
  homeLink.href = "./index.html";
  homeLink.innerText = "Hjem";
  home.appendChild(homeLink);

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
  
  
  navbar.appendChild(home)
  navbar.appendChild(taskOne);
  navbar.appendChild(taskTwo);
  
  nav.appendChild(navbar);
  navbarContainer.appendChild(nav);
});
