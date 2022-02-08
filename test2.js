// let animal = {
//     breed: true
// }

// let cat = {
//     legs: 2
// }

// cat.__proto__ = animal

// console.log(cat.legs)

// console.log(cat.breed)

var itemsInCart = 0

function addItem() {
    itemsInCart++
    console.log("Item added to cart!")
    console.log("Item(s) in cart " + itemsInCart);
}

function removeItem() {
    itemsInCart--
    console.log("Item removed from cart!")
    console.log("Item(s) in cart " + itemsInCart);
}

addItem()
addItem()
removeItem()