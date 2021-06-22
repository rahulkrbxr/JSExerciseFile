const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']


let sayHello = function() {
    console.log("hello")
}

// days.forEach(sayHello)

// days.forEach(function(day) {
//     console.log(day)
// })


days.forEach(function(tiger, index) {
    console.log(`starts with ${index+1} --${tiger}`)
})


// // Assignment 1
// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', "Dec"]

// months.forEach(function(month, index) {
//     console.log(`Month ${index+1} = ${month}`)
// })