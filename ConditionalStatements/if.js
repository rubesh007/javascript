/* CONDITIONAL STATEMENTS */
// IF Condition
// it is used to execute a block of code if the condition meets
let  isAdult;
let age =20; // here the value of age is 20
if(age > 19) // it it will check the condition
{ 
isAdult =true    // it the condition meets this block will run 
}
//console.log(isAdult)


let a ;
let year = 10; // here the value of age is 10
if (year > 15) // here the condition does not meet
{
  a = true // this block will not run
}
//console.log(a) // undefined 


let b = false;
let years = 10; // here the value of age is 10
if (years > 15) // here the condition does not meet
{
  b = true // this block will not run
}
//console.log(b) 



/* TRULEY AND FALSELY */

// TRULEY VALUE
let iscorrect = false;
let mark = 10;
if(true){
  iscorrect = true
}
//console.log(iscorrect)

// FALSELY VALUE
let isright = false;
let answer = 10;
if(false)
{
  isright = true // because of the FALSELY value this block wont run 
}
console.log(isright)