var generateID = function() {
    prefix = "udi-" 

    count = 0 

    return function() {
        count++; 
        return prefix + count;
    }
}

var print = generateID()

console.log(print())
console.log(print())
console.log(print())
