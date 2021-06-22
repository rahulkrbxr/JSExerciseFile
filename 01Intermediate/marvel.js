const numbers = ['One', 'Two', 'Three', 'Four', 'Fiver', 'Six']

console.log(numbers)

// numbers[2] = 'SOMETHING'
// console.log(numbers)

//Start
// console.log(numbers.shift())
// console.log(numbers)

// numbers.unshift('SOMETHING')
// console.log(numbers)


//End
// console.log(numbers.pop())
// console.log(numbers)

// numbers.push('SOMETHING')
// console.log(numbers)


//Middle
numbers.splice(2, 2, 'SOMETHING')
console.log(numbers)