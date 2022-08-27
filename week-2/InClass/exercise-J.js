function secondMatchesAmy(array) {
  if (array[1] === "Amy" ) {
    return "Second index matched!";
  }
  return "Second index not matched";
}
const names = ["Jose", "Amy", "Miguel"];
const names2 = ["Amy", "Jose", "Miguel"];
console.log (secondMatchesAmy(names));
console.log (secondMatchesAmy(names2));