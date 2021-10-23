
// Variable Hoisting
// consolelog("x = ", x);
// var x = 20;

// console.log("y = ", y);

// var p;
// console.log("p = ", p); // undefined
// p = 30;
// console.log(p)  // 30


/* ------------------------------------ */


// Function Hoisting

// add(2, 5);   // 7

// function add(x, y) {
//     // return x+y;
//     console.log(x+y);
// }

// // console.log(add(2, 5));   // 7


/* ------------------------------------ */


// var add;
// add(1, 2);  // TypeError: add is not a function


// var add;
// // add(1, 2);   // TypeError: add is not a function
// add = function(x, y) {
//     console.log(x + y);
// }
// add(2, 5);

/* ------------------------------------------------ */

// console.log(x);
// var x;
// x = 10;

/*
In JavaScript, all the variables are hoisted at the top of their scope. 
In the given code snippet, the declaration of the variable x is moved to 
the top of its scope, which is the global scope. So, this code snippet 
is converted to:

var x;
console.log(x);
x = 10;
Any variable, if left uninitialized, is assigned a value undefined in JavaScript. 
The next statement is the console.log() statement, which prints the value of x 
as undefined on the console.
*/

var average, arr;

arr = [1, 2, 3, 4, 5];

average = function(arr) {
    var sum = 0;
    for (var i=0; i<arr.length; ++i) {
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log(average(arr));
