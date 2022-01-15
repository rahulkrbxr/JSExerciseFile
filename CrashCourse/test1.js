// Constructor prototype
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
};

Person.prototype.getBirthday = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Instantiate object
const person1 = new Person('Rahul', 'Kumar', '2000-06-02');
const person2 = new Person('Selina', 'Gomez', '1995-07-13');

// console.log(`${person1.getName()}: ${person1.getBirthday()}`);
// console.log(`${person2.getFullName()}: ${person2.getBirthday()}`);

console.log(person1);
console.log(person2.getFullName() + " " + person2.getBirthday());