/* Set */

// a Set is a built-in object that lets you store a collection of unique values. 
// The most fundamental property of a Set is that it only stores unique values. 
// If you try to add a value that already exists in the Set, it will be ignored.
// Sets can store values of any JavaScript data type
// including primitive values (like numbers, strings, booleans) and object references.

/* Declaring a Set */

// we should declare Set by using the constructor method

let set = new Set();
console.log( set ); // set(0) {}


/* Inserting Value in Set  */

// To insert a Value in Set we want to use a function called add which is inbuilt for this purpose in Set

set.add( 'rubesh' );
set.add( 'aswini' );
console.log( set ); // Set(2) { 'rubesh', 'aswini' }

//  insted of using Set.add for each time , we can use only add

let Details = new Set();
let dinesh = 'Dinesh';
Details.add( 'Dinesh' )
    .add( 2 )
    .add( 3 )
    .add( 3 ) // it wont accecpt the duplicate value (value that already exixts)
    .add( dinesh ) // it wont accecpt the duplicate value (value that already exixts)
    .add( "D inesh" );
console.log( Details ); // Set(4) { 'Dinesh', 2, 3, 'D inesh' }

//-----------------*------------------------------*-----------------------------*-------------------------*----------------

/* Properties and Method in Set */

/* checking whether a Value is Present in Set or Not */
// To check if a particular Value is Present in Set or Not we can use { has() } Method
// SetName.has(Value)
// it will return true if the corresponding Value is present else it will return false

console.log( Details.has( 2 ) ); // true
console.log( Details.has( dinesh ) ); // true

//-------------------------------------------------------------------------------------------------------------------------

/* deleting a Particular Value in Set */

// To delete a particular Value in Set we can use { delete }
// SetName.delete(Value)

// before Deleting
console.log( Details ); // Set(4) { 'Dinesh', 2, 3, 'D inesh' }

// After Deleting
Details.delete( 2 );
console.log( Details ); // Set(3) { 'Dinesh', 3, 'D inesh' }

/* Deleting the entire Set */

// To delete the entire Set we can use { clear }
// SetName.clear() --> no key required because, we are deleting the entire Set

// before Deleting the entire Set
console.log( Details ); // Set(3) { 'Dinesh', 3, 'D inesh' }

// After Deleting the entire Set
Details.clear();
console.log( Details ); // Set(0) {}

//-------------------------------------------------------------------------------------------------------------------------

/* Finding the size of Set */

let mySet = new Set();
mySet.add( 'Rubesh' )
    .add( 23 )
    .add( 'Software Developer' )
    .add( false );

// when we are printing a Set, by default it will print its size also

console.log( mySet ); // Set(4) { 'Rubesh', 23, 'Software Developer', false }

// But if we to know the Set size specifically, then we can use { size } property
// SetName.size

console.log( mySet.size ); // 4

//-------------------------*--------------------------------------*------------------------------------*--------------------

/* Iterating the entire value of map */

// to access the entire value of map , we can use { for of }loop

/* Accessing the entire value of Set */
// Set is a built-in object that lets you store a collection of unique values. 
// it doesn'=t not have key value pair like Object or Map
// it consist of only value
// to access the entire values we can use SetName.values()
// it will access all the values in the Set

for ( s of mySet ) {
    // mySet will access all the values in the Set and returns it to the s
    // we are printing the s
    console.log( s );
    /*  Rubesh
        23
        Software Developer
        false
    */
}

/* Triva Question to add a mobile number in a set and find its size */

let mobileNumber = new Set();

mobileNumber.add( 0 )
    .add( 9 )
    .add( 8 )
    .add( 7 )
    .add( 6 )
    .add( 5 )
    .add( 4 )
    .add( 3 )
    .add( 2 )
    .add( 1 )
    .add( 0 );

console.log( mobileNumber ); // set(10) { 0, 9, 8, 7, 6, 5, 4, 3, 2, 1 }
console.log( mobileNumber.size ); // 10