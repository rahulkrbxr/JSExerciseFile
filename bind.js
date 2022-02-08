// var person = {
//     firstName: 'John',
//     lastName: 'Smith',
//     get: function() {
//         console.log('Outer: ' + this.firstName + " " + this.lastName) 
//         var print = function() {
//             console.log("Inner: " + this.firstName + " " + this.lastName)
//         }

//         print()
//     }
// }

// person.get()
/**
 * o/p
 * Outer: John Smith
 * Inner: undefined undefined
 */


// ------------------------ 


// var person = {
//     firstName: 'John',
//     lastName: 'Smith',
//     get: function() {
//         console.log('Outer: ' + this.firstName + " " + this.lastName) 
//         var that = this
//         var print = function() {
//             console.log("Inner: " + that.firstName + " " + that.lastName)
//         }

//         print()
//     }
// }

// person.get()
/**
 * o/p
 * Outer: John Smith
 * Inner: John Smith
 */


// ---------------- 


// var person = {
//     firstName: 'John',
//     lastName: 'Smith',
//     get: function() {
//         console.log('Outer: ' + this.firstName + " " + this.lastName) 

//         var print = function() {
//             console.log("Inner: " + this.firstName + " " + this.lastName)
//         }.bind(this)

//         print()
//     }
// }

// person.get()
/**
 * o/p
 * Outer: John Smith
 * Inner: John Smith
 */


//----------------------------------- 


var person = {
    firstName: 'John',
    lastName: 'Smith',
    get: function() {
        console.log('Outer: ' + this.firstName + " " + this.lastName) 

        var print = function(role) {
            console.log("Inner: " + this.firstName + " " + this.lastName + ". He is an " + role + ".")
        }.bind(this, "Engineer")

        print()
    }
}

person.get()
/**
 * o/p
 * Outer: John Smith
 * Inner: John Smith. He is an Engineer.
 */
