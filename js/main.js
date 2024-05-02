'use strict';

// prendo tutto gli attributi dell'input
const ageInput = document.getElementById('age-input');
const kmInput = document.getElementById('km-input');
const nameInput = document.getElementById('name-input');
//bottoni
const sendButton = document.getElementById('send-btn');
const ResetButton = document.getElementById('reset-btn');

const TicketGenerated = document.getElementById('ticket');
const TicketError = document.getElementById('error-ticket');
// console.dir(ageInput);
// console.dir(kmInput);




sendButton.addEventListener('click', function(){
    // prendo il valore del cliente messo nei campi input
    const ageInputValue = ageInput.value;
    const kmInputValue =kmInput.value;
    const nameInputValue = nameInput.value;


    const ageOtput = document.getElementById('offer-output');
    const kmOtput = document.getElementById('km-output');
    const nameOtput = document.getElementById('name-output');
    const priceOutput = document.getElementById('price-output');
    //variabili
    const prezzoKm = 0.21;
    const ageUnder = 18;
    const ageOver =  65;
    const discountUnder =  20;
    const discountOver = 40;
    if(kmInputValue> 0 && nameInputValue !== ""){
        TicketError.classList.add('ts-d-hidden');
        //calcolo il prezzo totale senza sconti basati sull'età
        let prezzoTot = kmInputValue * prezzoKm;
        //calcolo il prezzo totale in base all'età
        if (ageInputValue === 'under' ) {
            prezzoTot -= (prezzoTot / 100 * discountUnder);
        }
        else if (ageInputValue === 'over') {
            prezzoTot -= (prezzoTot / 100 * discountOver);
        }
        //lascio solo 2 decimali
        prezzoTot= prezzoTot.toFixed(2);
        // console.log("il prezzo totale da pagare è: "+prezzoTot+"€");
        TicketGenerated.classList.remove('ts-d-hidden'); 
        ageOtput.innerText = ageInputValue;
        kmOtput.innerText = kmInputValue + "km";
        nameOtput.innerText = nameInputValue;
        priceOutput.innerText = prezzoTot + " €";
    }
    else {
        console.log("valore dei kilometri o nome non validi");
        TicketGenerated.classList.add('ts-d-hidden'); 
        TicketError.classList.remove('ts-d-hidden');
    }

})


ResetButton.addEventListener('click', function(){
    TicketError.classList.add('ts-d-hidden');
    TicketGenerated.classList.add('ts-d-hidden'); 
    nameInput.value = "";
    ageInput.value = "standard";
    kmInput.value = "";
})
