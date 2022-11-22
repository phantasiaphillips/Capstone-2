"use strict";


window.onload = function () {
fillStateDropdown();
fillParkTypDropdown();

selectLocationOptionShow();
selectLocationOptionHide();
selectParkTypeOptionHide();
selectParkTypeOptionShow();

document.getElementById("radioLocationBtn").onchange = currentlySelectedSearchType1;
document.getElementById("radioParkTypeBtn").onchange = currentlySelectedSearchType2;
document.getElementById("stateSlct").onchange = nationalLocationSelectCards;
document.getElementById("parkTyp").onchange = nationalParkTypeSelectCards;
}


function fillStateDropdown() {
const stateSelect = document.getElementById("stateSlct");
let selectStateOpt = document.createElement("option");


selectStateOpt.value = "";
selectStateOpt.textContent = "Select a State...";
stateSelect.appendChild(selectStateOpt);


let locationLength = locationValues.length;
for (let i = 0; i < locationLength; i++) {
    let Opt1 = document.createElement("option");
        Opt1.value = locationValues[i];
        Opt1.textContent = locationValues[i];


    stateSelect.appendChild(Opt1);
    }
}




selectParkTyp.value = "";
selectParkTyp.textContent = "Select Park Type..."
parkType.appendChild(selectParkTyp);


let typeLength = ParkTypes.length;
    for (let i = 0; i < typeLength; i++) {
        let Opt2 = document.createElement("option");
        Opt2.value = ParkTypes[i];
        Opt2.textContent = ParkTypes[i];


    parkType.appendChild(Opt2);


function selectLocationOptionHide() {
    document.getElementById("stateContainer").style.display = "none";
}


function selectLocationOptionShow() {
    document.getElementById("stateContainer").style.display = "block";
}





function selectParkTypeOptionShow() {
    document.getElementById("parkTypContainer").style.display = "block";
}


function currentlySelectedSearchType1() {
    let radioLocation = document.getElementById("radioLocationBtn");
    if (radioLocation == radioLocation) {
        selectLocationOptionShow();
        selectParkTypeOptionHide();
    }
};
 