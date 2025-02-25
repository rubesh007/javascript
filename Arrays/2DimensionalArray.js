/* 2 dimensional Array */

// A 2D array (two-dimensional array) is an array of arrays, meaning it consists of rows and columns,similar to a table or matrix.
// Each element in a 2D array is accessed using two indices (i and j): one for the row and one for the column.

let mat = [
    [ 1, 2, 3 ],
    [ 4, 5 ],
    [ 6, 7, 8 ],
];
console.log( mat ); // [ [ 1, 2, 3 ], [ 4, 5 ], [ 6, 7, 8, ] ]

console.log( mat[ 0 ] ); // [ [ 1, 2, 3 ] ]
console.log( mat[ 1 ] ); // [ [ 4, 5 ] ]
console.log( mat[ 2 ] ); // [ [ 6, 7, 8 ] ]

console.log( mat.length ); // 3

for ( let i = 0; i < mat.length; i++ ) { // ---> i loop is to run each row of array mat
    // here i = 0 ; i < 3 ; i++

    for ( let j = 0; j < mat[ i ].length; j++ ){ //  ---> j loop is to run each column inside the row  

        // mat[ i ].length ==> here i = 0 ; so mat[i] == mat[0]  

        console.log( mat[ i ][ j ] );
    }
    // here [i] represents index of mat[[1,2,3],[4,5],[6,7,8]] , [j] represents index of [1,2,3] and [4,5] and [6,7,8]

    // here mat[i][j] ==> mat of [i] of [j]

    // mat[i]=0 ;mat[j] => 0  // 1 --->  the j loop will exit when j = 3

    // then it will continue from i = 1 and comes into j loop
}









