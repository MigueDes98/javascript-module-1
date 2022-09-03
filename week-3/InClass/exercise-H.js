const names = ["Juan", "Tadeo", "Pablo", "Lucas", "Miguel", "Martin", "Pedro"];
function hereIAm (name) {
     if (names.find(names => names === name)) 
     return  "Found me!";
     else return  "Haven't found me :(";
    }
console.log(hereIAm("Pablo"));
console.log(hereIAm("Jose"));