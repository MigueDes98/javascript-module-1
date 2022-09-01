const students = [
  "Gabriel",
  "Natalia",
  "Graciela",
  "Linda",
  "Lina",
  "Laura",
  "Andrea",
  "Fernanda",
  "Luis",
  "Lixi",
  "Wiston",
  "Oswaldo",
  "Karelys",
];
const newStudents =  students.concat(["Steve", "George", "Jessica", "Sarah"]);
const nameOrder = newStudents.sort();
console.log(nameOrder);
function nameArray (name){
    if (nameOrder.includes(name)) {
        return name +  " is at the class with " + nameOrder.join(", ");
    }
    else {
        return name + " is not at the class with " + nameOrder.join(", ");
    }
}
const myName = nameArray("Miguel");
const otherName = nameArray("Sarah");
console.log(myName);
console.log(otherName);