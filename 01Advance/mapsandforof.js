var john = {
    name: 'I am jonathan',
    age: 24,
    isActive: true,
}

var mary = {
    name: 'I am shally',
    age: 23,
    isActive: false,
}

var sam = {
    name: 'I am samael',
    age: 27,
    isActive: true,
}

let users = new Map()

// console.log(typeof users)

users.set('1', john)
users.set('2', mary)
users.set('3', sam)

// console.log(users)
// console.log(users.size)

// console.log(users.get('3'))

// console.log(users.keys())
// console.log(users.values())
// console.log(users.entries())


// forof
// for (const key of users.keys()) {
//     console.log(key)
// }


// for (const values of users.values()) {
//     console.log(values.name)
// }

// for (const [key, value] of users.entries()) {
//     console.log(key + ' = ' + value.name)
//     // console.log(key, value)
// }

// users.forEach((value, key) => console.log(key + ' = ' + value.name))

var arrofArr = [['one', 1], ['two', 2], ['three', 3]]

var newMap = new Map(arrofArr)

console.log(newMap)

for (const iterator of newMap) {
    console.log(iterator[0] + ' = ' + iterator[1]);
}

