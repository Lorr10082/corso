document.getElementById('saluto').innerHTML='CIAO';
document.getElementById('saluto2').innerHTML='Altro saluto';

window.alert('Questo è un alert');
alert(8+9);

console.log('verifica in console');

numero=5;
document.getElementById('numero').innerHTML = numero;
document.getElementById('somma').innerHTML = numero + 6;

var altroTesto = 'numero 5';
document.getElementById('altroTesto').innerHTML = altroTesto;

function riassegna() {
    altroTesto = 'Ho cambiato il valore della variabile';
    document.getElementById('altroTesto').innerHTML = altroTesto;
}

setTimeout(riassegna, 2000);
