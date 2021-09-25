// function 
// syntax
/* 
functon functionName(param1, parm2, ...) {
    // body of function
    // return statement, if required
}
*/
// function return undefined if nothing is returned or printed

function applyDiscount(amount, discount) {
    amount -= discount;
    return amount;
}

console.log(applyDiscount(1000, 200));

var x = 3;
function f(x) {
    // return x*x;
    x = x*x;
}
// console.log(typeof(f(2)));    // number
console.log(f(2));    // undefined

// anonymous function
var x = function() {
    return 4*4;
}
console.log(typeof(x));     // function
console.log(x());       // 16


function power(base, exponent) {
    var ans=1;
    for(var i=0; i<exponent; i++) {
        ans *= base;
    }
    return ans;
}
console.log(power(2, 3));
