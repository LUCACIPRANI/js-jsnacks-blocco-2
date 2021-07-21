// ESERCIZIO 1 
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

var NumeroInserito = parseInt(prompt("inserisci un numero "));

for(i = 0; i < NumeroInserito; i++){

    if (NumeroInserito % 2 == 0) {
        console.log("numero pari: " + NumeroInserito);
        document.getElementById("list").innerHTML = ("Numero pari " + NumeroInserito);
    } else {
        console.log("numero dispari: " + (NumeroInserito + 1));
        document.getElementById("list").innerHTML = ("Stampo numero successivo al dispari " + parseInt(NumeroInserito + 1));
    }
}

// ESERCIZIO 2
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

var nomi = ["Paolo", "Mike", "Tim", "Michele"];
console.log(nomi);
var cognomi = ["Rossi", "Verdi", "Gialli", "Marroni"];
console.log(cognomi);

var random;
var random_2;

for(var i = 0; i < 4; i++) {
    random = Math.floor(Math.random() * nomi.length);
    random_2 = Math.floor(Math.random() * cognomi.length);
    console.log((nomi[random]) + (" ") + cognomi[random_2]);
}

// ESERCIZIO 3
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

var numeri = [1, 10, 1, 10, 1, 10, 1, 10, 1, 10];
console.log(numeri);

var OddSum = 0;

for(var i = 0; i < numeri.length; i++) {
    if(i % 2 != 0) {
        OddSum = OddSum + numeri[i];
    }
}

console.log("Somma dispari è " + OddSum);

// ESERCIZIO 4
// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

var array_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var array_2 = [1, 2, 3, 4, 5, 6, 7];
var lunghezzaArrays = array_2.length || array_1.length;

console.log(array_1, array_2);

var i = 0;

var nuovoElemento = 2;

for(i = 0; i < lunghezzaArrays; i++){

    if(array_1.length < array_2.length) {
        array_1.push(nuovoElemento);
        
    } else if((array_1.length > array_2.length)) {
        array_2.push(nuovoElemento);
    }
}

console.log(array_1, array_2);
