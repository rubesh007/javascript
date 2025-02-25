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