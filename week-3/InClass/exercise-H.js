const names = ["Juan", "Tadeo", "Pablo", "Lucas", "Miguel", "Martin", "Pedro"];
function hereIAm (name) {
     if (name === "Miguel") 
     return  console.log("Found me!");
     else return  console.log("Haven't found me :(");
    }
const findMe = names.find(hereIAm);
console.log(findMe);