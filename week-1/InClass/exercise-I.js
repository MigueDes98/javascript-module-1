function currentYear() {
    const date = new Date();
    return date.getFullYear();
}
//esto se hace para que siempre tengamos el valor del año actual en vez de estar actualizandolo todos los años

function dateBirth (age) {
  return currentYear() - age;
}

function greeting(name, age) {
  const myDate = dateBirth(age);
  const message = "My name is " + name + " and I was born in the year " + myDate;
  return message;
  }

console.log (greeting("Miguel", 24));

//Alternativa

const myGreeting = greeting ("Pedro", 21);
console.log (myGreeting);