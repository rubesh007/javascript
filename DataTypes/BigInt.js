/* 2.BigInt */
// 2^53-1 = 9007199254740991

/* console.log(9007199254740991+1);//correct
console.log(9007199254740991+2);//wrong  ==> before converting into BigInt
console.log(9007199254740991+3);//correct */

let limit =  9007199254740991n
console.log(limit+1n);//correct
console.log(limit+2n);//correct  // After Converting into BigInt
console.log(limit+3n);//correct
console.log(typeof limit)

/* Triva Question to save 1234567890 and convert it into BigInt and add 2024 with it */

let PERIYA_NUMBER = 12345678910n;
PERIYA_NUMBER += 2024n;
console.log(PERIYA_NUMBER);