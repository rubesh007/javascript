/* Create a simple constructor function
Write a constructor function Person that takes name and age as parameters and assigns them to the instance. */

function Person ( name, age ) {
    this.name = name;
    this.age = age;
}

let instance = new Person( 'rubesh', 22 );
console.log( instance.name );
console.log( instance.age );

/* Create a method inside a constructor function
Modify the Person constructor to include a method greet() that prints "Hello, my name is [name]". */

instance.greet = function () {
    return ( `Hello, my name is ${ this.name }` );
};
console.log( instance.greet() );

/* Intermediate Questions:
Prototype method in constructor function
Modify the Person constructor to add a describe() method using prototype that returns "Name: [name], Age: [age]".
*/

let person1 = new Person( 'rubesh', 25 );
person1.describe = function describe () {
    return `"Name : ${ this.name }, Age: ${ this.age }"`;
};
console.log( person1.describe() );

/* Check if an object is an instance of a constructor
Write a function isInstance(obj, constructorFunc) that checks if obj is an instance of constructorFunc. */

function isInstance ( obj, constructorFunc ) {
    return obj instanceof constructorFunc;
}

function Person ( name, age ) {
    this.name = name;
    this.age = age;
}

let person2 = new Person( 'Ash', 23 );
console.log( isInstance( person2, Object ) );

/* Return a different object from a constructor
Modify the Person constructor so that it returns a custom object instead of this. */

function Rubesh ( name, age ) {

    return {
        customname: 'Virat',
        customage: 36
    };
}

let person4 = new Rubesh( 'david', 23 );

console.log( person4.customname );