// console.log(this)


// function test() {
//     console.log(this);
// } 
// test();


/**The ‘this’ keyword points to the global window object in the 
 * context of browsers when written inside a regular function call
 * 
 */
// var person = {
//     name: "Rahul", 
//     get: function() {
//         console.log(this)
//     }
// }
// console.log(person.get())


/**
 * However, in the case of a method, which is defined as a function 
 * inside an object, the ‘this’ keyword points to the object to which 
 * the method is bond.
 * 
 */
// var person = {
//     name: "Rahul", 
//     get: function() {
//         return this.name
//     }
// }
// console.log(person.get())


var operation = {
    a: 1,
    b: 2,

    add: function() {
        this.a + this.b;
        console.log("a = " + this.a + ", b = " + this.b);
        var print = function() {
            console.log("a = " + this.a + ", b = " + this.b);
        }
        print();
    }
}

operation.add();