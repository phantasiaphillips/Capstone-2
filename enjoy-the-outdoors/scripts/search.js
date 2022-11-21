"use strict";


window.onload = function () {
    // dropdown fills
    fillStateDropdown();
    fillParkTypDropdown();


    // hide / show form fields
    selectLocationOptionShow();
    selectLocationOptionHide();
    selectParkTypeOptionHide();
    selectParkTypeOptionShow();


    // onchange events
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


function fillParkTypDropdown() {
    const parkType = document.getElementById("parkTyp");
    let selectParkTyp = document.createElement("option");


    selectParkTyp.value = "";
    selectParkTyp.textContent = "Select Park Type..."
    parkType.appendChild(selectParkTyp);


    let typeLength = ParkTypes.length;
    for (let i = 0; i < typeLength; i++) {
        let Opt2 = document.createElement("option");
        Opt2.value = ParkTypes[i];
        Opt2.textContent = ParkTypes[i];


        parkType.appendChild(Opt2);
    }
}




function selectLocationOptionHide() {
    document.getElementById("stateContainer").style.display = "none";
}


function selectLocationOptionShow() {
    document.getElementById("stateContainer").style.display = "block";
}


function selectParkTypeOptionHide() {
    document.getElementById("parkTypContainer").style.display = "none";
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
}


function currentlySelectedSearchType2() {
    let radioParkType = document.getElementById("radioParkTypeBtn");
    if (radioParkType == radioParkType) {
        selectParkTypeOptionShow();
        selectLocationOptionHide();
    }


}

function nationalLocationSelectCards() { // working..
    const resultsContainer = document.getElementById("resultsContainer");


    resultsContainer.innerHTML = "";


    let selectThisState = document.getElementById("stateSlct").value;


    for (let i = 0; i < nationalParks.length; i++) { // 
        if (nationalParks[i].State == selectThisState) {
            let outerDiv = document.createElement("div");
            outerDiv.className = "col-lg-4 col-sm-6";


            resultsContainer.appendChild(outerDiv);
            //--------------------------------------------------------
            let cardDiv1 = document.createElement("div");
            cardDiv1.className = "card";
            cardDiv1.style.width = "18rem";


            outerDiv.appendChild(cardDiv1);
            //--------------------------------------------------------
            let cardDiv2 = document.createElement("div");
            cardDiv2.className = "card-body";


            cardDiv1.appendChild(cardDiv2);
            //--------------------------------------------------------
            let h5 = document.createElement("h5");
            h5.className = "card-title";
            h5.innerHTML = nationalParks[i].LocationName;


            cardDiv2.appendChild(h5);
            //----------------------------------------------
            let p1 = document.createElement("p");
            p1.className = "card-text";
            p1.innerHTML = nationalParks[i].Address;


            cardDiv2.appendChild(p1);
            //----------------------------------------------
            let p2 = document.createElement("p");
            p2.className = "card-text";
            p2.innerHTML = nationalParks[i].City + " , " + nationalParks[i].State + "  " + nationalParks[i].ZipCode;


            cardDiv2.appendChild(p2);
            //----------------------------------------------
            let p3 = document.createElement("p");
            p3.className = "card-text";
            p3.innerHTML = nationalParks[i].Phone;


            cardDiv2.appendChild(p3);
            //----------------------------------------------
            let a = document.createElement("a");
            a.className = "btn btn-primary";
            a.innerText = "Visit Website";
            a.href = nationalParks[i].Visit;


            cardDiv2.appendChild(a);
        }
    }
}


function nationalParkTypeSelectCards() { // working
    const resultsContainer = document.getElementById("resultsContainer");


    resultsContainer.innerHTML = "";


    let selectParkType = document.getElementById("parkTyp").value;

    for (let i = 0; i < nationalParks.length; i++) { // 
        if (nationalParks[i].LocationName.indexOf(selectParkType) != -1) {
            let outerDiv = document.createElement("div");
            outerDiv.className = "col-lg-4 col-sm-6";


            resultsContainer.appendChild(outerDiv);
            //--------------------------------------------------------
            let cardDiv1 = document.createElement("div");
            cardDiv1.className = "card";
            cardDiv1.style.width = "18rem";


            outerDiv.appendChild(cardDiv1);
            //--------------------------------------------------------
            let cardDiv2 = document.createElement("div");
            cardDiv2.className = "card-body";


            cardDiv1.appendChild(cardDiv2);
            //--------------------------------------------------------
            let h5 = document.createElement("h5");
            h5.className = "card-title";
            h5.innerHTML = nationalParks[i].LocationName;


            cardDiv2.appendChild(h5);
            //----------------------------------------------
            let p1 = document.createElement("p");
            p1.className = "card-text";
            p1.innerHTML = nationalParks[i].Address;


            cardDiv2.appendChild(p1);
            //----------------------------------------------
            let p2 = document.createElement("p");
            p2.className = "card-text";
            p2.innerHTML = nationalParks[i].City + " , " + nationalParks[i].State + "  " + nationalParks[i].ZipCode;


            cardDiv2.appendChild(p2);
            //----------------------------------------------
            let p3 = document.createElement("p");
            p3.className = "card-text";
            p3.innerHTML = nationalParks[i].Phone;


            cardDiv2.appendChild(p3);
            //----------------------------------------------
            let a = document.createElement("a");
            a.className = "btn btn-primary";
            a.innerText = "Visit Website";
            a.href = nationalParks[i].Visit;


            cardDiv2.appendChild(a);
        }
    }
}
