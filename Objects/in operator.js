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

for ( key in info ) { // each time the loop runs it will give the key present in the object one after another
    //console.log( key );
}

// to access only the value of the key

for ( key in info ) { // each time the loop runs it will give the value present in the object one after another
    //console.log( info[ key ] );
}

// to access both the key and the value of the property in object use

for ( key in info ) { // each time the loop runs it will give the key  and Value present in the object one after another
    console.log( key + ':' + info[ key ] );
}
