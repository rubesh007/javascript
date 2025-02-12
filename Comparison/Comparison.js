/* Comparision  */

/* Basically the Comparison operators is used to compare two variables 
   and it will return the output in Boolean ( True or False ) 
   There are different type of comparison operator they are;
   i. Lesser than ( < ) 
   ii. Greater than ( > )
   iii. Lesser than or Equal To( <= )
   iv. Greater than or Equal To( >= )
   v. Double Equal To( == )
   vi. Not Equal To( != )
   vii. Strictly Equal To ( === ) 
*/

// < Lesser than
let a = 10, b=12;
let result =(a<b) // it checks whether the left side value is less than the right side value
console.log(result)
console.log(typeof result) // and retuns the output in Boolean

// > Greater Than
let c = 10, d =12;
let answer =(a>b) // it checks whether the left side value is Greater than the right side value
console.log(answer)
console.log(typeof answer) // and retuns the output in Boolean

// <= Lesser than or Equal To
let e = 10, f=12;
let results =(e<=f);// it checks whether the left side value is Lesser than the right side value or 
console.log(results); // it is Equal to the right side value
console.log(typeof results)

// >= Greater than or Equal To
let g = 12, h=12; 
let i =(g>=h) // it checks whether the left side value is Greater than the right side value or 
console.log(i)// it is Equal to the right side value
console.log(typeof i)

// == Double Equal To
let j = 12, k='12';
let output =(j==k) // it checks whether left side value and the right value is Same or Not
console.log(output) // it doesnt matter what type they are 
console.log(typeof output)

// != Not Equal To
let l = 12, m = '12';
let n =(l!=m) // it checks whether left side value does not equal to the right value 
console.log(n) // it doesnt matter what type they are 
console.log(typeof n)

// === Strictly Equal To
let o = 12, p=12;
let q =(o===p) // it checks whether left side value and the right value is Same or Not
console.log(q) // it will also check whether the two values are same type or Not
console.log(typeof q) // here the output is True because the values are same dataType

