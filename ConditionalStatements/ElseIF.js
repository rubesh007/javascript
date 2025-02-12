/* CONDITIONAL STATEMENTS */
// ELSE IF Condition
// if the ( IF ) condition fails and you wish to check another condition you can use { ELSE IF }
let age = 12;
if (age > 20) {
  console.log("Major"); // here the IF condition fails
} else if (age > 15) {
  // so it will check the ELSE IF condition, here this condition also fails
  console.log("Minor");
} else {
  console.log("child"); // so it will execute the Else condition
}

let year = 12;
if (year > 13) {
  console.log("Teen"); // here the IF condition fails
} else if (year > 19) {
  // so it will check the ELSE IF condition ,here this condition also failed.
  console.log("youth");
} else if (year > 10) {
  // so it will check the ELSE IF condition ,here this condition satisfied
  console.log("Child"); //it will run this block and execute the output
} else if (year > 35) {
  console.log("Adult"); // it wont excute this condition because the previous condition is passed
} else {
  console.log("senior"); // it wont excute this  ELSE condition because already the condition is passed
}
/* 
let person;
let age = 20;
if (age > 18) {
  person = "Adult";
}
if (age > 12) {
  person = "Teenager";
} else {
  person = "child";
}

person = "Student";
console.log(person);
 */
