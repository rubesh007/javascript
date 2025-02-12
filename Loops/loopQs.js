/* Factorial of Numbers */

/* USing wile loop */

let n = 5;

let ans = 1; // ----> important note When you are multiplying a number you should assign the value as 1

let i = 1; // Initializing i =1

while (i <= n) {
  // the loop will run untill ---> i is less than n
  ans = ans * i; // ans = 1*1 , ans = 1*2 , ans = 2*3 ,ans = 6*4 ,ans = 24*5 ----> The multiplied value will be assigned to the ans
  i++; // incrementing i
}
console.log("Factorial of " + n + " using Wile Loop " + ans);

//----------------------------------------------------------------------------------------------------------------------------------

/* USing For loop */

let answer = 1; // ----> important note When you are multiplying a number you should assign the value as 1
for (let i = 1; i <= n; i++) {
  answer *= i; //// ans = 1*1 , ans = 1*2 , ans = 2*3 ,ans = 6*4 ,ans = 24*5 ----> The multiplied value will be assigned to the ans
}
console.log("Factorial of " + n + " using For loop " + answer);

//----------------------*---------------------------------*---------------------------------------------------*---------------------

/* Sum of Numbers */

/* USing wile loop */
let num = 10;
let sum = 0; // ----> important note When you are Adding a number you should assign the value as 0
let j = 1; // Initializing j =1
while (j <= num) {
  // the loop will run untill ---> j is less than num
  sum += j;
  j++;
}
console.log("\t \nSum of " + num + " using wile loop " + sum);

//----------------------------------------------------------------------------------------------------------------------------------

/* USing For loop */
let number = 5;
let summ = 0;
for (let i = 1; i <= number; i++) {
  summ += i;
}
console.log("Sum of " + number + " using For loop " + summ);

//----------------------*---------------------------------*---------------------------------------------------*---------------------

/* Factorial of Numbers */

/* Using Do-While Loop */

let I = 1;
let target = 10;
let value = 1;

do {
  value *= I; //here value = 1 and I = 1 so , value = 1 X 1

  I++; // here  we are incrementing the I value now I = 2
} while (I <= target); // the loop will run untill ---->  the condition I less than or equal to target

//now it is (2 less than or equal to 10) if it passes it will continue the loop
console.log("\nFactorial of " + target + " using do-while loop " + value);

//----------------------------------------------------------------------------------------------------------------------------------

/* Sum of Numbers */

/* Using Do-While Loop */

let J = 1;
let final = 10;
let Value = 0;

do {
  Value += J;
  J++;
} while (J <= final);
console.log("Sum of " + final + " using do-while loop " + Value);
