// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiply(number) {
  return number * 100;}
var numbersMultiply = numbers.map(multiply);
console.log(numbersMultiply);

var numbersMultiply2 = numbers.map(function multiply2(number) {
  return number * 100;});
console.log(numbersMultiply2);

var numbersMultiply3 = numbers.map(function (number) {
  return number * 100;});
  console.log(numbersMultiply3);

var numbersMultiply4 = numbers.map(number => {
  return number * 100});
  console.log(numbersMultiply4);

var numbersMultiply5 = numbers.map(number => number * 100)
console.log(numbersMultiply5);