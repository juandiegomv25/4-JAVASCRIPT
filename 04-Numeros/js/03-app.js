// Objet Math: Operaciones
let resultado;

//PI 
resultado = Math.PI;
console.log(resultado); 

//Redondear, funciona como en las notas de la uni 
resultado1 = Math.round(2.8);
console.log(resultado1); 

resultado2 = Math.round(2.2); 
console.log(resultado2); 

resultado3 = Math.round(2.6);
console.log(resultado3); 

resultado4 = Math.round(2.5);
console.log(resultado4); 

resultado5 = Math.round(2.45);
console.log(resultado5); 
 
//Redondear hacia arriba a la fuerza
resultado6 = Math.ceil(10.1);
console.log(resultado6); 

//Redondear hacia abajo a la fuerza x
resultado7 = Math.floor(10.9)
console.log(resultado7);

// Raiz cuadrada 
resultado8 = Math.sqrt(144);
console.log(resultado8);

//Absoluto (trae el valor sin el -)
resultado9 = Math.abs(-500);
console.log(resultado9);

//Potencia (funciona como 2 a la potencia 4)
resultado10 = Math.pow(2,4);
console.log(resultado10);

//Mínimo (de una serie de valores atrae el valor + peq.)
resultado11 = Math.min(3,5,1,12,-3);
console.log(resultado11);

//Aleatorio (igual que en excel entre 0-1), se puede anidar con un simbolo de *,+,-,/
resultado12 = Math.random();
console.log(resultado12);

//Aleatorio dentro de un rango...
resultado13 = Math.floor(Math.random() * 30);
console.log(resultado13);