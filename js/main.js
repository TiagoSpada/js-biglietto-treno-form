'use strict';

// prendo tutto gli attributi dell'input
const ageInput = document.getElementById('age-input');
const kmInput = document.getElementById('km-input');
//bottone per inviare e generare il biglietto
const sendButton = document.getElementById('send-button');

// console.dir(ageInput);
// console.dir(kmInput);

sendButton.addEventListener('click', function(){
    // prendo il valore del cliente messo nei campi input
    const ageInputValue = document.getElementById('age-input').value;
    const kmInputValue = document.getElementById('km-input').value;
    //variabili
    const prezzoKm = 0.21;
    const ageUnder = 18;
    const ageOver =  65;
    const discountUnder =  20;
    const discountOver = 40;
    if(ageInputValue> 0 && kmInputValue> 0){
        //calcolo il prezzo totale senza sconti basati sull'età
        let prezzoTot = kmInputValue * prezzoKm;
        //calcolo il prezzo totale in base all'età
        if (ageInputValue < ageUnder) {
            prezzoTot -= (prezzoTot / 100 * discountUnder);
        }
        else if (ageInputValue >= ageOver) {
            prezzoTot -= (prezzoTot / 100 * discountOver);
        }
        //lascio solo 2 decimali
        prezzoTot= prezzoTot.toFixed(2);
        console.log("il prezzo totale da pagare è: "+prezzoTot+"€");    
    }
    else {
        console.log("uno dei due valori non è inserito correttamente");
    }

})