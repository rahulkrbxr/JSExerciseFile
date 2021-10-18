// // pass by value
// var x = 10
// var y = x
// x = 15
// console.log(x, y);

// // pass by reference
// var a = {key1 : 1, key2: 2}
// var b = a
// a.key1 = 3
// console.log(a, b)

/*----------------------------------------------*/

// pass by value
// function foo(x) {
//     console.log(x)   // Rahul
//     x = "Rahul1"
//     console.log(x)   // Rahul1
// }

// var name = "Rahul"
// foo(name)
// console.log(name)    // Rahul


// pass by reference
// function bar(x) {
//     console.log(x.name)     // Rahul
//     x.name = "Rahul1"
//     console.log(x.name)     // Rahul1
// }

// person = {
//     name: "Rahul"
// }
// bar(person)
// console.log(person.name)    // Rahul1


/**
 * NOTE:
 * All the primitive type of value are passed by value like number, string
 * All the non-primitive (custom) data type are passed by reference eg array, object
 */


// var a = {key1: 1, key2: 2}
// var b = a
// a = {newKey1: 10, newKey2: 20}
// console.log(a, b)


function swap(obj) {
    obj.a = obj.a + obj.b
    obj.b = obj.a - obj.b
    obj.a = obj.a - obj.b
}

var obj = {a : 1, b: 2}
console.log(obj.a, obj.b)
swap(obj)
console.log(obj.a, obj.b)