const birthYears = [ 2015, 2008, 1999, 2005, 1998, 2006 ];
const newDate = new Date()
const allYear = newDate.getFullYear()
function canDrive (year) {
const ages = allYear - year;
    if (ages >= 17) 
    { return "These are the birth years of people who can drive: " + year; }
}
const peopleDrive = birthYears.filter(canDrive);
console.log(peopleDrive);
