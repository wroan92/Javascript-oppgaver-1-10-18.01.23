const cityNames = [
  "Sandefjord",
  "Tønsberg",
  "Drammen",
  "Larvik",
  "Oslo",
  "Bergen",
  "Trondheim",
  "Tromsø",
  "Vadsø",
  "Stavanger",
];
let limit = 10;

updateCityList = (limit) => {
  document.querySelector("#cityList").innerHTML = "";
  for (let i = 0; i < limit; i++) {
    document.querySelector("#cityList").innerHTML += `<li> ${cityNames[i]} </li>`;
  }
}

updateCityList(limit);

document.querySelector("#incrementBtn").addEventListener("click", function() {
  if (limit < cityNames.length) {
    limit++;
    updateCityList(limit);
  }
});

document.querySelector("#decrementBtn").addEventListener("click", function() {
  if (limit > 1) {
    limit--;
    updateCityList(limit);
  }
});

document.querySelector("#citysInput").addEventListener("keypress", event => {
  if (event.key === "Enter") {
    limit = document.getElementById("citysInput").value;
    if(limit < 1) limit = 1;
    if(limit > cityNames.length) limit = cityNames.length;
    updateCityList(limit);
  }
});

document.querySelector("#cityList1").innerHTML = cityNames.slice(0,3).map(city => `<li>${city}</li>`).join("")
document.querySelector("#cityList2").innerHTML = cityNames.slice(5).map(city => `<li>${city}</li>`).join("")
