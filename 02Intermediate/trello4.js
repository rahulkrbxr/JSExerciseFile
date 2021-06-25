// const myTodos = ['Buy Bread', 'Go to Gym', 'Record youtube videos']

// console.log(myTodos.indexOf('Buy Bread'))

const newTodods = [{
    title: 'Buy Bread',
    isDone: false,
}, {
    title: 'Go to Gym',
    isDone: false,
}, {
    title: 'Record youtube videos',
    isDone: false,
}]

// const index = newTodods.findIndex(function(todo, index){
    
//     // console.log(todo)

//     return todo.title === 'Go to Gym'

// })

// console.log(index)

// // Method 1
// const findTodo = function(myTodos, title) {
//     const index = myTodos.findIndex(function(todo, index) {     // in this case we realy don't need index parm, it's optional
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return myTodos[index]
// }

// let printMe = findTodo(newTodods, 'go To gym')
// console.log(printMe)


// Method 2
const findTodo = function(myTodos, title) {
    const titledReturned = myTodos.find(function(todo, index) {     // in this case we realy don't need index parm, it's optional
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titledReturned
}

let printMe = findTodo(newTodods, 'go To gym')
console.log(printMe)
