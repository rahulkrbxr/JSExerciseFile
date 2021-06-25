// console.log('5' - 5)
// console.log('5' + 5)

// const giveType = typeof {}
// console.log(giveType)


// const adder = true + 5  //true = 1, false = 0
// console.log(adder)


//login details getting from DB
const loginDetails = []

const loginID = loginDetails[0]

// if(loginID !== undefined)

// js coercion assumes false
// if('') -> false but if(' ') -> true

if (loginID) {               
    console.log('Allow user to login')
} else {
    console.log('Auth failed')
}

// Values that interpret as false:
// false
// 0
// ''
// null
// undefined
// Apart from these everything is considered as true
// This means empty array, object are true. -_-