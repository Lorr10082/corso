/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

document.getElementById('titolo').innerHTML= 'Principali Datatype di Java:';
document.getElementById('l1').innerHTML= 'Dato Stringa';
document.getElementById('l2').innerHTML= 'Dato Numero';
document.getElementById('l3').innerHTML= 'Dato Booleano';
document.getElementById('descrizione').innerHTML= 'La stringa è definita dagli apici e comprende qualsiasi dato alfanumerico al suo interno, <br> il dato numerico comprende numeri sia interi che decimali,<br> il dato Booleano ammette solamente due valori: TRUE o FALSE.';


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var nome='Lorenzo';

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numero=12;
document.getElementById('numero').innerHTML = numero;
document.getElementById('somma').innerHTML = numero + 20;
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var x = 12;
document.getElementById('x').innerHTML = x;
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var nome= 'Lorenzo';
nome='Tolla';
document.getElementById('mioNome').innerHTML = nome;
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
document.getElementById('sottrazione').innerHTML = x - 4;
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
var nome1 = 'john';
var nome2 = 'John';


if(nome1==nome2) {
    console.log('le variabili sono uguali');
} else {
    console.log('le variabili non sono uguali');
}


document.getElementById('nome1').innerHTML = nome1;
document.getElementById('nome2').innerHTML = nome2;
document.getElementById('esito').innerHTML = stato;

/* SCRIVI QUI LA TUA RISPOSTA */


