/* STRING Comparison */
//we can able to Compare two string
let a = 'rubesh' // => r
let  b = 'ashwini'; // => a  it will take the both first letter and starts comparing.
console.log(a > b)
// here the answer will be true ,Because while comparing two strings it them both based on their 
// Unicode value,but we can find them using their dictnoray value like
/* A to Z = 1-26 
a to z = 27-52 */
//Based on this the comparison is Done

let e = 'rubesh' 
let  f = 'Ashwini'; 
console.log(e > f) // here the answer will be true , Because A to Z = 1-26 and a to z = 27-52,
// as we know r = 44 and A = 1.

let c = 'rubesa';
let d = 'rubesh';
console.log( c > d)
//  The comparison is done by one letter to another letter
// r = r , u = u , b = b , e = e , s = s , a < h
// here a is less than h  ,so the answer is false 

let g = 'Rubey';
let h = 'Rube';
console.log(g > h) // here the answer will be true because the first three letter is same but 
// the variable {g} as an extra character "y" than the variable {h} 





/*Comaprison btw String and Number */
let A = '2' , B = 1;
console.log(A > B)
// while comparing a String and a Number, The string automatically converts into number an then the
//comparison is done 




/* Comaprison btw String and Number */
let C = false , D = 1;
console.log(C > D);
//while comparing a Boolean and a Number, The Boolean automatically converts into number an then the
//comparison is done 





let male = '0'
male = Boolean(male)
// after converting string '0' into boolean the value will be true
let female = 0;
female = Boolean(female)
// after converting number 0 into boolean the value will be false
console.log(male == female) // (true == false) ==> false

let value = '0' , mark = 0; // The string '0' automatically converts into number.
console.log(value == mark) // (0 == 0) => true





/* NULL and UNDEFINED */

/* NULL */
console.log(null == undefined)
// 1. There is a Default Rule in JavaScript that if you compare the value of null and undefiend 
// the output will be TRUE.

console.log(null === undefined)
// But if you comapre stricly the output will be FALSE , because it will check both the 
// Value and the Type , therefore both are different DataType.

//if we convert null into number the value will be 0 
console.log(null > 0) //=> FALSE (0>0) false
console.log(null <= 0) // => TRUE (0 <= 0) True
console.log(null < 0) // =>FALSE ( 0 < 0) false
// In the above case null is not great than 0 , null is not less than 0 ,
// null is lessthan or equall to 0,

// Acording to this null should be equal to 0 , lets check
console.log(null == 0) // => FALSE 
// it is FALSE because there ia an another Defalut Rule in JavaScript that NULL and UNDEFINED
// should not become TRUE if it is compared to any other value





/* UNDEFINED */
//if we convert undefined into number the value will be NaN 
console.log(undefined > 0) //=> FALSE (NaN > 0)
console.log(undefined <= 0) // => FALSE (NaN <= 0) 
console.log(undefined >= 0) // => FALSE (NaN >= 0)
console.log(undefined <= 0) // => FALSE (NaN <= 0)

console.log(undefined == 0) // => FALSE 
// it is FALSE because there ia an another Defalut Rule in JavaScript that NULL and UNDEFINED
// should not become TRUE if it is compared to any other value


/* Triva Question to find the oupt of 'goms' > 'Zoms' */

console.log('The Answer of Triva Question is '+ ('goms' > 'Zoms'))