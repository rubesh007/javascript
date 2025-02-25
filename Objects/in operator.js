/* Using in operator in objects */

// Basically { in } operator is used to check whether a property is Present or Not in an object or  --> {iruka, illaya}
// an index is Present or Not in an array. 
// 🔴 Avoid using for...in for arrays because it includes inherited properties too.


// to check whether a property is Present or Not in an object,
// we should enter the property inside the single quotes {''} -->{ 'property' in objectName}

let details = {
    name: "rubesh",
    age: 23
};
console.log( 'age' in details ); // true // it checks whether the property age is Present or Not in the object details
console.log( 'group' in details ); // false // it checks whether the property age is Present or Not in the object details


// to check whether a index is Present or Not in an Array,
// we can use any of the method
// {''} -->{ 'index' in ArrayName} or {""} -->{ "index" in ArrayName}
// {[]}--> {[index] in ArrayName}
// {['']}--> {['index'] in ArrayName} or {[" "]}--> {["index"] in ArrayName}

let Numbers = [ 10, 20, 30 ];
console.log( "2" in Numbers ); // true // it checks whether the index 0 is Present or Not in the array Numbers 
console.log( [ 4 ] in Numbers ); // false // it checks whether the index 4 is Present or Not in the array Numbers 



/* We can also able to access all the properties in the objects and the index in the Array */

let info = {
    name: "Ashwini",
    age: 23,
    profession: '.net Developer',
    'Monthly Salary': 22000
};

// to access only the key of the property use,

for ( key in info ) { // each time the loop runs it will give only the key present in the object one after another
    // console.log( key );
    /* 
        name
        age
        profession
        Monthly Salary 
    */
}

// to access only the value of the key use objectName[key]

for ( key in info ) { // each time the loop runs it will only give the value present in the object one after another
    // console.log( info[ key ] );
    /* 
        Ashwini
        23
        .net Developer
        22000
    */
}

// to access both the key and the value of the property in object use

for ( key in info ) { // each time the loop runs it will give the key  and Value present in the object one after another
    console.log( key + ':' + info[ key ] );
    /* 
        name:Ashwini
        age:23
        profession:.net Developer
        Monthly Salary:22000 
    */
}


/* Nested Object */

let a = { //object
    b: {
        c: {
            leght: 112,
            width: 123
        }
    }

};

// object a -> key:b, value: enitre c
// object b-> key:c , value : c oda entire object 
// object c -> key: lehgth, width, value : 112,123

for ( key in a ) {
    console.log( key ); // key of a is b
}

for ( key in a ) {
    console.log( a[ key ] ); // valuepair of a's key { c: { leght: 112, width: 123 } }
}

for ( key in a.b ) {
    console.log( key ); //  key of b is c
}

for ( key in a.b ) {
    console.log( a.b[ key ] ); // value pair b's key is { leght: 112, width: 123 }
}

for ( key in a.b.c ) {
    console.log( key ); // key of c is leght,width
}

for ( key in a.b.c ) {
    console.log( a.b.c[ key ] ); // value pair of c's key is 112,123

}