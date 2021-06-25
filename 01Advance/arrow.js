// const sayHello = function(name) {
//     return "Hello there, " + name + " !";
// }

// console.log(sayHello("Danny"))

// const sayHello = (name) => {
//     // return "Hello there, " + name + " !";
//     return `Hello there, ${name} !`
// }

// const sayHello = (name) => `Hello there, ${name} !` // to be used when inside block contain 1 statement


const sayHello = (name) => (`Hello there, ${name} !`)   // can also add block to make it clearer
console.log(sayHello("Danny"))


const newTodos = [{
    title: 'Buy a bread',
    isDone: true,       
}, {
    title: 'Go to Gym', 
    isDone: true,
}, {
    title: 'record youtube video',
    isDone: false,
}]

const thingsDone = newTodos.filter((todo) => todo.isDone === true )

console.log(thingsDone)


// // Assignment 1
// const myTodos = [{
//     title: 'Go to gym',
//     isDone: true,
// }, {
//     title: 'Buy milk & grocery',
//     isDone: true,
// }, {
//     title: 'take a shower', 
//     isDone: false,
// }, {
//     title: 'wash your car',
//     isDone: false,
// }, {
//     title: 'buy a movie ticket', 
//     isDone: true,
// }, {
//     title: 'eat breakfast',
//     isDone: false
// },]

// const thingsNotDone = myTodos.filter((todo) => todo.isDone === false)

// console.log(thingsNotDone)

// thingsNotDone.forEach( (todo, index) => console.log(`${todo.title}`))
