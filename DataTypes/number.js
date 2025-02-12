/* 1.Number Datatype */

let pi = 3.14;
let prime = 7;
console.log(pi, "\n", prime);
console.log("typeof pi is", typeof pi, "\n", "typeof prime is", typeof prime);

// Special Numbers

let infi = Infinity;
let negInfi = -Infinity;

console.log(infi);
console.log(negInfi);
console.log(`typeof infi is ${typeof infi}`);
console.log(`typeof negInfi is ${typeof negInfi}`);

let nan = NaN;
console.log(`typeof nan is ${typeof nan}`);
nan = NaN + 2; //  Whatever the operation done with NaN the final output will be NaN e.g. => NaN + 2 = NaN
console.log(`The value of nan is ${nan}`);

let temp = NaN ** 0
console.log(`The value of temp is ${temp}`); //  if we do an power operation only with 0 then the value will be 1 e.g. => NaN ** 0 = 1

let divide = 1/0;
console.log(`The value of divide is ${divide}`); // if we divide any number by zero the output will be Infinity e.g. => 1/0 = infinity

/* Triva Question to save 543 + 245 and save its type */

let Sum = 543 + 245;
console.log(`The Typeof of sum is ${typeof Sum}`);