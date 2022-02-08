var operation = {
    a: 1,
    b: 2,
   
    add: function() {
        this.a + this.b;
        console.log("a = " + this.a + ", b = " + this.b);
        var print = function() {
            console.log("a = " + this.a + ", b = " + this.b);
        }
 
        print();
    }
 }
 
 operation.add();


// // TODO 1: Declare an object named employee which contains the keys with identifiers - firstName and lastName
// // TODO 2: Inside the employee object, define a method with identifier get which prints the values of keys firstName and lastName on the conosole
// // TODO 3: Call the get method of the employee object
// var employee = {
//     firstName: "Srishti",
//     lastName: "Gupta",
    
//     get: function() {
//         console.log(this.firstName + " " + this.lastName + " is an employee of our organization.")
//     }
// }

// employee.get()
