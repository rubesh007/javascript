/* CONDITIONAL STATEMENTS */
// Nested IF Condition
// A nested if statement is an if statement that is contained within another if statement.
// This allows you to check multiple conditions in a hierarchical manner.

/* Leap Year or Not */
// condition it should be divisible by 4 & divisible by 100 & divisible by 400

let year = 2016;
if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      // here we are checking if it is a centurian year and divisible by 400
      console.log("Leap Year");
    } else {
      console.log("Not a Leap Year");
    }
  } else {
    console.log("Leap Year");
    // here we consider it as leap year because it is already divided by 4 and its not a centurian year.
    // and we are including another condition only to check for centurian year, So it will be leap year
    // if it is not a centurian year and didivible by 4
  }
} else {
  console.log("Not a Leap Year");
}
