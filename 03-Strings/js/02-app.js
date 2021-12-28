//Metodos para los strings o cadenas de texto
const producto = "Monitor 20 pulgadas";

console.log(producto);

// para saber cuantos caracteres tiene una cadena de texto
// no tiene parentesis por la propiedades de ciertos strings
console.log(producto.length);

// esto sirve para la busqueda de texto, te dirá la posición, incluso -1 si no lo puedo encontrar
console.log(producto.indexOf("Monitor"));

// con true o false te dirá si esta presente en la cadena de texto 
console.log(producto.includes("Tablet"));
console.log(producto.includes("Monitor"));
console.log(producto.includes("monitor"));