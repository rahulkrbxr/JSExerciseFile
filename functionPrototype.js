// run this js on browser console

// a = 1
// a.__proto__     // Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …

// a = "hi"
// a.__proto__     // String {'', constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}

// a = true
// a.__proto__     // Boolean {false, constructor: ƒ, toString: ƒ, valueOf: ƒ}

// a = {}
// a.__proto__     // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}



// Prototypal inheritance
//  It is a method by which an object can inherit the properties and methods of another object.
let animal = {
    moves: true 
}

let rabbit = {
    eats: true 
}

rabbit.__proto__ = animal    // supported in ECMA 2015, now depricated

console.log(rabbit.moves)   // true
console.log(rabbit.eats)    // true
console.log(rabbit.kills)   // undefined
/**
 * NOTES
 * Only the primitive types - Boolean, String and Number have the object equivalents.
 * This is why, when you try to access a property on a boolean, string or number,
 * it is internally converted to an object value. However, the primitive data types
 * - undefined and null do not have any object equivalents, hence the error. 
 * Thus, this option is the correct choice.
 */

