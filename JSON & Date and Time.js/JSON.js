/* JSON */

// JSON - JavaScript Object Notation
// It's designed to be simple and efficient, making it easy to transmit data between systems.
// It's written in plain text, which means it's human-readable and can be easily processed by machines.
// JSON data is organized into name/value pairs (objects) and ordered lists of values (arrays).   
// Web applications: JSON is widely used for sending and receiving data between web browsers and servers.   
// APIs (Application Programming Interfaces): Many APIs use JSON to return data.   
// Configuration files: JSON is sometimes used for storing configuration settings.   
// In JavaScript, there are built in functions to handle JSON:
// JSON.stringify(): 
// JSON.parse():

/* JSON.stringify(): */

// JSON.stringify() is used to convert a JavaScript object or value to a JSON string. 

let user = {
    name: 'rubesh',
    age: 22,
    profession: "Developer"
};

console.log( JSON.stringify( user ) ); // it will return a JSON String
// {"name":"rubesh","age":22,"profession":"Developer"}

let list = [ 'Rubesh', 'Dinesh', 'Sketch' ];
console.log( JSON.stringify( list ) ); // it will return a JSON String
// ["Rubesh","Dinesh","Sketch"]


//-------------------------------------------------------------------------------------------------------------------------------

/* JSON.parse() */

// JSON.parse() is used to convert a JSON string to a JavaScript object or value

let User = '{"name" : "Rubesh","age":22,"Profession":"cricketer"}';
console.log( JSON.parse( User ) ); // it will return a Object
// { name: 'Rubesh', age: 22, Profession: 'cricketer' }


let List = [ "Rubesh", "Dinesh", "Sketch" ]; //  here it is assumed as Array not JSON String
console.log( JSON.parse( List ) );

// it will throw an output Error, when we try to implement JSON.parse() to a JavaScript array directly. 
// JSON.parse() is designed to work with JSON strings, not JavaScript objects or arrays.

// for that , first 
// we want to convert the Array into JSON String
// JSON.stringify(List) takes the JavaScript array List and turns it into a JSON string: ["Rubesh","Dinesh","Sketch"].

let jsonString = JSON.stringify( List );

// then we should convert the JSON String into Array by using the JSON.parse
// JSON.parse(jsonString) takes that JSON string and turns it back into a Javascript array.

console.log( JSON.parse( jsonString ) ); // [ 'Rubesh', 'Dinesh', 'Sketch' ]