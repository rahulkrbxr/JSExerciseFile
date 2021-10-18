// var x = 10

// function foo() {
//     var x = 20
//     console.log(x); // 20
// }

// function bar() {
//     var x = 30
//     console.log(x)  // 30
// }

// foo()   // 20
// bar()   // 30   
// console.log(x)  // 10

// function test() {
//     var y = 10
//     console.log(y)  // 10
// }
// console.log(y)  // Error (Value not defined)


/* -------------------------------------------------------- */


// var x = 10

// function foo() {
//     console.log(x)
// }

// foo()   // 10


/* ------------------------------------------------------------ */


// function foo() {
//     var x = 10
//     bar()
// }

// function bar() {
//     console.log(x)
// }

// foo()   // Error, x is not defined inside bar


/**
 * NOTE
 * score chain works from inward to outword
 * means that variable is looked for inside the local scopre first
 * then if not found, it is looked for outside the local score
 * if not even in outside score, the variable is not defined, error.
 */


/* --------------------------------------------------------------- */


// Lexical Scoping in JS
function fun1() {
    var x = 10
    fun2()
    
    function fun2() {
        var y = 20
        console.log(z)
        fun3()

        function fun3() {
            var z = 30
            console.log(x, y, z)
        }
    }
}
// an example of parent scoping chain

fun1()

/**
 * NOTE
 * Lexical Function: Lexical scope refers to the fact that 
 * when one function, referred to as the parent function contains 
 * another function referred to as the child function, then the 
 * child function can access everything defined inside the parent function.
 * Also known as static scopre.
*/