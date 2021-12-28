//Replace, slice y substring
const producto = "Monitor 20 pulgadas";

//.replace para remplazar una cadena de texto sin alterar la base de datos   
console.log(producto);
console.log(producto.replace("pulgadas", '"'));
console.log(producto.replace("Monitor", "Monitor curvo"));

// slice te va a permitir cortar una parte de una cadena de texto
// 0,10 caracter
console.log(producto.slice(0, 10));
//Aquí empieza a partir del 8vo caracter
console.log(producto.slice(8));
//El primer numero no puede ser mayor al segundo
console.log(producto.slice(2,1));

//substring es una alternativa al slice
console.log(producto.substring(0,10));
//substring recorta y empieza a partir del caracter que quieras
console.log(producto.substring(2,1));

// el substring hace el corte 
const usuario = "Juan";
console.log(usuario.substring(0,1));
//segunda forma de usar el substring 
console.log(usuario.charAt(0));
