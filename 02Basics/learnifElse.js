
if (false) {
    console.log('I am inside if Block')
    console.log('I am still inside if Block')
} else if(false) {
    console.log('I am inside IF IN CAPS BLOCK')
} else {
    console.log('NOTICE THIS PART')
}

var whoIsHere = 'user'

if (whoIsHere === 'user') {
    console.log('Greeting message for user')
    console.log('Allow access to view all courses')
} else if (whoIsHere === 'teacher') {
    console.log('Greeting message for TEACHER')
    console.log('Allow access to view all courses')
} else {
    console.log('MESSAGE: please verify you email')
    console.log('Send user an email for verification')
}


var grade = 10

if (grade === 10) {
    console.log('Amazing')
} else if (grade === 5) {
    console.log('Good')
} else if (grade === 3) {
    console.log('poor')
} else if (grade === 0) {
    console.log('fail')
}
