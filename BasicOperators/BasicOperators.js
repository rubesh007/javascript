/* Basic Operation */
//There Are 2 Types of Opearator unary and binary
// 7 + 3 = 10;
// Here 7 and 3 are operands and + is operator

/* Unary Operator (-) */
// A unary operator is an operator that operates on a single operand.
let x = -1;
x = -x;  //here -x = -1 and Since x is -1, negating it (-1(-1)) results in 1.
console.log(`The value of x is `+x); // 1

/* Unary Operator (+) */
let y = '23', z='7';
let ans = y + z; 
console.log(`The value of ans is `+ans);  // here Whwen we add two string it perfoms String Conactination

let c = '23', d='7';
let answer = +y + +z;  // here we are performing type Conversion with Unary( + )
console.log(`The value of answer is `+answer);  


/* Binary Operator */
// A binary operator is an operator that operates on two operands.
// Basically the Binary operator consist of Six Types of operands They are;
/* Addition --> Adds two Numbers */
let a=12 , b=8;
let sum = a + b;
console.log("The Value of a + b = "+sum)

/* Subtraction --> Subtracts two Numbers */
// let a=12 , b=8;
// let sum = a - b;
// console.log("The Value of a - b = "+sum)

/* Multiplication --> Multiplies two Numbers  */
// let a=12 , b=8;
// let sum = a * b;
// console.log("The Value of a * b = "+sum)

/* Division --> Divides two Numbers */
// let a=16 , b=8;
// let sum = a / b;
// console.log("The Value of a / b = "+sum)

/* Modulo --> Finds the Remainder of  Division of two Numbers */
// let a=12 , b=8;
// let sum = a % b;
// console.log("The Value of a % b = "+sum)

/* Exponent --> Squares two Numbers */
// let a=2 , b=4;
// let sum = a ** b;
// console.log("The Value of a ** b = "+sum)

/* Assignment Operators */
let Name = 'Rubesh'; 
// here we are assigning the value Rubesh to the variable Name using assignmet operator( = )
console.log(Name)

/* Chaining Assignment */
let A = B = C = 12;
//here we are Chaining the Assignment in one line 
console.log('The value of Chaining Assignment ' + A,B,C)

/* Modify In Place */
let X = 12;
// instead of performomg  X = X + 12;
// We can also able to do
X += 12;
console.log("The Value of X is "+X)


/* Increment / Decrement */
// Increment is used to add one to a number
let add = 12;
add++;
console.log("after Increment value "+add)

// Decrement is used to subtract one from a number
let sub = 12;
sub--;
console.log("after Decrement value "+sub)
// the above one is PostIncrement and PostDecrement


//Pre Increment / Decrement
let Add = 12;
console.log("after PreIncrement value "+Add)

// Decrement is used to subtract one from a number
let Sub = 12;
--Sub;
console.log("after PreDecrement value "+Sub)

//Difference Btwn Pre and Post
let number = 12;
console.log(`After PreIncrement value ${++number}`)
let Number = 12;
console.log(`After PreDecrement value ${--Number}`)

let number1 = 12;
console.log(`After PostIncrement value ${number1++}`)
console.log(number1)
let Number2 = 16;
console.log(`After P0stDecrement value ${Number2--}`)
console.log(Number2)


/* Triva Question => find the answer for let e =12 , f=13 and g = ++e + f--; find the value of g */

let e = 12 , f=13;
let g =++e + f--;
console.log("The value of g is "+ g)
