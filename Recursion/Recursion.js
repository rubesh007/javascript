/* Recursion  */

// Recursion is nothig but a function calls itself within its own definition. 
// Basically there things which is important for Recursion they are,
// - Base Case , - Update Statement , - Recursive call
// - Base Case - in which point we have to stop our Recursion is called as Base Case
// - Update Statement - is used to Update the recursion
// - Recursive call - call the function inside the same function 


// factorial is nothing but multiplying the given number untill 1
// ex 5! = 5 x 4 x 3 x 2 x 1 = 120
function factorial ( n ) {

    if ( n == 1 ) {  // Base Case 
        return 1; // here i want to stop the recursion when n becomes 1 
    }

    return n * factorial( n - 1 );
    // here factorial() --> is the Recursive call because its is function calling itself in within its own definition 
    // the statement inside the () is called Update Statement

}
console.log( factorial( 5 ) ); // 120

/* Note */
// - Base Case , - Update Statement , - Recursive call Basically this three things is important for Recursion
// if there is no Base Case the function doesn't know when to stop and it will throw an error {Maximum call stack size exceeded}
// if there is no updation statement, then the function will keep onm calling it continously,
// and it will throw an error {Maximum call stack size exceeded}
// if there is no Recursive call , it will act as an ordinary function

// -----------------------------------------------------------------------------------------------------------------

/* Triva sum of numbers using Recursion */

// ex 10 = 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 55

function sum ( n ) {
    if ( n == 1 ) {
        return n;
    } else {
        return n + sum( n - 1 );
    }
};
console.log( sum( 5 ) ); // 15

// -----------------------------------------------------------------------------------------------------------------

/* Practice Fibonacci Series  */

//ex 5 = 0, 1, 1, 2, 3, 5

function fibonacci ( n ) {
    if ( n <= 1 ) {
        return n;
    } else {
        return fibonacci( n - 1 ) + fibonacci( n - 2 );
    }
}

let num = 10;
if ( num >= num ) {
    console.log( `The Fibonacci series of ${ num } is :` );
    for ( let i = 0; i <= num; i++ ) {
        console.log( fibonacci( i ) );
        /* 
        0
        1
        1
        2
        3
        5
        8
        13
        21
        34
        55 */
    }
} else {
    console.log( `please Enter a non-negative integer` );
}
