// alert('File is attached')

// console.log(document.title)

// document.title = 'I got changed!'

// console.log(document.getElementById('idone'))
// console.log(document.getElementsByClassName('classone'))


// const myElement = document.querySelectorAll('.classone')
// console.log(myElement[0])

// const myPElements = document.querySelector('p')
// myPElements.textContent = 'I am being changed using JS'

// const myPElements = document.querySelectorAll('p')

// myPElements.forEach((p) => p.textContent = 'I am changed using loop in js')
// p.remove()

//track input form

document.querySelector('#myform').addEventListener('change', (event) => {
    console.log(event.target.value)
})
