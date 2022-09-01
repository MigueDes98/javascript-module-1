const yearBorn = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];
yearBorn.forEach(function (birth) {
    const age = 2022 - birth;
    const canDrive = 17 - age;
    if (age >= 17) {return console.log("Born in " + birth + " can drive");}
    else {return console.log("Born in " + birth + " can drive in " + canDrive + " years");}
})