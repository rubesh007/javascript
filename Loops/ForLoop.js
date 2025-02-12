/* LOOPS */
// A loop is a programming construct that repeats a block of code as long as a specified condition is met.
// There are different types of loops in JavaScript, such as while, do-while loops and for.
// -- Initialization, Validation, Updation important for all loops

//---------------------*---------------------------*------------------------------------*-------------

/* While Loop */
// It is called as ENTRY CHECK LOOP or ENTRY CONTROL LOOP,
// it will check the condition First and runs the loop only if the condition is true
// While Loop will not run the loop if the condition is false

// printing from 1-10

// let num = 1; // ----> Initialization
while (num <= 10) {
  // ---> Condition
  // the loop will run the block until the condition inside this is true
  // and it will exit the loop once the condition is false.
  console.log(num);
}
// the loop will exit only if the condition is false, in the above loop the condition won't fail (1 <= 10),
// so, the loop will run infinitely

while (0) {
  // here we are directly assigning the value and condition as false
  // the loop will run the block until the condition inside this is true
  // and it will exit the loop once the condition is false.
  // here the condition is false so it won't run the block
  console.log(number);
}

let Num = 1; // ----> Initialization
while (Num <= 10) {
  // ---> Condition
  // validating the condition, here 1 is less than 10 == True
  console.log(Num); // then it will run this block and print num = 1;
  Num++; // here we are updating the value of num by incrementing it (num++ == num + 1) -> num = 1 so 1+1 = 2
  // the condition will fail when num = 11; ---> // Updation
}
console.log("Outside Loop"); // once the condition fails it will exit the loop and run this //console

//-----------------*----------------------------*----------------------------------*------------------

/* do-While Loop */
// It is called as EXIT CHECK LOOP or EXIT CONTROL LOOP
// it will run the loop First and check the condition at Last
// do-While Loop will definitely run the loop at least one time even if the condition is False
// and then it will check the condition

let numb = 10; // ----> Initialization
do {
  // here it will run the loop
  console.log(numb); // and prints the num (numb = 10)
  numb--; // here the value gets decremented from 10 to 9 // ----> Updation
} while (numb <= 1); // ----> Condition
// here the condition is false (numb <= 1) ==> 9 <= 1 so it exits the loop

let number = 1; // ----> Initialization
do {
  // here it will run the loop
  console.log(number); // and prints the num (numb = 1)
  number++; // here the value gets incremented from 1 to 2  // ----> Updation
} while (number <= 10); // here it checks the condition and if it is true, // ----> Condition
// it will move to the next iteration or else it will exit the loop

//-----------------*----------------------------*----------------------------------*------------------

/* For Loop */
// The for loop is used when we know the number of iterations we are going to do.
// the loop will run the block until the condition inside this is true
// and it will exit the loop once the condition is false.
// for the above two loop Initialization, validation and Updation is done in different area but,
// here Initialization, validation and Updation is done in a single line.
// For Loop will not run the loop if the condition is false

for (let i = 20; i <= 30; i++) {
  // Initialization, validation and Updation is done here in single line
  console.log(i);
}

/* NOTE */
/* While loop can be used when we don't know how many times we are going to do iteration or loop */
/* do-While loop can be used when we want to run at least one Iteration or loop */
/* For Loop can be used when we know how many times we are going to do iteration or loop */
