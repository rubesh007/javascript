/* Using of Operator in array */

// of operator is mostly used to access all the value of the elements in the Array
// we cant access its index 

let veges = [ 'Apple', 'Banana', 'carrot' ];

// to access the elements of this array we can use 

console.log( veges[ 0 ] ); // Apple 
console.log( veges[ 1 ] ); // Banana
console.log( veges[ 2 ] ); // carrot

// But what if there is 100 of values or more, like (in) operator in objects,
// we use (of) operator for arrays to access all the elements

let vege = [ 'Apple', 'Banana', 'carrot', 'Beetroot', 'Tomato', 'Beans', 'Potato', 'Green Chilli', 23, false, ];
for ( value of vege ) {
    // here all the elements of the array vege stores in value
    // and we are printing the stored element
    console.log( vege );
    /* 
        Apple
        Banana
        carrot 
        Beetroot
        Tomato
        Beans
        Potato
        Green Chilli
        23
        false
    */
}

// By using the (of) operator we can only able to access the value of the element
// we cant access its index , 

//  but by using the normal for loop we can access both the element and it index

for ( let i = 0; i < vege.length; i++ ) {
    
    console.log( i ); // by using this we can access its index
    /* 
    0
    1
    2
    3
    4
    5
    6
    7
    8
    9
    */
    
    console.log( vege[ i ] );
    /* 
    Apple
    Banana
    carrot
    Beetroot
    Tomato
    Beans
    Potato
    Green Chilli
    23
    false
    */
}



// we can also able to (in) operator for arrays to acces its index 

for ( value in veges ) {

    // by using the (in) operator in object usally it will return its key, but
    // for array it will return its index value 

    console.log( value ); // 0 1 2 
    // it will return the index value of the elements present in the Array veges

    // to access only the value of the elements use ArrayName[varibale used to store the index], But
    console.log( veges[ value ] ); // Apple Banana carrot

}

// (in) operator is generally designed for normal objects it will loop through each key of the object
// even though in depth Array is also a special type of object , so the (in) operators works for it
// It is not a efficient way because (in) operator is 100 times slower than (of) operator

