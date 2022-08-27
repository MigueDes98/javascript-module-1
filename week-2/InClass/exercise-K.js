const students = [
  "Miguel",
  "Natalia",
  "Gabriel",
  "Xiomara",
  "Fernanda",
  "Laura",
  "Jacobo",
  "Litzy",
  "Andrea",
  "Cristina",
  "Elimar",
  "Graciela",
  "Karelys",
  "Jorge",
  "Lina",
  "Linda",
  "Maria",
  "Wiston",
  "Oswaldo",
  "Luis",
];

function allStudents (studentsArray){

for (let student = 0; student < students.length; student++) {
  console.log ("This student is: " + studentsArray[student]);
}
}
allStudents(students);