const names = ["Juan", "Tadeo", "Pablo", "Lucas", "Miguel", "Martin", "Pedro"];
function hereIAm (findName) {
     if (names.find((myName) => myName === findName)) 
     return  "Found me!";
     else return  "Haven't found me :(";
    }
console.log(hereIAm("Miguel"));
console.log(hereIAm("Jose"));