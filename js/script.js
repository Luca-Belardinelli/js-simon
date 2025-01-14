
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

// inseriamo il timer in pagina

