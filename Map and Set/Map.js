/* Map */

// Map is a collection of key-value pairs, similar to an Object, but with key differences
// Unlike objects, where keys are always strings or symbols, 
// Map allows keys and values of any data type (objects, functions, numbers, etc.).
// Map is also a type of Object

/* Declaring a Map */

// we should declare Map by using the constructor method

let map = new Map();
console.log( map ); // map(0) {}

/* Inserting Data in Map  */

// To inseert data in Map we want to use a function called set which is inbulit for this purpose in Map

map.set( 1, 'Rubesh' );
map.set( 2, 'Ashwni' );
console.log( map ); // Map(2) { 1 => 'Rubesh', 2 => 'Ashwni' },Map(2) --> meaning it has 2 values 

// insted of using map.set for each time , we can use only set

let Details = new Map();
Details.set( 1, 'Dinesh' )
    .set( 2, 100 )
    .set( 3, 200 );
console.log( Details ); // Map(3) { 1 => 'Dinesh', 2 => 100, 3 => 200 } Map(3) --> meaning it has 3 values 

//-----------------*------------------------------*-----------------------------*-------------------------*----------------

/* Properties and Method in Map */

/* Accessing the particular Property of Map */

// To access a particular property of map we can use { get() } Method
// MapName.get(key)
// it will return the corresponding value of the key 

console.log( Details.get( 1 ) ); // Dinesh

//-------------------------------------------------------------------------------------------------------------------------

/* checking whether a Property is Present in Map or Not */
// To check if a particular Property is Present in Map or Not we can use { has() } Method
// MapName.has(key)
// it will return true if the corresponding key is present else it will return false

console.log( map.has( 2 ) ); // true
console.log( map.has( 5 ) ); // false 

//-------------------------------------------------------------------------------------------------------------------------

/* deleting a Particular property in Map */

// To delete a particular property in Map we can use { delete }
// MapName.delete(key)

// before Deleting
console.log( Details ); // Map(3) { 1 => 'Dinesh', 2 => 100, 3 => 200 }

// After Deleting
Details.delete( 2 );
console.log( Details ); // Map(2) { 1 => 'Dinesh', 3 => 200 }

/* Deleting the entire Map */

// To delete the entire Map we can use { clear }
// MapName.clear() --> no key required because, we are deleting the entire Map

// before Deleting the entire Map
console.log( Details ); // Map(2) { 1 => 'Dinesh', 3 => 200 }

// After Deleting the entire Map
Details.clear();
console.log( Details ); // Map(0) {}

//-------------------------------------------------------------------------------------------------------------------------

/* Finding the size of Map */

let myMap = new Map();
myMap.set( 'name', 'Rubesh' )
    .set( 'Age', 23 )
    .set( 'profession', 'Software Developer' )
    .set( 'isMarried', false );

// when we are printing a map, by default it will print its size also

console.log( myMap ); // Map(4) { 'name' => 'Rubesh','Age' => 23,'profession' => 'Software Developer','isMarried' => false }


// But if we to know the map size specifically, then we can use { size } property
// MapName.size

console.log( myMap.size ); // 4

//-------------------------*--------------------------------------*------------------------------------*--------------------

/* Iterating the entire key and value of map */

// to access the entire key and value of map , we can use { for of }loop

/* Accessing the entire key of map */
// to access the entire key we can use MapName.keys()
// it will access all the keys in the map

for ( key of myMap.keys() ) {
    // here keys() is a inbuilt function or method to access the keys of the Map
    // it will access all the keys in the map and returns it to the key
    // we are printing the key
    console.log( key );
    /*  name
        Age
        profession
        isMarried 
    */
}

/* Accessing the entire value of map */
// to access the entire values we can use MapName.values()
// it will access all the values in the map

for ( key of myMap.values() ) {
    // here values() is a inbuilt function or method to access the values of the Map
    // it will access all the values in the map and returns it to the key
    // we are printing the key
    console.log( key );
    /*  Rubesh
        23
        Software Developer
        false
    */
}

/* Accessing the entire map */
// to access the entire map MapName
// it will access the entire map

for ( key of myMap ) {
    // here values() is a inbuilt function or method to access the values of the Map
    // it will access all the values in the map and returns it to the key
    // we are printing the key
    console.log( key );
    /*  [ 'name', 'Rubesh' ]
        [ 'Age', 23 ]
        [ 'profession', 'Software Developer' ]
        [ 'isMarried', false ]
    */
}