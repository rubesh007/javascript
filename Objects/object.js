/* Object */

// object is a collection of various data types. 
// Objects store data in key-value pairs,
// where keys are identifier or strings (or symbols) and values can be any JavaScript data type, 
// including  primitive types and other objects or arrays or Function.
// Each property of an object can hold a value of any data type including,
// Primitive types: such as strings, numbers, booleans, null, and undefined.
// object should be declared within {}.

let car = { // creating a object
    name: "Nexon",
    company: "Tata",
    Model: 2024,
    price: 1500000
};
// here the code inside the {} are properties of the object
// left side of : is Key && right side of : is their Values

// if we console.log the car, it will print the entire object--> {its key and value},
console.log( car );
//{ name: 'Nexon', company: 'Tata', Model: 2024, price: 1500000 }

// if we want to print the particular value of the object then we want to mention its key there,
console.log( car.name ); // Nexon --> meaning {print the value of the Key: name which is present inside the object car}
console.log( car.company ); // Tata 
console.log( car.Model );// 2024
console.log( car.price );// 1500000
// It will display only the value of the key which is present in the object.


/* We can also able to assign a variable as a value which is declared and assigned a value */

let isFirstHand = true;
let EngineOption = "Petrol,Desiel";

car = {
    name: "Nexon",
    company: "Tata",
    //Model: 2024,
    price: 1500000,
    Engine: EngineOption,
    isFirstHand: isFirstHand
};
console.log( car.Engine ); // Petrol,Desiel,ev
console.log( car.isFirstHand ); // true

/* There is no rule to name the key we can name what ever we want  */
/* we can also use spaces for key, but if we use spaces for naming the key it should be a proper STRING */

let carr = {
    name: "Nexon",
    company: "Tata",
    Model: 2029,
    price: 1500000,
    "Engine Type": EngineOption,
    isFirstHand: isFirstHand
};
console.log( carr[ "Engine Type" ] ); // if we use spaces for naming then we should console.log using in this method
// because we are trying to access the value of a key which is in a string Format.
// we can not able to access it normally like console.log(carr.Engine Type)