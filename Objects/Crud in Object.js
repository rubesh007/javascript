/* Default Object */
let Bat = {
  brand: "MRF",
  Type: "Strich Ball",
  Weight: 2 + "kg",
};
console.log( Bat ); //{ brand: 'MRF', Type: 'Strich Ball', Weight: '2kg' }

/* Note 
 We will use obejectName['key'] = Value When we are Using a String as a KeyWord or Adding a New Value or if the key is MultiWord
*/

/* Adding a property to Object */
// by using { obejectName['key'] = Value } this syntax we can able to add a property to the Object if the key is MultiWord 

// by using { obejectName.key = Value } this syntax we can also able to add a property to the Object if the key is Not a MultiWord

Bat[ 'Brand Ambassidor' ] = "Virat Kholi"; // for adding a new property if the key is MultiWord key must be inside [] with ''
Bat.age = 22; // for adding a new property if the key is Not a MultiWord the key can be{ obejectName.key = Value }
console.log( Bat );
/* 
{
  brand: 'MRF',
  Type: 'Strich Ball',
  Weight: '2kg',
  'Brand Ambassidor': 'Virat Kholi'
  age: 22
}
*/


/* Removing or Deleting a property in Object */
// by using { delete object.key } this Syntax we can able to remove any particular property we want

delete Bat.Weight;
delete Bat.age;
console.log( Bat );
/* 
{
  brand: 'MRF',
  Type: 'Strich Ball',
  'Brand Ambassidor': 'Virat Kholi'
}
*/


/* Changing the value of a key in objec */
// by using { objectName.key = "Value to change" } this syntax we can able to change the value of a particular key

Bat.brand = "Ceat"; //  here the key has no space and hence we use this method
Bat[ 'Brand Ambassidor' ] = "Rohit Sharma";
// it is same as adding a property because, the key has space and when we use space for a key it should be inside [] with ''
console.log( Bat );
/*
{
  brand: 'Ceat',
  Type: 'Strich Ball',
  'Brand Ambassidor': 'Rohit Sharma'

}
*/

/* Triva Question to create a empty Object called user and add a property Name and edit it and delete it  */

// let user = {

// };
// console.log( user ); // {}

// user[ 'Name' ] = "RubeshKumar";
// console.log( user ); // { Name: 'RubeshKumar' }
// console.log( user.Name ); // RubeshKumar

// user.Name = 'RubeshKumar.S';
// console.log( user ); // { Name: 'RubeshKumar.S' }
// console.log( user.Name ); // RubeshKumar.S

// delete user.Name;
// console.log( user ); // {}
// console.log( user.Name ); // undefined