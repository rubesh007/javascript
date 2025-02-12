/* Logical Operators */
// There Are 4 Types of Logical Operators in JavaScript They are,
/*  -OR, -AND, -NOT, -NULL Coalescing*/

//-----------------------*----------------------------*---------------------------------------*-----------

// -OR, -AND, will not return the output as True or False (Boolean), instead it returns the input

// Truth Table For { OR (||) }
//    A       B      0
// ---------------------   The OR operator (||) will return TRUE , if any one value is True
//    1       1      1
//    1       0      1
//    0       1      1
//    0       0      0     and it will return False , only if both value is False
console.log(1 || 1);
console.log(1 || 0);
console.log(0 || 1);
console.log(0 || 0);
// Here it will not return the output as True or Flase (Boolean), instead it returns the input

/* Short Circuit or Truthy */
console.log(2 || 40);
console.log(8 || 40 || 0 || 3);
// If the first input is true (1 or anyother value except 0), it will return the first value,
// and it wont check for other input, Short Circuit happens

console.log(0 || 40);
console.log(0 || 7 || 40 || 3);
// If the first input is False ( 0 ), it will check for other positive input, and
// it will return its value, if the positive input is found it wont check for other input

//-----------------------*----------------------------*---------------------------------------*-----------

// Truth Table For { AND (&&) }
//    A       B      0
// ---------------------  The AND operator (&&) will return False , if any one value is False
//    1       1      1    and it will return TRUE , only if both value is TRUE
//    1       0      0
//    0       1      0
//    0       0      0
console.log(1 && 1);
console.log(1 && 0);
console.log(0 && 1);
console.log(0 && 0);
// Here it will not return the output as True or Flase (Boolean), instead it returns the input

/* Short Circuit or Truthy */
console.log(2 && 1);
console.log(8 && 40 && 3);
// If the first input is true (1 or anyother value except 0), it will check for other input
// which is True and return the last input value

console.log(0 && 40);
console.log(7 && 0 && 40 && 3);
// If the input is consist of one False ( 0 ) value , it will return the value as False,
// and it wont check for other input and Short Circuit happens

//Program for marriage Eligibilty using the logical operators
var age = 21;
var gender = "F";
if (age >= 18 && gender == "F") {
  // here it will check both the condition and if only both the condition satisfy this block will run
  console.log("Eligible");
}

// using AND with OR operator
var age = 21;
var gender = "F";
if (age >= 21 || (age >= 18 && gender == "M")) {
  // if the first condition is satisfied then it will run this block without checking other condition
  // if the first condition fails then it will check the other condition and if that condition satisfies,
  // then it will run this block
  console.log("Eligible");
} else {
  // if both the condition fail's then it will run this Else block
  console.log("Not Eligible");
}

//-----------------------*----------------------------*---------------------------------------*-----------

// Truth Table For { NOT (!) }
//    A      NOT A
// -----------------   The NOT operator (!) reverse the boolean value of its operand
//    1         0      The NOT operator will return False if the value is TRUE
//    0         1      The NOT operator will return True if the value is FALSE
console.log(!0); //will return False if the value is TRUE
console.log(!1); //will return True if the value is FALSE

//-----------------------*----------------------------*---------------------------------------*-----------

// Truth Table For { NULL Coalescing (??) }
//    A       B      A ?? B
// -------------------------  The NULL Coalescing operator (??) returns the right-hand side Value,
//    null    1      1        when the left-hand side Value is null or undefined. Otherwise,
//    1       null   1        it returns the left-hand side Value.
//    null    null   null
//    1       1      1
console.log(undefined ?? 1);
console.log(null ?? 1);
console.log(null ?? undefined);
console.log(undefined ?? null);
console.log(undefined ?? undefined);
console.log(null ?? null);
console.log(1 ?? 1);

let Age; // Age = null // Age = undefined
let current_age = Age ?? 19;
console.log(current_age);
// The NULL Coalescing operator (??) returns the right-hand side Value,
// when the left-hand side Value is null or undefined.

let year = 18;
let current_year = year ?? 19;
console.log(current_year);
// Otherwise, it returns the left-hand side Value.

/* Trivia question to find the answer for console.log(null || 0 || undefined) */
console.log(null || 0 || undefined); // undefined
// the answer is undefinesd as we know the OR operator will operate unitll it finds a positive value
// it will check first value which is null and it moves to next which is 0
// and fillay it will check the third option which is undefined, but here there is no positive value
// so, it returns the last value
