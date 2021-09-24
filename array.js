var cart = ['shirt', 'car', 'bag', 'camera'];
console.log(cart);
// console.log(cart[2]);

// inserting using index
cart[4] = "sunglasses";
console.log(cart);

// insert at last
cart.push("belt");
console.log(cart);

// insert at first
cart.unshift("watch");
console.log(cart);

// remove last element
cart.pop();
console.log(cart);

// remove first element
cart.shift();
console.log(cart);

// different datatypes can be inserted into javascript
var developer = ["Rahul", "Kumar", "Patna", 21, true];
console.log(developer);

// returns part from start to end-1
var temp = developer.slice(0, 3);
console.log(temp);

// edit the existing array
temp.splice(2, 1, "Pune");


for (var i=0; i<temp.length; i++) {
    console.log(temp[i]);
}