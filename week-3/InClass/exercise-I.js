const messy = [
  100,
  "iSMael",
  55,
  45,
  "sANyiA",
  66,
  "JaMEs",
  "eLAmIn",
  23,
  "IsMael",
  67,
  19,
  "ElaMIN",
];
const noMessy = messy.filter(mess => typeof mess === "string").map(mess1 => mess1.toUpperCase() + "!")
console.log(noMessy);





//const names = ["Juan", "Tadeo", "Pablo", "Lucas", "Miguel", "Martin", "Pedro"];
//function formatName(name) {
  //return name.split("")[0].toLowerCase() + name.slice(1);}

//function log(name, index) {
//  console.log(index + ": " + name);}

//names.map(formatName).forEach(log);