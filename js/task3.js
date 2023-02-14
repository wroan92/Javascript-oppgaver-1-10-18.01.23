// To do: Clear input when try again. 
const cardContainer = document.querySelector(".hide");
const inputContainer = document.querySelector(".inputContainer");


document.querySelector("#makePersonasBtn").addEventListener("click", event =>  {

    cardContainer.classList.replace("hide", "cardContainer");
    inputContainer.classList.replace("inputContainer", "hide");


    const firstName = document.querySelector("#firstNameInput").value;
    const lastName = document.querySelector("#lastNameInput").value;
    const age = document.querySelector("#ageInput").value;
    const city = document.querySelector("#cityInput").value;
    const country = document.querySelector("#countryInput").value;

    document.querySelector("#outputContainer").innerHTML = 
    `Navn: ${firstName} ${lastName} <br>
     Alder: ${age} <br>
     Bosted: ${city} <br>
     Land: ${country}`;
     
  });

document.querySelector("#tryAgainBtn").addEventListener("click", event => {
   
    cardContainer.classList.replace("cardContainer", "hide");
    inputContainer.classList.replace("hide", "inputContainer");
    
});
