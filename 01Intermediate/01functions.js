let sayHello = function(name) {
    console.log("Greeting message for user")
    console.log(`Hello ${name}`)
}

sayHello('John')


let fullNameMaker = function(fname, lname) {
    console.log('Welcome to LCO')
    console.log(`Hello ${fname} ${lname}`)
}

fullNameMaker('John', 'Doe')


let myAdder = function(num1, num2) {
    let added = num1 + num2
    return added
}

let result = myAdder(2, 3)
console.log(result)
console.log(myAdder(3, 5))


let myProduct = function(num1, num2) {
    return num1 * num2
}

console.log(myProduct(3, 9))


let guestUser = function(name = "unName", couseCount = 0) {
    return "Hello " + name + " your course count is: " + couseCount
}

//good practise to assign unassigned variable to null

console.log(guestUser())


