const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    }, 
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];

// for of
// forEach, map, filter
const todoComplete = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text
});
console.log(todoComplete);

todos.forEach(todo => console.log(todo.text))
