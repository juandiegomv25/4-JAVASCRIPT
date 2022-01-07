//convertir un string a números

const numero1 = "20";//string
console.log(numero1);

/*
1- Convertir un string a número, color azul no negro
2- .parseInt convierte solo en nros enteros
3- console.log(typeof numero1); el typeof te indica que es un string
*/
console.log(Number.parseInt(numero1));

//Como hay decimal, se usa 
const numero2 = "20.2";
console.log(Number.parseFloat(numero2));

/*
1- NaN indica que el string no es un digito. 
*/
const numero3 = "Uno";
console.log(Number.parseInt(numero3));


const numero4 = 20;
//Indica con T o F si el nro es entero 
console.log(Number.isInteger(numero4));

