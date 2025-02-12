/* CONDITIONAL OPERATOR */
// It will work same as the Conditional Statements but the SYNTAX is different

// IF ELSE Condition Using Conditional Statements
let person;

let age = 20;

person = age > 18 ? "Adult" : "child";
// here ? --> IF && : --> ELSE
// (age > 18) ? 'Adult' ---> IF condition (if age > 18) person = 'Adult'
// : 'child' --->  ELSE condition (Else person = 'child')
console.log(person); // 'Adult'

// ELSE IF Condition Using Conditional Statements

let Person;

let Age = 18;

Person = Age > 20 ? "Adult" : Age > 15 ? "Teen" : "child";
// (Age >18) ? 'Adult' --> IF condition (if Age > 18) Person = 'Adult'
// : (Age > 15) ? 'Teen' --> ELSE IF condition (else if Age > 15) Person = 'Teen'
// : 'child' -->  ELSE condition (Else Person = 'child')
console.log(Person); // Teen

/* We can also perform the below method But it is ( STRONGLY NOT RECOMMENDED) because it reduces 
the code Readability. 
let Person;
let Age = 18;
(Age >20) ? Person = 'Adult' : (Age > 15) ? Person = 'Teen' : Person = 'child'
console.log(Person) */

/* TRiva Question  if('0){console.log('Hi') ---> can we able to get the Output and Why}*/

if ("0") {
  console.log("Hi"); // Hi
}
/* here the output will be 'hi' because as we know Whatever the condition given inside () the 
evaluation will be done in Boolean */
// therefore only 0 and "" -> empty string is fale in boolen
