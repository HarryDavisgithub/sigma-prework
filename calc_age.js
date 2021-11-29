// let date1 = "1990-01-01";

// console.log("Please input a date (YYYY-MM-DD)");
// let date2 = prompt();
// console.log(Math.floor((Date.now() - Date.parse(date2)) / 3.154e10));

function getAge(dInput) {
  let dateDiff = Date.now() - Date.parse(dInput); //gets the ms since epoch and subtracts that with the ms between epoch and the input date

  return new Date(dateDiff).getUTCFullYear() - 1970; //creates a new date object based on the ms between now and input
  //, gets the universal time based on the number of ms since epoch and subtracts 1970. This gives the amount of time between
  // the two dates.
}

function print() {
  console.log("Please input a date (YYYY-MM-DD)");
  let dateInput = prompt();
  console.log(getAge(dateInput));
}

print();
