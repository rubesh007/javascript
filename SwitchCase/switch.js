// /* Switch Case Statements */
// //A switch case statement in JavaScript allows you to execute different blocks of code based on the condition.
// //  It is an alternative to multiple if...else  and if statements.
// //  The code wil be more readable and manageable for multiple conditions.
// /* case only checks for strict equality (===), it cannot have conditions like number > 10 */


// let number = 4; // assigning the number

// switch (number) { // getting the input as parameter
//     case 1: console.log('one') // case 1 => checking = if 4==1
//     case 2: console.log('two')// case 2 => checking = if 4==2
//     case 3: console.log('three')// case 3 => checking = if 4==3
//     case 4: console.log('four')// case 4 => checking = if 4==4
//     case 5: console.log('five')// case 5 => checking = if 4==5
//     default: console.log('The Number is greater than five') // else condition
// }
// // But by doing the above method we may not able to get the correct or specific answer 
// // Because Without break;, execution will "fall through" to the next case.
// // insted will get { four, five, The Number is greaater than five }

// // To avoid this will use Break statements after the each condition if any condition passes then it will exit the loop
// switch (number) { // getting the input as parameter
//     case 1:
//         console.log('one'); // case 1 => checking = if 4==1
//         break;
//     case 2: console.log('two');  // case 2 => checking = if 4==2 
//         break;
//     case 3: console.log('three') // case 3 => checking = if 4==3;
//         break;
//     case 4: console.log('four'); // case 4 => checking = if 4==4
//         break;
//     case 5: console.log('five'); // case 5 => checking = if 4==5
//         break;
//     default: console.log('The Number is greater than five') // else condition
// }

// /* If we don't give any condition or evaluation in case 1, execution will "fall through (Skip or Jumpto)" to the next case. */
// const num = 2;
// switch (num) { // getting the input as parameter
//     case 1:
//     case 2: console.log('two');  // case 2 => checking = if 4==2 
//         break;
//     case 3: console.log('five'); // case 5 => checking = if 4==5
//         break;
//     default: console.log('The Number is greater than Two') // else condition
// }

// /* If the input is Number and if we check the condition in String DataType it will diectly run the default condition, because
//    switch case only checks for strict equality (===) */

// switch (num) { // getting the input as parameter
//     case "1":
//     case "2": console.log('two');  // case 2 => checking = if 4==2 
//         break;
//     case "3": console.log('five'); // case 5 => checking = if 4==5
//         break;
//     default: console.log('The Number is greater than Two') // else condition
//}

/* Triva Question baesd on the opertaion from the user print the output */

let opt = '%';
let a = 5, b = 8;

switch (opt) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(a / b);
        break;
    case "**":
        console.log(a ** b);
        break;
    default:
        console.log("Invalid Opeeration")
}