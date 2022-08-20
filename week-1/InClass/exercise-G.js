const totalNumberOfStudentsAndMentors = 23;
const numberOfStudents = 15;
const numberOfMentors = 8; 
console.log ("Percentage students: " + Math.round ((numberOfStudents * 100) / totalNumberOfStudentsAndMentors) + "%");
console.log ("Percentage mentors: " + Math.round ((numberOfMentors * 100) / totalNumberOfStudentsAndMentors) + "%");
// alternativa: 
const percentageStudents = (numberOfStudents * 100) / totalNumberOfStudentsAndMentors;
const percentageMentors =  (numberOfMentors * 100) / totalNumberOfStudentsAndMentors;
console.log ("Percentage students: " + Math.round (percentageStudents) + "%");
console.log ("Percentage mentors: " + Math.round (percentageMentors) + "%");
//Alternativa 2:
const percentageMentors1 = Math.round((numberOfStudents * 100) / totalNumberOfStudentsAndMentors);
const percentageStudents1 = Math.round((numberOfStudents * 100) / totalNumberOfStudentsAndMentors);
console.log ("Percentage students:", percentageStudents1)
console.log (`Percentage mentors: ${percentageMentors1}` )

