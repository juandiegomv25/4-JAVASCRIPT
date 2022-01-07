//Comparar Null y undefined en js 

/*undefined
La variable esta definiada pero su valor no.
*/
let numero;

console.log(numero);
//console.log(typeof numero);

//Null 
let numero2 = null;

console.log(numero2);
//Aqui se refiere que los null deben ser un objeto 
//console.log(typeof numero2);

//se recomienda usar el comparador estricto
console.log(numero === numero2);