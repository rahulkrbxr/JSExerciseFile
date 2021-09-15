// null = means nothing
// js null is different from null of other programming languages
// in other langs null means null or empty object, but in js we can initialize variable to null, 
// if its value is not decided. Remember number (0) and string ('') is still a value not null
var marks = null;
marks = 97;
console.log(marks);


// undefined = value has not been decided yet i.e, nothing has been assigned
// whereas in null it means something is assigned but we don't know yet
var distance;
console.log(distance);


// but, one such weird eg
// Argument: null and undefined both means nothing some in intutive sense it is same
// so, null == undefined is considered true in javascript
console.log(null == undefined);     // true
// but, again
console.log(null === undefined);    // false



console.log(isNaN(1 + null), 1 + null);       // false
console.log(isNaN(1 + undefined), 1 + undefined);      // true


// it is not defined in memory, so
// not defined error 
// console.log(x);


// Null and undefined
/*
* Null signifies that the container is purposefully kept empty. On the other hand, 
* undefined means that the container does not have anything inside it. 
* Null is like saying I am keeping my tea container empty. 
* Undefined is like saying that I have a container but I have forgotten to put anything 
* inside it. That’s why null is set by the user i.e you. This is not the case with undefined 
* as any value which has not been defined is initialized undefined by the translator.
*/

// not defined
/*
* There is also something known as not defined, which means that something hasn't even been 
* declared or allocated memory. This is like saying that my container doesn't even exist. 
*/


// typeof operator
console.log(typeof 23);     // number
console.log(typeof "rahul");        // string
console.log(typeof true);       // boolean
console.log(typeof undefined);      // undefined
console.log(typeof null);   // object, just one of the weird behaviour of js


// == checks value
// === checks value and data type called as 
// strict equality operator
console.log(typeof(0 == "0"), 0 == "0");      // true
console.log(typeof(0 === "0"), 0 === "0");     // false, value is equal (due to coersion) but not the data type


// Notes:
/*
* === is better choice for comprehensive check, eg if user enters 0 instead '0'
* console.log(typeof('5'), typeof(''));     // string, string bcz '' is an empty string. Not string, null
* 
*/

console.log(typeof('5'), typeof(''));