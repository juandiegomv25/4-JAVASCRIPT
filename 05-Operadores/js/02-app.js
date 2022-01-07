//Comparar 2 Valores 
const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

/* COMPARADOR NO ESTRICTO "=="
1-Revisar si 2 nros son iguales 
2- No es muy estricto solo se fija en el valor
*/
console.log(numero1 == numero3);
console.log(numero1 == numero2);

/*COMPARADOR ESTRICTO "==="
1-Se fija en el valor y en el tipo de dato
2- usar 3 "=" seguidos sin espac
3- recordar que se puede convertir el strings
*/
console.log(numero1 === numero3);

// Si 2 valores son diferen.
const password1 = "admin";
const password2 = "Admin";

//Diferente "!=" no estricto
console.log(password1 != password2);
console.log(numero1 != numero2);

//Diferente "!==" estricto
console.log(numero1 !== numero2);
console.log(numero1 !== parseInt(numero2));