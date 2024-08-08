var App = /** @class */ (function () {
    function App(one, two) {
        this.a2 = one;
        this.b2 = two;
    }
    // function test()
    App.prototype.test = function () {
        return this.b2 ? this.a2 + this.b2 : this.a2;
        // console.warn("Test function working");
    };
    return App;
}());
var a1 = new App(10, 20);
// a1.test()
console.log(a1.test());
//tsc app.ts --watch
//duplicate identifier issue can be resolved with the help of export {}
//types in js 
var b = 10;
console.log(b);
//arrayin ts
// let data = [1,2];
// data.push("ts");
// console.log(data);
var arr = [12, 13];
var x = arr[0], y = arr[1]; //destructing array
console.log(x);
console.log(y);
//typed object
var users = {
    name: "pragya",
    age: 30,
    address: 'USA',
    getName: function () {
        return "nikhil";
    }
}; //default type
// users.name=200; //error type string
console.log(users);
console.log(users.getName());
//union types
var data1 = "anil";
data1 = 1;
console.log(data1);
//function
function Calc() {
    return 10 + 10;
}
console.log(Calc());
//tuples
var mytuple = [10, "Hello", "World", "typeScript"];
console.log("Items before push " + mytuple.length); // returns the tuple size 
mytuple.push(12); // append value to the tuple 
console.log("Items after push " + mytuple.length);
console.log("Items before pop " + mytuple.length);
console.log(mytuple.pop() + " popped from the tuple"); // removes and returns the last item
console.log("Items after pop " + mytuple.length);
//Numbers
// function employee1(id:number,name:string) { 
//     this.id = id 
//     this.name = name 
//  } 
//  var emp = new employee1(123,"Smith") 
//  employee1.prototype.email = "smith@abc.com" 
//  console.log("Employee 's Id: "+emp.id) 
//  console.log("Employee's name: "+emp.name) 
//  console.log("Employee's Email ID: "+emp.email)
