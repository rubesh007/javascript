console.log("Subraction",'40' - '2')
console.log("Multipication",'40' * '2')
console.log("Division",'40' / '2')
console.log("Modulos",'40' % '2')


console.log(" \n \n Addition",'21' + '1')

/* {STRING CONVERSION} */

/* Converting Number DataType To String DataType */
// Before conversion
let age = 22 ;
console.log("Before conversion = ",typeof age)
 
// After Conversion 
age = String(age)
console.log("After conversion = ",typeof age)


/* Converting Boolean DataType To String DataType */
// Before conversion
let IsAdult = false;
console.log("Before conversion = ",typeof IsAdult)
console.log("Before conversion = ", IsAdult)

// After Conversion 
IsAdult = String(IsAdult)
console.log("After conversion = ",typeof IsAdult)
console.log("After conversion = ", IsAdult)

/* {NUMBER CONVERSION} */

/* Converting String DataType To Number DataType */
// Before conversion
let rollNo = '21';
console.log("Before conversion = ",typeof rollNo)

// After Conversion 
rollNo = Number(rollNo)
console.log("After conversion = ",typeof rollNo)

/* Converting Boolean DataType To Number DataType */
// Before conversion
let Ismajor = false;
console.log("Before conversion = ",typeof Ismajor)
console.log("Before conversion = ", Ismajor)

// After Conversion 
Ismajor = Number(Ismajor)
console.log("After conversion = ",typeof Ismajor)
console.log("After conversion = ", Ismajor)

/* {BOOLEAN CONVERSION} */

/* Converting String To Boolean DataType */
// Before conversion
let name = "";
console.log("Before conversion = ",typeof name)
console.log("Before conversion = ", name)

// After Conversion 
name = Boolean(name)
console.log("After conversion = ",typeof name)
console.log("After conversion = ", name)

/* Converting Number To Boolean DataType */
// Before conversion
let id = " ";
console.log("Before conversion = ",typeof id)
console.log("Before conversion = ", id)

// After Conversion 
id = Boolean(id)
console.log("After conversion = ",typeof id)
console.log("After conversion = ", id)

/* Triva Question to save 0 in a variable as string and find its value after converting into Boolean */

let x = '0';
console.log(typeof x);
x = Boolean(x);
console.log(x)
// The Value will be True