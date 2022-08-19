var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function nameSpelling (mentor){
return mentor.toUpperCase();
}
function shoutyGreeting (mentor){
    const myMentor = nameSpelling (mentor1);
    const message = "HI " + myMentor;
    return message;
}

function shoutyGreeting2 (mentor){
    const myMentor = nameSpelling (mentor2);
    const message = "HI " + myMentor;
    return message;
}

function shoutyGreeting3 (mentor){
    const myMentor = nameSpelling (mentor3);
    const message = "HI " + myMentor;
    return message;
}

function shoutyGreeting4 (mentor){
    const myMentor = nameSpelling (mentor4);
    const message = "HI " + myMentor;
    return message;
}

function shoutyGreeting5 (mentor){
    const myMentor = nameSpelling (mentor5);
    const message = "HI " + myMentor;
    return message;
}

console.log (shoutyGreeting());
console.log (shoutyGreeting2());
console.log (shoutyGreeting3());
console.log (shoutyGreeting4());
console.log (shoutyGreeting5());