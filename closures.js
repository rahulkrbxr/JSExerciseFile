// // How function returns other function
// function greet(name) {
//     var greeting = "Hi " + name
//     return function() {
//         console.log(greeting)
//     }
// }

// var sayHello = greet("Rahul")
// sayHello()

// sayHello = greet("John Doe")
// sayHello()

/* ------------------------------------------------ */

//Closures in JS
// function welcome(name) {
//     var greeting = "Hi " + name
//     var message = function() {
//         console.log(greeting)
//     }
//     return message
// }

// var sayHello = welcome("Rahul")
// sayHello()

/**
 * NOTE
 * Closures helps when you require the inner function to access outer function
 * (or resources) as long as you want, even if outer function
 * has finished executing
 */

/* --------------------------------------------------- */

// function modifyItem() {
//     var items = 0

//     return {
//         add: function() {
//             console.log("Added item to cart!")
//             items++
//         },

//         getCount: function() {
//             return "Items in cart = " + items
//         }
//     }
// }

// var item = modifyItem()
// item.add()
// console.log(item.getCount())    // 1

// item.add()
// item.add()
// console.log(item.getCount())    // 3


/* ------------------------------------------------- */


// function createEmployeeID() {
//     var prefix = "employee"
//     return generateID()
// }

// var generateID = function() {
//     for (var i=0; i<5; i++) {
//         console.log(prefix + i)
//     }
// }

// var print = createEmployeeID()  // Uncaught ReferenceError: prefix is not defined


/* ------------------------------------------------ */


// function createEmployeeID() {
//     var prefix = "employee"
//     return generateID = function() {
//         for (var i=0; i<5; i++) {
//             console.log(prefix + i)
//         }
//     }
//     return generateID
// }

// var print = createEmployeeID()
// print()


/* -------------------------------------------------- */


var generateID = function() {
    var prefix = "uid-"
    var count = 0
    return function() {
        count++
        return prefix+count
    }
}

var create = generateID()

console.log(create())   // uid-1
console.log(create())   // uid-2
console.log(create())   // uid-3
