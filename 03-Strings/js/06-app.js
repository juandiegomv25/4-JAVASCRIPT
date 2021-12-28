//Repeat y Split

const producto = 'Monitor 20 pulgadas';

//permitir repetir una cadena de texto 
// Usando decimales el numero se redondea auto
const texto = ' en Promoción '.repeat(2.4);
console.log(texto);
console.log(`${producto} ${texto} !!!`)

//split, dividir un string 

const actividad = "Estoy aprendiendo Javascript Moderno";
//El espacio que se coloque dentro de estas comillas se mostrará en la consola 
console.log(actividad.split(" "))

//Ejemplo de un listado 
const hobbies= "leer, caminar, escuchar música, escribir, aprender a programar";
console.log(hobbies.split(", "));

//Twitter para resaltar los #
const tweet = "Aprendiendo Javascript #JSModernoConJuan";
console.log(tweet.split("#"))