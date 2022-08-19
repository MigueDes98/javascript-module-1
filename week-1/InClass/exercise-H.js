const myGreeting = function myAge (a, j) 
{
    return a * j
};
const results = myGreeting (12, 2);
const name = "Hi im Miguel";
const nameResults = `${name} and i am ${results} years old`;
console.log(nameResults);
// La variable myGreeting = funcion myAge que debe retornar una multiplicacion entre 2 parametros
// La variable results es igual a la de myGreeting cuando sus parametros son 12 y 2
// Y como myGreeting = myAge, los parametros de esta funcion tambien son 12 y 2 en ese orden
// Por lo tanto la operacion de la funcion seria 12 * 2 que es 24
//Osea que myAge = myGreeting = results = 24, cuando los parametros son 12 y 2
//Luego creo y defino la variable name
//En la variable nameResults uno a name y results junto con un texto adicional usando string concatenation