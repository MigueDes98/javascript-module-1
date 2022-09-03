const birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const newDate = new Date()
const allYear = newDate.getFullYear()
birthYear.forEach(function (birth) {
  console.log (allYear - birth);
})