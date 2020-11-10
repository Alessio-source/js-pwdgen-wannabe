var nome = prompt("qual'è il tuo nome?");
var cognome = prompt("qual'è il tuo cognome?");
var colore = prompt("qual'è il tuo colore preferito?");

var passwordSpan = document.getElementById('password');

passwordSpan.innerHTML = nome + cognome + colore + Math.floor(Math.random() * 1000) ;
