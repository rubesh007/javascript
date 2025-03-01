/* Nested Object Example */

let details = {
    employees: {
        emp1: {
            name: "Rubesh",
            salary: 22000,
            EmpId: 23,
            Address: "Banaglore",
        },
        emp2: {
            name: "Ashwni",
            salary: 22000,
            EmpId: 24,
            Address: "Banaglore",
        },
        emp3: {
            name: "Dinesh",
            salary: 20000,
            EmpId: 25,
            Address: "chennai",
        },
    },
};

/* Using for in */

for ( key in details.employees ) {
    console.log( details.employees[ key ].name );
}

/* Using for loop */

let keys = Object.keys( details.employees );
// assignging the keys of details.employees to keys
// here object is constructor will learn soon 
console.log( keys );
console.log( keys.length );

for ( let i = 0; i < keys.length; i++ ) {
    console.log( details.employees[ keys[ i ] ].name );
}

/* Note */
let obj = {};

for ( let i = 0; i < 10; i++ ) {
    obj.i = i;
    console.log( obj ); // { i: 0 }{ i: 1 }{ i: 2 }{ i: 3 }{ i: 4 }{ i: 5 }{ i: 6 }{ i: 7 }{ i: 8 }{ i: 9 }
}
// it updates each property in new object while looping
// In each iteration of the loop, object's property i is updated to the new value of i.
// So when console.log(object) is called, it shows the updated object

for ( let i = 0; i < 10; i++ ) {
    obj[ i ] = i;
}
console.log( obj ); // { '0': 0,'1': 1,'2': 2,'3': 3,'4': 4,'5': 5,'6': 6,'7': 7,'8': 8,'9': 9 }
// it updates each property in a single object while looping
// i is treated as a dynamic property name (or key) in the object.
// The key is the current value of i (0 through 9), and the value is i itself.
// it adds the values of i in the object rather than overwrite the property, not updating