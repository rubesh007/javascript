/* Function Declaration */
// A function declaration defines a named function. It is hoisted, meaning it can be called before it is defined in the code.

// Add numbers
let no1 = 44, no2 = 88;
// addno(); // it can be called before it is defined in the code

// // Function Declaration
function addno() {
    let result = no1 + no2;
    console.log(result)
}

/* Function Expression */
// A function expression defines a function as part of a larger expression, typically assigning it to a variable. 
// It is not hoisted, so it cannot be called before it is defined.

const addNo = function addNo() {
    let result = no1 + no2;
    console.log(result)
}
addNo();


/* Anonymous Function */
//An anonymous function is a function without a name. It is often used as a function expression.

const addNom = function () {
    let result = no1 + no2;
    console.log(result)
}
addNom();

/* Arrow Function */
// An arrow function provides a shorter syntax for writing functions.
// It does not have its own this context and is not hoisted.

const addNum = () => no1 + no2;
console.log(addNum());

let a;
let c;
const checkNum = (a) => { c = a % 2 == 0 ? "Even" : "Odd"; return c; }
console.log(checkNum(3));

/* Key Points:
1.Function Declaration: Defines a named function and is hoisted.
2.Function Expression: Defines a function as part of an expression and is not hoisted.
3.Anonymous Function: A function without a name, often used as a function expression.
4.Arrow Function: Provides a shorter syntax, does not have its own this context, and is not hoisted. 
Each method has its own use cases and benefits, depending on the requirements of the code.*/

/* Write a Arrow function that takes input from the user and multiplys it with 5 */

let multFun = (n) => n * 5; // here we receive it as n and does the operation

console.log(multFun(34)) // here we are passing 34 as an parameter for the function multFun 
