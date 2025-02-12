/* Jump Statements */
// There are Two Types of Jump Stsements in JavaScript They are,
// Continue , Break

/* Break */
// The Break Statement is used to exit or stop a loop or switch statement when ever we want
// This means it will exit the loop or switch before it normally would.

console.log( "\nloop using break when i==3" );
for ( let i = 0; i < 10; i++ )
{
  if ( i === 3 )
  {
    break; // here the entire loop will not run according to the condition instead the loop will Exit when i is 3.
  }
  console.log( i );
}
// Output: 0, 1, 2,

/* continue */
//The continue statement is used to skip the current iteration of a loop and move to the next iteration.

console.log( "\nloop using Continue when i==4" );
for ( let i = 0; i <= 10; i++ )
{
  if ( i == 4 )
  {
    continue; // here the entire loop will not run according to the condition instead it will Skip the current iteration when i is 4
  }
  console.log( i );
}
// Output: 0,1,2,3,5,6,7,8,9,10

/* print sum of even numbers using continue statement */
let sum = 0;
for ( i = 0; i <= 10; i++ )
{
  if ( i % 2 != 0 )
  {
    continue;
  }
  sum += i;
  //console.log(sum);
  // if you place the console.log inside the loop => it will run the loop and will output assigneg to sum each time. // 0,2,6,12,20,30
}
console.log( sum ); // if you place the console.log outside the loop => it will run the loop and will give the final output. // 30
