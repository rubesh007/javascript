// Miscellaneous Datatype consist of (Boolean , Null , Undefined )

// Boolean 
console.log("Boolean Datatype")
let isMale = true;
console.log(isMale);
console.log(`the typeof isMale is ${typeof isMale}`);

let condition = 5<3;
console.log(condition);
console.log(`the typeof condition is ${typeof condition}`)

// Null
console.log(" \n Null Datatype")
let age = null;
console.log(age)
console.log(`the typeof age is ${typeof age}`)

/* Surprisingly, typeof null returns "object".
This behavior is a well-known bug in JavaScript that dates back to its early days. 
Initially, null was incorrectly classified as an object type, and this behavior was never fixed
due to backward compatibility.

Correct Understanding:
null is not an object; it is a primitive value that represents "no value" or "nothing."
However, due to this bug, typeof null will always return "object". */

// Undefined
console.log(" \n Undefined DataType")
 let value;
 console.log(value)
 console.log(`the typeof value is ${typeof value}`)

 //Dynamic Type --> It is not a DataType.
// With dynamically typed languages, a variable of the same name can be used to hold different data types.

console.log(" \n Dynamic Type")
let name = "Rubesh";
name = "santhosh";
console.log(`the typeof name is ${typeof name}`)

name = 43;
console.log(`the typeof name is ${typeof name}`)

 /* Triva Question to save name in a variable and save dob on the same and 
   console.log its type before & after 


let FirstName = "Ruby"
console.log(`the typeof FirstName is ${typeof FirstName}`)

FirstName = 4-2-2002
console.log(`the typeof FirstName is ${typeof FirstName}`) */
