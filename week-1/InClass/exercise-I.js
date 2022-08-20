function dateBirth (age) {
  return 2022 - age;
}

function greeting(name, age) {
  const date = dateBirth(24);
  const myName = "Miguel";
 return "My name is " + myName + " and I was born in the year " + date;
}

console.log (greeting());