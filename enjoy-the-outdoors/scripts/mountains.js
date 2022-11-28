"use strict";

const selectMountain = document.querySelector("#selectMountain");
const resultContainer = document.querySelector(".result-con");
const loading = document.querySelector(".loading");

import { mountainsArray } from "./mountainData.js";


window.onload = init;
function init() {
    generateDropdown();
}


function generateDropdown() {
    const mountainOptions = mountainsArray.map((mont) => {
        return `<option value = ${mont.name}>${mont.name}</option>`;
    });
    selectMountain.innerHTML =
        ' <option value="">Select Mountain</option>' + mountainOptions;
}


async function findSelectedMountainData(mountName) {
    loading.style.display = "block";
    const mountainData = mountainsArray.find((mont) => mountName == mont.name);
    let lat = mountainData.coords.lat;
    let lng = mountainData.coords.lng;
    const sunsetData = await getSunsetForMountain(lat, lng);
    generateHTML(mountainData, sunsetData);
    loading.style.display = "none";
}


selectMountain.addEventListener("change", () => {
    var text = selectMountain.options[selectMountain.selectedIndex].text;
    findSelectedMountainData(text);
});


async function getSunsetForMountain(lat, lng) {
    let response = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
    );
    let data = await response.json();
    return data;
}


function generateHTML(details, sunsetData) {
    resultContainer.innerHTML = ` <h1>${details.name}</h1>
    <img src="images/${details.img}" alt="" />
    <p>
      <span>Description:</span>
      ${details.desc}
    </p>
    <div class="mount-card-footer">
      <p>Elevation: ${details.elevation}</p>
      <p>Sunrise: ${sunsetData.results.sunrise}</p>
      <p>Sunset: ${sunsetData.results.sunset}</p>
    </div>`;
}