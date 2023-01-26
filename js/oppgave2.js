let index = 0;
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
for (let i = 0; i < cityNames.length; i++) {
  document.querySelector("#cityList").innerHTML += `<li> ${cityNames[i]} </li>`;
}
addEventListener("keypress", event => {
  if (event.key === "Enter")
    limit = document.getElementById("limitInput").value;
    if(limit < 1) limit = 1;
    if(limit > cityNames.length) limit = cityNames.length;
    document.querySelector("#cityList").innerHTML = "";
    for (let i = 0; i < limit; i++) {
        document.querySelector("#cityList").innerHTML += `<li> ${cityNames[i]} </li>`;
}});
document.querySelector("#incrementBtn").addEventListener("click", function() {
  if (limit < cityNames.length) {
      limit++;
      document.querySelector("#cityList").innerHTML = "";
      for (let i = 0; i < limit; i++) {
        document.querySelector("#cityList").innerHTML += `<li> ${cityNames[i]} </li>`;
      }
  }
});
document.querySelector("#decrementBtn").addEventListener("click", function() {
  if (limit > 1) {
      limit--;
      document.querySelector("#cityList").innerHTML = "";
      for (let i = 0; i < limit; i++) {
        document.querySelector("#cityList").innerHTML += `<li> ${cityNames[i]} </li>`;
      }
  }
});


for (let i = 0; i < cityNames.length; i++) {
  if (i === 3) {
    break;
  }
  document.querySelector(
    "#cityList1"
  ).innerHTML += `<li> ${cityNames[i]} </li>`;
}

for (let i = 5; i < cityNames.length; i++) {
  document.querySelector(
    "#cityList2"
  ).innerHTML += `<li> ${cityNames[i]} </li>`;
}
