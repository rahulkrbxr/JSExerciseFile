// JS Objects
// Objects are just a collection of variables lumped together in key-value pairs.

// Syntax of accessing objects
// objectName.key
// objectName["key"]  // using this you can also access invalid js identifier

var book1 = {
    title: "Freedom of India",
    noP:  768,
    "is-A": true
}
console.log(book1);
console.log(book1.title);
console.log(book1.noP);
console.log(book1["is-A"]);


var x = {
    name: 'Grace',
    age: 23,
    gender: 'female',
    interests: ['music', 'cricket', 'software', 'data', 'stem']
  };
console.log(x);


var book;
book = {
    title: "The Lord of the Rings",
    pages: 9250,
    isAvailable: true,
    author: {
        name: "J. R. R Tolkien",
        nationality: "British"
    }
}
console.log(book);
console.log(book.author.name);
console.log(book["author"]["name"]);
console.log(book["author"].name);
console.log(book.author["name"]);


// for looping through the object
// se use for in loop
// we cannot determine length of object members
// syntax
// for (key in objectName) {
//     // body of loop
// }
for (var k in book1) {
    console.log(k + " = " + book1[k]);
}

/* ---------------------------------------------------------------------------------------------------------------------- */
// Example question
var itemsToBuy = {
    milk: {
        quantity : 5,
        price: 20
    },
    bread: {
        quantity : 2,
        price: 15
    },
    potato: {
        quantity : 3,
        price: 10
    }
};
// solution one
var one = [];
var two = [];
for (var k in itemsToBuy) {
    one.push(k);
}
console.log(one);
for (var key in itemsToBuy) {
    two.push(itemsToBuy[key].price);
}
console.log(two);

// solutio two
var oneList = [], twoList = [];

for (var key in itemsToBuy) {
    oneList.push(key);
    for (var next in itemsToBuy[key]) {
        if (next === 'price') {
            twoList.push(itemsToBuy[key][next]);
        }
    }
}
console.log(oneList);
console.log(twoList);

/* ---------------------------------------------------------------------------------------------------------------------- */

// Updating/Modifying value in an object
// book.title = "Alice in Wonderland";
// book["title"] = "Alice in Wonderland";
// similarly you can add new property/member

console.log(book1);
// book1.title = "Alice in Wonderland";
book1["title"] = "Alice in wonderland";
console.log(book1);
book1.price = 500;
console.log(book1);