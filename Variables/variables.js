//new assignin method --> we can countiously asssign variables in single line by separating them using , 
let a = 20, b = 5, c = a / b;
console.log(`The value of c is ${c}`);
console.log(a, b, c);

// declare 2 variables and asssigning values for them
let name, student;
name = "rubesh";
student = name, console.log(student);

//passing parameters in a function
const num = sum(2, 3, 90);
function sum(a, b, c) {
   d = a * b % c
   console.log(d)
}

//passing parameters in a function by declaring the variables in const
const user = "rubesh@gmail.com";
const pwd = "Rubesh123";
/* login(user, pwd) */

//calculating date of birth
const DATE_OF_BIRTH = "04.02.2002"; // here the variable declaration is in uppercase becoz its hard-coded value
const age = calAge(DATE_OF_BIRTH); // here the variable declaration is in lowercase becoz it can be calculated in runtime =>{while the program is running} (Dynamic value)
function calAge(result) { // the DATE_OF_BIRTH is passed as a param to calAge() and we receive it here and store it as Result
   console.log(result);
}
