// como concatenar dos cadenas de texto
const producto = "Monitor 20 pulgadas";
const precio = "30 USD";

//concatenar o unir dos variables
// console.log(producto.concat(precio));
// = se puede concatenar un string 
// console.log(producto.concat("En descuentos"));

// 2da forma de concatenar
console.log(producto + " con un precio de " + precio);


// 3ra forma de concatenar son importantes los "+" para evitar errores
console.log("El producto " + producto + " tiene un precio de " + precio);
// tambien se puede usar "," en vez de "+"
console.log("El producto " , producto , " tiene un precio de " , precio);


// NEW-FORM  concatenar conocida como Template, sintaxis cambia... usas el backtick y es mejor que la anterior cuando hay multiples variables
console.log(`El producto ${producto} tiene un precio de $ ${precio}`)