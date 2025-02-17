/* Scope */
// scope determines the accessibility of variables, objects, and functions in different parts of the code. 
// There are Two Type of Scope Local Scope and Global Scope

/* Local Scope */
// If a variable is declared inside a function then it can only be accessed within that function. 
// Attempting to access the variable outside the function will result in an error.

function getSum(a, b) {
    let c = (a + b)
    // Here we are initializing and declaring a variable inside a function.
    // We can access this variable only inside this specific function.

    console.log(c) //  We can't access it anywhere outside of the specific function.
}
getSum(12, 12); // Function Calling and assigning arguments


/* Error Handling Will see in deatil */
try {
    console.log(c);
    // whatever the code inside this try{} -> it will try to execute the code if there is any error it will throw them
    // This will cause an error because c is not accessible outside the function.
} catch (error) {
    // we should catch the error that is thrown by the {try} using the catch.
    // we can able to give the error meaasges also 
    console.log("Error: " + error.message); // Catching the error to avoid breaking the code.
}


/* Global Scope */
//  If a variable is declared outside any function then it can be accessed from anywhere in the code. 

let name; // Here we are initializing a variable outside a function Globally.

function getName(first) {
    name = first = "RubeshKumar"
    // We can access this variable wherever we want in this entire document.
}
getName("kumar")
console.log(name) // This will log "RubeshKumar"


// if we declare a varabile globally and if we try to access them in both inside a function and outside a function
// The output will be Undefined, because the local variable inside the function shadows the global variable.

let roll; // here it is declared but not assigned any value
function findNumb(a, b) {
    let roll = (a + b) // This will log the value of roll inside the function , but we cant access this outside of this function.
}
console.log(roll) // This will log undefined because the global roll variable was not assigned any value.
findNumb(12, 13)
