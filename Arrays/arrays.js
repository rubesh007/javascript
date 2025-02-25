/* Arrays */

// Array is a Special type of Object which is used to store multiple values in single variable
// Array is a collection of list of Elements (or) Array is a collection of list of Datatypes
// Array Elements can be Any DataType
// Array should be entered inside the square brackets []
// Each element in Array has index value which starts from 0

/* Creating a Array */

// We can Create an Array by using Constructor  Method

let Name = new Array(); // creates a new empty Array and assigns it to the variable Name
console.log( Name ); // []
console.log( typeof Name ); // Object, because Array is a Special Type of Object

//OR

// we can create an Array by using Square brackets methods []

let veges = []; // creating an empty array

//--------------------------------------------------------------------------------------------------------------------

/* Assigning elements to Array */

// we can assign the elemnts inside the array by using three methods

// By assigning it to the variable directly
// Direct assignment (Name = [array]) creates a new array,replacing the previous Array

Name = [ 'Ashwini', 'Rubesh', 'Dinesh' ];
console.log( Name ); // [ 'Ashwini,Rubesh,Dinesh' ]

// here it creats a new Array by replacing the previous Array
Name = [ 'Roshni' ];
console.log( Name ); // [ 'Roshni' ]

//--------------------------------------------------------------------------------------------------------------------

// By creating an array and assigning the values for it in the next step

let deatails = [];

// If we store a string inside an array, it will be treated as a single element, even if it contains commas:
details = [ 'Name, Address, mobile Number, Email' ];
console.log( details.length ); // 1
details = [ 'Name', 'Address', 'mobile Number', 'Email' ];
console.log( details.length ); // 4

console.log( details ); // [ 'Name', 'Address', 'mobile Number', 'Email' ]

//--------------------------------------------------------------------------------------------------------------------

// by using Constructor Method we can assign the values directly

let marks = new Array( 100, 200, 300, 400 );

// here it creates a Array and takes the values as arguments
// based the argument it creates an array and assign the values

console.log( marks ); // [ 100, 200, 300, 400 ]

//--------------------------*--------------------------------------------*---------------------------------------*----



/* Accessing the Array Elements or Values */

// we can able to access the entire array elements as well as the specific element in the array we want

// accessing entire elements of array
// by logging an array directly, it prints all its elements

details = [ 'Name', 'Address', 'mobile Number', 'Email' ];
console.log( details ); // [ 'Name', 'Address', 'mobile Number', 'Email' ]

// accessing specific element 
// Each element in an array has an index value starts from 0
// we can access specific elements of an array by using their index value
details = [ 'Name', 'Address', 'mobile Number', 'Email' ];
console.log( details[ 0 ] ); // Name
console.log( details[ 1 ] ); // Address
console.log( details[ 2 ] ); // mobile Number
console.log( details[ 3 ] ); // Email


// If we try to access an index that doesn't exist, it will return undefined:
console.log( details[ 4 ] ); // undefined
console.log( details[ 6 ] ); // undefined

//---------------------------------------------------------------------------------------------------------------------

//Array is a collection of list of Datatypes and Array Elements can be Any DataType

// assigning  various dataypes to array

let Arr = [
    'Rubesh', 23, 9007199254740991n, true, null, undefined, { hobby: 'cricket', record: 50 + 'in' + 12 + 'balls' },
    function ( a, b ) { return a + b; }, [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
];
 
console.log( Arr );
/* 
[
    'Rubesh',
    23,
    9007199254740991n,
    true,
    null,
    undefined,
    {hobby: 'cricket', record: '50in12balls'},
    [Function (anonymous)],
    [1, 2, 3, 4, 5,6, 7, 8, 9]
]
 */

console.log( Arr[ 6 ].hobby ); // cricket
console.log( Arr[ 7 ]( 2, 3 ) ); // 5












