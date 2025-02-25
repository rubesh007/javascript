/* Constructor */

// We define a constructor just like a function because a constructor is also a function.
// However, the function name should start with an uppercase letter by for Constructor.
// A constructor is used to create and initialize objects dynamically. Instead of manually defining multiple objects,
// constructor is used to generate multiple objects with the same properties but different values.

// Normal way of creating an object
let a = {
    name: 'Rubesh',
    age: 22
};
// This is the normal way of creating an object. We can use this method to create a few objects (e.g., 1 or 2).
// However, if we need to create 10 or more objects, manually defining each one becomes difficult.


// Using Constructor
// Instead, we create a common format using a function (constructor function).
// This allows us to generate multiple objects dynamically whenever needed.

function User () {

    // name: 'Rubesh' → We can't define a property like this inside a constructor function
    // because it doesn't know what "name" refers to.

    // When calling the function, JavaScript implicitly creates an object: this = {}
    this.name = 'Kumar'; // we are adding a property to {this} object
    // javascript implicity returns the {this} object to the current object 
};
// Here, we are only defining a constructor function but not storing it in any identifier.


// Storing the constructor function in a variable 

let result = new User();
// we are calling the constructor function User and Storing it in the variable 
// new keyword Creates an a new object called User

// Since we need to create multiple objects dynamically using the constructor function, 
// we use the "new" keyword.

console.log( result ); // User { name: 'Kumar' }


// We can also create object properties dynamically by passing arguments to the constructor.
function Information ( a ) {
    // When calling the function, JavaScript implicitly creates an object: this = {}
    this.name = a; // we are Assigning the passed argument as a property to {this} object 
    // JavaScript implicitly returns the {this} object to the current object 
}

let rubesh = new Information( 'Rubesh' );
// we are calling the constructor function User and Storing it in the variable 
// new keyword Creates an a new object called Information --> current object
let Ashwini = new Information( 'Ashwini' );
// we are calling the constructor function User and Storing it in the variable 
// new keyword Creates an a new object called Information --> current object

console.log( rubesh.surname = "kumar" );
// we can able to do crud operation by using the variable where we stored the constructor function
console.log( rubesh ); // Information { name: 'Rubesh', surname: 'kumar' }
console.log( Ashwini ); // Information { name: 'Ashwini' }
// Here, both are independent objects with different values.



// Adding a function as a property in a constructor
function Class () {
    this.name = 'Dinesh';
    this.age = function () {
        return 23;
    };
}

let info = new Class();
// we are calling the constructor function User and Storing it in the variable  
// new keyword Creates an a new object called Class --> current object
console.log( info.age() );
// Since "age" is a function inside the object, we need to call it using parentheses ().



// Adding a function as a property in a constructor and assigning a parameter
function Add () {
    this.name = 'Dinesh';
    this.age = function ( age ) { // it will receive the param as age
        return `${ this.name } is ${ age } old `; // we should describe { this.key }
    };
}
let details = new Add();
console.log( details.age( 23 ) ); // Dinesh is 23 old  
// we are sending the param 23 to details.age()
// details is nothing but Add constructor function





/* Triva question create a constructor with two values and a method that takes an argumnent and sum the three values */

function Sum () {
    this.a = 4;
    this.b = 4;
    this.c = function ( params ) {
        return this.a + this.b + params;
    };
}

let final = new Sum();

console.log( final.c( 4 ) );