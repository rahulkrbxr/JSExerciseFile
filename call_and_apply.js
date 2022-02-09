/**
 * bind() method 
 */

// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     get: function() {
//         console.log('Outer: ' + this.firstName + " " + this.lastName);
        
//         var print = function(role, language) {
//             console.log(role, language);
//             console.log('Inner: ' + this.firstName + " " + this.lastName + ". I am a " + language + " " + role + ".");   
//         }.bind(this, "developer", "javascript");

//         print();
//     }
// }

// person.get();

/**
 * o/p 
 * Outer: John Doe
*  developer javascript
*  Inner: John Doe. I am a javascript developer.
 */


//------------------------------ 


/**
 * call() method 
 */

// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     get: function() {
//         console.log('Outer: ' + this.firstName + " " + this.lastName);
        
//         var print = function(role, language) {
//             console.log(role, language);
//             console.log('Inner: ' + this.firstName + " " + this.lastName + ". I am a " + language + " " + role + ".");   
//         }.call(this, "developer", "javascript");

//     }
// }

// person.get();

/**
 * o/p 
 * Outer: John Doe
*  developer javascript
*  Inner: John Doe. I am a javascript developer.
*/


//---------------------------- 


/**
 * apply() method 
 */

 var person = {
    firstName: 'John',
    lastName: 'Doe',
    get: function() {
        console.log('Outer: ' + this.firstName + " " + this.lastName);
        
        var print = function(role, language) {
            console.log(role, language);
            console.log('Inner: ' + this.firstName + " " + this.lastName + ". I am a " + language + " " + role + ".");   
        }.apply(this, ["developer", "javascript"]);

    }
}

person.get();

/**
 * o/p 
 * Outer: John Doe
*  developer javascript
*  Inner: John Doe. I am a javascript developer.
*/