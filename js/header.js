const navbarContainer = document.querySelector("header");

createNav = () => {
const nav = document.createElement("nav");
const ul = document.createElement("ul");
  navbarContainer.appendChild(nav);
  nav.appendChild(ul);

// Add home button
const homeBtn = document.createElement("li");
  homeBtn.innerHTML = `<a href="./index.html">Hjem</a>`;
  ul.appendChild(homeBtn);

  for (let i = 1; i <= 6; i++) {
const newLi = document.createElement("li");
    newLi.innerHTML = `<a href="./task${i}.html">Oppgave ${i}</a>`;
    ul.appendChild(newLi);
  }
};

createNav();
