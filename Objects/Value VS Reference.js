/* Value */
// Primitive value or DataTypes == (Number, String, Boolean, Null, Undefined, Symbol, BigInt)
// Non-primitive DataTypes == (Objects, Arrays, Functions)

//When you assign a primitive value to a variable, it creates a copy of that value. 
// Changing the copied value will not change the original.

let a = 24; // we are assigning a = 24

let b = a; // here we are assiging b = a , which creates a copy of value ( a ) in b

console.log( a, b ); // 24 ,24 

b = 30; // here Changing the copied value ( b ) will not change the original value ( a )
console.log( a, b ); // 24 , 30

/* Reference */
// Non-primitive DataTypes == (Objects, Arrays, Functions) are stored in memory as references.
// When you assign an object to another variable, it will not create a copy of that value.
// insted it will assigning a reference (or pointer) to the same memory location.
// The reference will work only when you assign same object to 2 variables, 


let A = {
    name: 'Rubesh',  // we are assigning some properties to object A
    age: 23
};


let B = A; // here we are assiging B = A , which does not creates a copy of value ( a ) in b , instead
// it will assign B as a reference of A in the same memory location.


console.log( A, B ); // { name: 'Rubesh', age: 23 } { name: 'Rubesh', age: 23 }


B.age = 27; // here Changing the value ( B ) will change the value ( A )
// because the value of object B is a Reference of, value ofobject A.
// it just tells object B to take values from Object A , it will not create a copy, the object name changes not the value.
console.log( A, B ); //{ name: 'Rubesh', age: 27 } { name: 'Rubesh', age: 27 }



B = {}; // here if we assign B = {} it will work normally because,
// The reference will work when you assign same object to 2 variables,
// Here it is not same object a = { name: 'Rubesh', age: 23 }, but for B we are assigning anoher object B ={}
console.log( A, B ); // { name: 'Rubesh', age: 23 } {}


/* Assigning a object to Const variable */

const object = {
    food: 'Briyani',
    place: 'Gudiyatham',
    time: 12
};
 object = {
  food: "parotta"
};
object = {};
console.log( object ); 
// it will throw TypeError: Assignment to constant variable. 
// because it sees the total object as a Single Value, so it wont allow you to modify the entire object ,but */

// we can able to change the independent properties inside the object even if we declare the object in Const 
console.log( object ); // { food: 'Briyani', place: 'Gudiyatham', time: 12 }
object.time = 1;
console.log( object ); // { food: 'Briyani', place: 'Gudiyatham', time: 1 }


/* Garbage Collection  */
// JavaScript automatically manages memory allocation and deallocation using Garbage Collection (GC). 
// The JavaScript engine removes objects from memory when they are no longer needed.

let garbage = {
    quantity: 300,
    condition: "worst"  // while creating this object the JavaScript engine will assign a memory or address for it
};
console.log( garbage ); // { quantity: 300, condition: 'worst' }

garbage = null;
console.log( garbage ); // null 

// here the oject becomes null and its memory was erased , but the object will be there
// so the JavaScript engine removes objects from memory when they are no longer needed.



/* Triva Question to find the answer for the following code */

let match = {
    wpl: 'bengaluru',
    ipl: 'Rcb',
    itl: 'india'
};

let team = match;
console.log( match ); // { wpl: 'bengaluru', ipl: 'Rcb', itl: 'india' } 

match = {};
console.log( team ); // { wpl: 'bengaluru', ipl: 'Rcb', itl: 'india' }