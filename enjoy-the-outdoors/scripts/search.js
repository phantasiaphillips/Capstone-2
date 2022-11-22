"use strict";


window.onload = function () {
fillStateDropdown();
fillParkTypDropdown();

function fillStateDropdown() {
const stateSelect = document.getElementById("stateSlct");
let selectStateOpt = document.createElement("option");


selectStateOpt.value = "";
selectStateOpt.textContent = "Select a State...";
stateSelect.appendChild(selectStateOpt);


function currentlySelectedSearchType1() {
    let radioLocation = document.getElementById("radioLocationBtn");
    if (radioLocation == radioLocation) {
        selectLocationOptionShow();
        selectParkTypeOptionHide();
    }
};
 