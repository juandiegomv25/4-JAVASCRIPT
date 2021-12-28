// Como cortar espacios en blanco de una cadena de texto 
// los espacios en blanco son considerados en la cadena de texto
const producto = "       Monitor 20 pulgadas        ";

console.log(producto);
// cuenta espacios como en excel no solo caracteres 
console.log(producto.length); 

// Eliminar del inicio los espacios en blanco 
console.log( producto.trimStart() );
// se usa para eliminar el espacio en blanco final 
console.log( producto.trimEnd() );
// tecnica para anidar los trim y eleminar los espacios en blanco al mismo tiempo 
console.log( producto.trimStart().trimEnd());

//Metodo usado desde siempre en javascript
console.log( producto.trim() ); 