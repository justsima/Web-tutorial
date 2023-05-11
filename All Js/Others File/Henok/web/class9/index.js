// js function
// function add(...param) {

//     let res = arguments[0];

//     for (let i = 0; i < arguments.length; i++) {
//         const element = arguments[i];
//         if (element > res) {
//             res = arguments[i]
//         }

//     }
//     return res;
// }

// console.log(add(3, 7, 5, 6))

// param 

// function add(...param) {

//     param.push(100)
//     param.pop()
//     console.log(param);
// }

// console.log(add(3, 7, 5, 6))



// function compare(...param) {

//     let max = param[0]
//     for (let i = 0; i < param.length; i++) {
//         const element = param[i];
//         element > max ? max = element : ""
//     }
//     return max;
// }

// console.log(compare(3, 7, 5, 6))


// anonymus fun 

// var add = function(a, b) {
//     return a + b;
// }

// console.log(add(3, 4))

//check if even of odd

// var evenOdd = function(a) {
//     return a % 2 == 0 ? "even" : "odd"
// }

// console.log(evenOdd(5))


//arrow function

// var add = (a, b) => a % 2 == 0 ? "even" : "odd"
// console.log(add(2))



// var add = (a, b) => {

// }



// const addAll = (arr) => arr.reduce((a, b) => a + b);

// console.log(addAll([1, 2, 3, 4, 5]))


// function add(a, b) {
//     return a + b
// }

// function sub(a, b) {
//     return a - b;
// }

// function mul(a, b) {
//     return a * b
// }

// function div(a, b) {
//     return a / b;
// }

// function calc(a, b, fun) {
//     return fun(a, b)
// }

// console.log(calc(4, 5, (a, b) => { a + b }));



// object 

// var Person = {
//     fname: 'abebe',
//     lname: 'girma',
//     age: 90,
//     gender: "M",
//     fullname() {
//         return "Full Name: " + this.fname + " " + this.lname;
//     }
// }
// console.log(Person.fullname())


// var Chair = {
//     color: "brown",
//     width: 30,
//     length: 70,
//     area() {
//         return "area: " + this.width * this.length
//     }
// }

// Chair.material = "Wood"
// var c = "material"

// console.log(Chair[c])

// var Car = new Object();
// Car.color = "Blue"
// Car.price = 9000

// constructor function 

function Person(fname, lname) {
    this.fname = fname
    this.lname = lname
}

Person.prototype.color = "blue"

var abebe = new Person("abebe", "kebede")

function vehicle(distance, time) {
    this.distance = distance
    this.time = 45
    this.address = "addis ababa"
    this.speed = function() { return distance / time }
}

var car = new vehicle(23, 41)
var bycicle = new vehicle(75, 432)

console.log(car.speed)