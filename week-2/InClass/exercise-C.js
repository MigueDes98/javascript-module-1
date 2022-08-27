function numberChecker(num) {
  if (num > 20) {
    return `${num} is greater than 20`;
    // Si el valor del parametro num de la funcion numberChecker es mayor a 20, 
    //debe regresar una string que diga que ese valor es mayor a 20
  } else if (num === 20) {
    return `${num} is equal to 20`;
    // Si el valor de num es igual en valor y tipo a 20, debe regresar una string que
    //diga que num es igual a 20
  } else if (num < 20) {
    return `${num} is less than 20`;
    // Si el valor de num es menor a 20, debe regresar una string que diga que num es
    // menor que 20
  } else {
    return `${num} isn't even a number :(`;
    // Si el valor de num no cumple con ninguno de los otros requisitos, entonces
    //debe regresar una string que diga que num no es un numero
  }
}
// Si colocamos una string como valor de num, nos regresara la ultima condicional
// es decir: "num isn't even a number"
console.log(numberChecker (50));
console.log(numberChecker (20));
console.log(numberChecker (10));
console.log(numberChecker ("20"));