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

