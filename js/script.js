
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. 
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente,
// nell’ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// array per i 5 numeri casuali
let numbers = [];

// genera 5 numeri casuali
for (let i = 0; i < 5; i++){
    numbers.push(Math.floor(Math.random() * 50 ) + 1 );
}

// stampo i 5 numeri casuali
const ul = document.getElementById('numbers-list');
    numbers.forEach((number) => {
    ul.innerHTML += `<li>${number}</li>`;
});

// variabile per il timer di 30 secondi
let timer = 5;

//elemente in cui vedere il timer in pagina
let countdown = document.getElementById('countdown');

// funzione
let conteggio = setInterval(() => {

    // stampa il timer in pagina
    countdown.innerHTML = timer;

    // decrementa il timer
    timer--;

    // ferma il contatore quando arriva a 0
    if (timer < 0) {
        clearInterval(conteggio);
    

    //rimuovi contenuto ul impostandolo a stringa vuota
    ul.innerHTML = '';

    //fai apparire il form rimuovendo la classe d-none di bootstrap
    document.getElementById('answers-form').classList.remove('d-none');

 }

},1000);



// inserire i  5 numeri
const fiveNumber = [];

//seleziona l'elemento form
document.getElementById('answers-form').addEventListener('submit', (event) => {
    event.preventDefault();

    //seleziona  gli input del form
    const inputs = document.querySelectorAll('#answers-form input');

    //popola l'array con i valori degli input convertiti in numeri interi
    inputs.forEach(input => {
        fiveNumber.push(parseInt(input.value));
    });

    //verifica quanti numeri  combaciano
    const correctNumbers = numbers.filter((number) => fiveNumber.includes(number));

    //stampa in pagina  il risultato
    document.getElementById('message').innerHTML = `hai indovinato ${correctNumbers.length} numeri: ${correctNumbers.join(', ')}`;
});