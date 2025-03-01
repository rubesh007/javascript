/* Date */

// working with dates and times is primarily handled by the Date object.
// The Date object represents a specific moment in time. 
// It allows us to work with dates and times in the JavaScript applications.
// Months are indexed from 0 -11
// Hours are indexed from 0 - 23
// The day of the week, are indexed as 0-6, where 0 is Sunday, 1 is Monday, and so on.
// JavaScript's Date constructor expects milliseconds as an integer. 
// So, {decicmal values } ex; 0.05 milliseconds is converted to 0 milliseconds.

/* Declaring a Date object */

// we can declare Date by using the constructor method

let date = new Date(); // Creates a Date object with the current date and time.
console.log( date ); // 2025-02-28T06:32:14.836Z provides the current date

//-----------------------------------------------------------------------------------------------------------------

// new Date( milliseconds ): Creates a Date object from a timestamp( milliseconds since the Epoch ).;

let millisecondsSinceEpoch = 1740746570534; // it will create a date and time corresponding to the given timestamp
let mydate = new Date( millisecondsSinceEpoch );
console.log( mydate ); // 2023-03-15T13:20:00.000Z 
// Output: A date and time corresponding to the given timestamp

/* Date.now(): is A static method that returns the current timestamp in milliseconds */
let ruby = Date.now(); // Creates a Date object with the current date and time.
console.log( ruby ); 1740746570534;

//-------------------------*-----------------------------------------*--------------------------------------*-----

/* Adding Values to Date */

// we can able to Set date and time 
// Using this components setFullYear(), setMonth(), setDate()).

/* SetFullYear */

// by using this component we can set the year 
// we can also able to create an Date object by pssing the values inside the constructor function

let bday = new Date(); //  it creates a new object called bday with the Current date with month and year
bday.setFullYear( 2005 ); // here we are seting the year to 2005
console.log( bday ); // 2005-02-28 {T06:37:07.491Z} --> Time

//  we can also able to set the FullYear including Year-month-Date
console.log( bday ); // 2005-02-28 {T06:37:07.491Z} --> Time

bday.setFullYear( 2024, 2, 4 ); // first is year and Month -> starting from 0 to 11 and date from 1 to 31
console.log( bday ); // 2024-03-04 {T06:45:17.825Z} --> Time

//-----------------------------------------------------------------------------------------------------------------

/* setMonth() */

// by using this component we can set the Month

console.log( bday ); // 2024-03-04 {T06:45:17.825Z} --> Time

bday.setMonth( 1 ); // here we are seting the month to Feb
console.log( bday ); // 2024-02-04T06:50:25.347Z

//  we can also able to set the Month including the Date 
console.log( bday ); // 2024-02-04T06:50:25.347Z

bday.setMonth( 0, 31 ); // first is Month -> starting from 0 to 11 and date
console.log( bday ); // 2024-01-31 {T06:54:16.812Z} --> Time

//-----------------------------------------------------------------------------------------------------------------

/* SetDate() */

// by using this component we can set the Month

let myDate = new Date();
myDate.setDate( 15 ); // Set the day to the 15th
console.log( myDate ); // 2025-02-15 {T06:57:06.662Z} --> Time

// setting the date to 32 will cause the month to increment.

myDate.setDate( 32 );  // Set the day to the 32
console.log( myDate ); // 2025-03-04 {T06:57:41.502Z} --> Time

//-------------------------*-----------------------------------------*--------------------------------------*-----

/* Getting date and time components */

// JavaScript's Date object provides numerous methods for Getting date and time components
// getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds()).

let year = 2025, month = 1, dates = 28, hours = 23, minutes = 50, seconds = 50, milliseconds = 0.22;

let Data = new Date( year, month, dates, hours, minutes, seconds, milliseconds );

/* getFullYear() */

// by using this component we can get the FullYear

console.log( Data.getFullYear() ); // 2025


/* getMonth() */

// by using this component we can get the Month

console.log( Data.getMonth() ); // 1


/* getDate() */

//by using this component we can get the date

console.log( Data.getDate() ); // 28


/* getHours() */

// by using this component we can get the Hour

console.log( Data.getHours() ); // 12


/* getMinutes() */

//by using this component we can get the Minutes

console.log( Data.getMinutes() ); // 45


/* getSeconds() */

// by using this component we can get the Seconds

console.log( Data.getSeconds() ); // 50


/* getday() */

// by using this component we can get the day
// getDay() returns the day of the week, where 0 is Sunday, 1 is Monday, and so on.
// February 28, 2025, is a Friday, so getDay() will return 5

console.log( Data.getDay() ); // 5


/* get */

// by using this component we can get the miliiseconds

console.log( Data.getMilliseconds() ); // 0

//-------------------------*-----------------------------------------*--------------------------------------*-----

/* Converting dates to strings */

// JavaScript's Date object provides three methods for Converting dates to strings
// toString(), toDateString(), toISOString().

/* tostring() */

// it Returns a string representing the date and time in a human-readable format, using the locale of the JavaScript environment.
// The format varies depending on the browser and locale,
// but it generally includes the day of the week (0-6), month, day(01-31), year, time, and time zone.
// it is Locale-specific, and includes date and time
// it is used For general display to users.

let Ex1 = new Date();
console.log( Ex1.toString() ); // Fri Feb 28 2025 13:08:00 GMT+0530 (India Standard Time)

//-----------------------------------------------------------------------------------------------------------------

/* toDateString */

// it Returns a string representing only the date portion of the Date object, in a human-readable format
// The format is typically "Day Month Date Year"
// it is Locale-specific, includes only the date.
// it is used For displaying only the date portion.

let Ex2 = new Date();
console.log( Ex2.toDateString() ); // Fri Feb 28 2025

//-----------------------------------------------------------------------------------------------------------------

/* toISOString() */

// it Returns a string representing the date and time in ISO 8601 format, which is a standardized format 
// The format is "YYYY-MM-DDTHH:mm:ss.sssZ",where
// YYYY: Year
// MM: Month (01-12)
// DD: Day (01-31)
// T: Separator between date and time
// HH: Hours (00-23)
// mm: Minutes (00-59)
// ss: Seconds (00-59)
// sss: Milliseconds (000-999)
// Z: Time zone offset (always UTC in toISOString())
// Standardized (ISO 8601), includes date and time in UTC.
// For exchanging date and time data between systems or storing dates in a standardized format. 
// It's the most reliable option for data interchange.

let Ex3 = new Date();
console.log( Ex3.toISOString() ); // 2025-02-28T07:47:57.448Z

