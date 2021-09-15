
// Part - 1

// var x = "20";    // 20
// var y = "2";     // 2
// using coercion

// var sub = x-y;
// var mul = x*y;
// var div = x/y;

// console.log(sub, mul, div);

// --------------

// var x = "20";   // 20  (valid)
// var y = "2a";   // 21  (invalid)

// var sub = x-y;  // NaN (Not a Number)

// console.log(sub);
// console.log(isNaN(sub));    // true
// console.log(isNaN(y));      // true;
// // isNaN() function

// --------------------------------------------------------

// Part - 2

// var x = 20;
// x = x.toString();
// console.log(typeof(x), x);

// -----------------

// 1
// console.log(Number('10'));  // 10
// console.log(Number('10.00'));   // 10
// console.log(Number('10.20'));   // 10.2
// console.log(Number('10a'));     // NaN

// 2
// using parseInt() and parseFloat() function
console.log(parseInt("10"));    // 10
console.log(parseInt("10.20"));     // 10
console.log(parseFloat("10.20"));       // 10.2
console.log(parseFloat("10"));      // 10
console.log(parseFloat("10abd"));   // 10

// 3
// use +() function, see coercion.js