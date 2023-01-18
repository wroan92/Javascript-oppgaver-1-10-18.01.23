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

const cityQty = document.querySelector("#citys").value;
for (let i = 0; i < cityNames.length; i++) {
  document.querySelector(
    "#cityList"
  ).innerHTML += `<li> ${cityNames[i]} </li>`;
}

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
