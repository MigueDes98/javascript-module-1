var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function nameSpelling (mentor){
return mentor.toUpperCase();
}
function shoutyGreeting (mentor){
    const myMentor = nameSpelling (mentor);
    const message = "HELLO " + myMentor;
    return message;
}

console.log (shoutyGreeting(mentor1));
console.log (shoutyGreeting(mentor2));
console.log (shoutyGreeting(mentor3));
console.log (shoutyGreeting(mentor4));
console.log (shoutyGreeting(mentor5));

//Alternativa
//const greeting1 = shoutyGreeting(mentor1);
//const greeting2 = shoutyGreeting(mentor2);
//const greeting3 = shoutyGreeting(mentor3);
//const greeting4 = shoutyGreeting(mentor4);
//const greeting5 = shoutyGreeting(mentor5);

//console.log (greeting1);
//console.log (greeting2);
//console.log (greeting3);
//console.log (greeting4);
//console.log (greeting5);