function dateBirth (age) {
  return 2022 - age;
}

function greeting(name, age) {
  var date = dateBirth(24);
  var name = "Miguel";
 return "My name is " + name + " and I was born in the year " + date;
}

console.log (greeting());