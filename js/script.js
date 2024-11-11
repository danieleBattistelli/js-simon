//seleziono tutti gli input
const numeriCasuali = document.getElementById('numeriCasuali');
const timer = document.getElementById('counter');
const inputsForm = document.getElementById('inputs');
const risultatoDiv = document.getElementById('risultato');
const userInputElements = document.querySelectorAll('.user-input');



// Genero 5 numeri casuali tra 0 e 99
let numeri = [];
for (let i = 0; i < 5; i++) {
    numeri.push(Math.floor(Math.random() * 100));

}
numeriCasuali.textContent = numeri.join(', ');
//visualizzo i numneri generati
numeriCasuali.classList.remove('hidden');
//visualizzo il timer
timer.classList.remove('hidden');

let tempoRimanente = 30;
const countdown = setInterval(function () {
    timer.innerHTML = counter;
    timer.textContent = `Tempo rimanente: 
    ${tempoRimanente} secondi`;
    tempoRimanente--;
    if (tempoRimanente < 0) {
        clearInterval(countdown);
        numeriCasuali.classList.add('hidden');
        inputsForm.classList.remove('hidden');
    }
}, 1000);

inputsForm.addEventListener('submit', function (event) {
    // blocca  pl'aggiornamento automatico del form
    event.preventDefault();
    const userInputs = [];
    const numeriIndovinati = [];
    for (let i = 0; i < userInputElements.length; i++) {
        const inputVal = userInputElements[i].value;
        userInputs.push(inputVal);
        
        if (numeri.includes(parseInt(inputVal))) {
            numeriIndovinati.push(parseInt(inputVal));
        }
    }
    risultatoDiv.textContent = `Hai indovinato ${numeriIndovinati.length} numeri: ${numeriIndovinati.join(', ')}`;
});
