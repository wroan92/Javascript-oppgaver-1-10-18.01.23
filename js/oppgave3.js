const cardBtn = document.querySelector("#makePersonasBtn")

document.querySelector("#makePersonasBtn").addEventListener("click", event =>  {
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
  
  