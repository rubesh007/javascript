/* Function CallBack */
// A function passed as an argument to another function and executed after some operation.
// The callback function is executed after the main function completes its operation.
// Callbacks are often used for handling asynchronous operations, such as reading files, making HTTP requests, or handling events.

/* Function CallBack */

// A function that takes another function as an argument
function operation(callback, a, b) {
    // 3. here it receives the add() --> as callback  , callback is nothing but add()
    
    // 4. 5 as a and 15 as b
    
    return callback(a, b);
    
    // 5. here we are assigning the a,b as parameter for callback function --> add(5,15)
    
    // 9. now the output of the add() notghing but callBack() is returned to the operation() 
}

// A callback function
let add = (a, b) => a + b; // 1. it is normal arrow function

//6. after the callback function is called in the operation function it comes straight to this add()

// 7. now a = 5, b = 5; because we are assigning the a,b as parameter for callback function --> add(5,15) in operation function

//8. now the function will run and the output is returned to the add() notghing but callBack() 


// Passing the callback function as an argument
console.log(operation(add, 5, 15));

// 2.we wre passing the add() as a parameter to the operation()

// 10. now we are console.loggoing or printing the output of operation() 