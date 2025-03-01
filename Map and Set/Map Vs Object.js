/* Difference Between Map & Object */

//In JavaScript, both objects and maps are used to store collections of key-value pairs,
// but they have important differences that make each better suited to different use cases. 
/* 1.Key Types
   2.Order of Keys
   3.Performance
   4.Utility Methods
*/

/* 1.Key Types */

// Objects: Keys are strings or symbols. Even if you try to use a non-string key (e.g., a number or object), 
// JavaScript will automatically convert it to a string.

const obj = {};
obj[ 5 ] = 'value'; // The key 5 is converted to a string '5'
console.log( obj ); // { '5': 'value' }


//Maps: Keys can be any type, including objects, functions, and primitive values like numbers, strings, or even undefined.

const map = new Map();
map.set( {}, 'value' ); // Can use an object as a key
console.log( map ); // Map(1) { {} => 'value' }

//--------------------------------------------------------------------------------------------------------------------------

/* 2.Order of Keys */

// Objects: The keys are not guaranteed to be in any specific order, 
// though modern JavaScript engines usually maintain the insertion order for string keys.

const obj = {};
obj[ 2 ] = 'two';
obj[ 1 ] = 'one';
obj[ 3 ] = 'three';

console.log( obj ); // { '1': 'one', '2': 'two', '3': 'three' } - Notice the numeric keys are sorted


// Maps: Order of insertion is guaranteed. If you iterate over a Map, the keys will appear in the order they were added.

const mymap = new Map();
mymap.set( 2, 'two' );
mymap.set( 1, 'one' );
mymap.set( 3, 'three' );
for ( let key of mymap ) {
    console.log( key ); // [ 2, 'two' ][ 1, 'one' ][ 3, 'three' ]
}

//---------------------------------------------------------------------------------------------------------------------------

/* 3.Performance */

// Objects: Performance can degrade with frequent additions/removals of keys (especially if keys are non-string).

console.time( 'Object Performance' );

let objper = {};
console.time( "Object Perfomance" );
for ( let i = 0; i < 1000000; i++ ) {
    objper[ i ] = i;
}
console.log( objper[ 50000 ] ); // 50000
console.timeEnd( "Object Perfomance" ); // Object Perfomance: 27.814ms


// Maps: Map is optimized for frequent additions and deletions of key-value pairs.

console.time( "Map Perfomance" );
let myMap = new Map();

for ( let i = 0; i < 1000000; i++ ) {
    myMap.set( i, i );
}
console.log( myMap.get( 50000 ) ); // 50000
console.timeEnd( "Map Perfomance" ); // Map Perfomance: 118.997ms

//---------------------------------------------------------------------------------------------------------------------------

/* 4.Utility Methods */

// Objects have basic methods for getting keys, values, or entries, 
// but they need to be manually retrieved using Object.keys(), Object.values(), or Object.entries().

const obj = { name: 'Alice', age: 30 };

// Getting keys, values, and entries manually
console.log( Object.keys( obj ) );   // ['name', 'age']
console.log( Object.values( obj ) ); // ['Alice', 30]
console.log( Object.entries( obj ) ); // [['name', 'Alice'], ['age', 30]]

// Deleting a property
delete obj.age;
console.log( obj );  // { name: 'Alice' }


// Maps have built-in methods like .set(), .get(), .has(), .delete(), .size, and .clear() for easier manipulation.

const maps = new Map();
maps.set( 'name', 'Alice' );
maps.set( 'age', 30 );
maps.set( 'job', 'traveller' );

// Getting size
console.log( maps.size );  // 3

// Checking existence of a key
console.log( maps.has( 'name' ) ); // true

// Deleting a key-value pair
maps.delete( 'age' );
console.log( maps.size );  // 2

// Iterating through the map
for ( let key of maps.keys() ) {
    console.log( key ); // name , job
}
for ( let value of maps.values() ) {
    console.log( value ); // Alice , traveller
}