/* Functions */
//In JavaScript, a function is a block of code designed to perform a particular task. 
// Functions are executed when they are called (invoked). 
// They can take inputs (parameters) and return an output.
// Mostly Used for Reusability


/* Function definition */
//Function Definition: The function is defined using the function keyword, 
// followed by the name of the function, a list of parameters enclosed in parentheses, 
// and the function body enclosed in curly braces

let a = 12, b = 89;
function operation(var1, var2) { // here we are receiving the arguments as parameters 
    // Parameters are placeholders for the arguments that will be passed to the function. 
    let c = ((var1 + var2 * var2 / var1) ** var2)
    return c;
    //The return statement specifies the value that will be returned by the function. 
    // If no return statement is used, the function returns undefined.
}

/* Function call */
console.log(operation(a, b)); // were are sending the arguments to the function 
// Arguments are the actual values passed to the function when it is called.
//Function Call: To execute the function, you call it by its name followed by parentheses,
// optionally passing arguments

function sum(a, b) {
    console.log(a + b ** 2)
}
sum(2) // if we send only one argument instead of two the output will be NaN to resolve this we can use Default Values

function sum(a, b = 9) { // here we are using default value for b , and value a will be 2
    console.log(a + b ** 2)
}
sum(2) // 2 will be mapped to a

function sum(a = 24, b) { // here a will be replaced from 2 to 24 and b has no value // otput will be NaN
    console.log(a + b ** 2)
}
sum(2, 3) // although we are passing the argument to function

/* Triva Question to get a number and check it is odd or even using a function */

function oddEven(value) {
    if (value % 2 == 0) {
        return "Even"
        console.log("rubesh") // this code wont execute because
        // if the condition passes then it will return Even and it wont check whatever the code below it
    }
    return "odd" // we can also write the code like this, 
    // because once a value is returned, it will exit the function.
    // it will diectly execute odd and will exit the function only when the { if condition } Fails
}
console.log(oddEven(2))


