function myAge (a, j) 
{
    return a * j
};
const myGreeting = myAge (12, 2);
const name = "Hi im Miguel";
const nameResults = `${name} and i am ${myGreeting} years old`;
console.log(nameResults);
// La funcion myAge que debe retornar una multiplicacion entre 2 parametros
// La variable myGreeting es igual a la funcion myAge cuando sus parametros son 12 y 2
// Por lo tanto la operacion de la funcion seria 12 * 2 que es 24
//Osea que myAge = myGreeting =  24, cuando los parametros son 12 y 2
//Luego creo y defino la variable name
//En la variable nameResults uno a name y results junto con un texto adicional usando string concatenation