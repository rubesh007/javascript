/* Array Methods */

/* Adding elements to array */
// we can Add the elements inside the array by using three methods

// By using index values
let Name = [];
// Index-based assignment (Name[0] = 'value') modifies the array by adding an element in the existing array.
Name[ 0 ] = 'rubesh';
console.log( Name ); // ['rubesh']

// here it adds another element to the existing array
Name[ 1 ] = 'kumar';
console.log( Name ); // ['rubesh','kumar']

//--------------------------------------------------------------------------------------------------------------------

// By using the Push Method or Function

// The push method is used to add a elements to the end of the array
// it will add the elements from last

let hobby = [];

hobby.push( 'Cricket' ); // here the value 'cricket' is added from last

console.log( hobby ); // [ 'cricket' ];

hobby.push( 'batting' ); // here the value 'batting' is added from last

console.log( hobby ); // [ 'Cricket', 'batting' ];


//---------------------------------------------------------------------------------------------------------------------

// By using unshift Method or Function

// The unshift method is used to add a elements to the start of the array
// it will add the elements from first

console.log( hobby ); // [ 'Cricket', 'batting' ];

hobby.unshift( 'Rubesh' ); // here the value 'Rubesh' is added from first

console.log( hobby ); // [ 'Rubesh', 'Cricket', 'batting' ];


hobby.unshift( 'Bowling' ); // here the value 'bowling' is added from first

console.log( hobby ); // [ 'Bowling', 'Rubesh', 'Cricket', 'batting' ]

//-----------------*--------------------------------------*----------------------------------------------*--------------


/* Deleting Elements from Array */
// we can Delete the elements from the array by using two methods

// By using pop Method or Function

//The pop method is used to remove a elements from last of the array
// it will remove the elements from last

console.log( hobby ); // [ 'Bowling', 'Rubesh', 'Cricket', 'batting' ];

hobby.pop(); // here batting is removed

console.log( hobby ); // [ 'Bowling', 'Rubesh', 'Cricket', ];

// we can able to print the remove item by logging the pop, becoz the pop method returns the removed element

console.log( hobby.pop() ); // here 'Cricket' is removed, it will display Cricket;

console.log( hobby );[ 'Rubesh' ]; // [ 'Bowling', 'Rubesh'];

//-----------------------------------------------------------------------------------------------------------------------

// By using shift Method or Function
//The shift method is used to remove a elements from first of the array
// it will remove the elements from first

console.log( hobby ); // [ 'Bowling', 'Rubesh' ]

hobby.shift(); // here bowling is removed

console.log( hobby ); // [ 'Rubesh' ]

//-----------------------------------------------------------------------------------------------------------------------

/* Note */

// push -> adds elemrnt fromn last

// unshift -> adds element from first

// pop -> removes element from last

// shift -> removes element from first

//------------------------------*----------------------------------------*------------------------------------*-----------

/* Length */

// to check the number of elements present in a array
let array = [ 1, 2, 3, 4, 'rubesh', { name: 'ruby', age: 22 } ];
console.log( array.length ); // 6

/* indexOf(value) */

// to check the index value of an element in an array
console.log( array.indexOf( 4 ) ); // 3

// to find the index of object we can use three methods 

// first method

if ( array.age === 22 ) {
    console.log( array.indexOf( array.age ) ); // 5
}

// second method

let obj = array.find( item => item.age === 22 );
console.log( obj ); // { name: 'ruby', age: 22 }
console.log( array.indexOf( obj ) ); // 5

// Third Method

let objct = array.findIndex( item => item.age === 22 );
console.log( objct ); // 5

/* splice(index, count) */
// Removes or replaces elements:

console.log( array.splice( 1, 1 ) ); // [2] is removed

// removes 1 element starting from index 1 

console.log( array ); // [ 1,3,4,'rubesh',{name: 'ruby',age : 22} ]


console.log( array.splice( 3, 2 ) ); // ['rubesh',{name: 'ruby',age : 22}] is removed

// removes 3 elements starting from index 3 

console.log( array ); // [ 1,3,4, ]


/* Acessing an object index of an array which consist of null and undefined  */

let Arr = [ 'Rubesh', 23, 9007199254740991n, true, null, undefined, { hobby: 'cricket', record: 50 + 'in' + 12 + 'balls' },
    function ( a, b ) { return a + b; }, [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ];

let object = Arr.find( index => {
    if ( typeof index === 'object' && index !== null && index.hobby === 'cricket' ) {
        return true;
    }
    return false;
} );
console.log( object );
console.log( Arr.indexOf( object ) );