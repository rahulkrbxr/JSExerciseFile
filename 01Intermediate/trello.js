// const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

// for(let index = 0; index < days.length; index++) {
//     // const element = days[index]
//     console.log(days[index])
// }

// for(let index = days.length-1; index >= 0; index--) {
//     console.log(days[index])
// }


const myTodos = []

myTodos.push('Buy milk')
myTodos.push('Take a nap')
myTodos.push('Go to gym')

myTodos.forEach(function(todos, index) {
    console.log(`Your task no. ${index+1} is ${todos}`)
})

const newTodos = []
newTodos.unshift('Go to dance club')
newTodos.unshift('Go take a shower')
newTodos.unshift('Eat lunch')

for(let index = 0; index < newTodos.length; index++) {
    console.log(`Your task no. ${index+1} is ${newTodos[index]}`)
}