// function add(a=90, b=10){
//     console.log(arguments);
//     return a+b
// }

// console.log(add(2,5));

// function add(){
//     var max = 0;
//     for (let i = 0; i < arguments.length; i++)
//     {
//         const element = arguments[i]
//         element > max?max = element:' '
//     }
//     return max
// }

// console.log(add(2,5, 3, 7, 2, 9, 3));


// function add(...p){
//     p.push(100);
//     console.log(p);
// }

// console.log(add(2,5));

// function add(...p){
//     var max = 0;
//     for (let i = 0; i < p.length; i++)
//     {
//         const element = p[i]
//         element > max?max = element:' '
//     }
//     return max
// }
// console.log(add(2,5, 3, 4, 6, 2));

// anonymous functions: functions without a name

// var add=function (a,b){
//     return a+b
// }
// console.log(add(4,5));

// one paramenter accepted and then checks if it is even or odd

// var check=function (a){
//     return a%2==0?'even':'odd';
// }

// console.log(check(1));

// arrow function
// var add=(a,b) => a+b
// console.log(add(2,3));

// var check=(a) => a%2==0?'even':'odd'
// console.log(check(2));

// function expression and function declaration: former not hoisted latter is hoisted
// function declaration means legit writing  function


// call back function
// a function found inside another function... one must be passed to another as a parameter

// function fname(a){
//     return a
// }
// function lname(a){
//     return a
// }

// function fullname(a, b, call1, call2){
//     return call1(a) + ' ' + call2(b)
// }
// console.log(fullname('abe', 'kebe', fname, lname));

// call1 and call2 are callback functions
// we can substitute the whole function of fname and lname in the console

// function add(a,b){
//     return a+b
// }

// function sub(a,b){
//     return a-b
// }

// function mult(a,b){
//     return a*b
// }

// function div(a,b){
//     return a/b
// }
// //create a function cal which takes two numbers and a function as a parameter

// function calc(a, b, call1){
//     return call1(a, b)
// }



// console.log(calc(10, 5, add));
// console.log(calc(10, 5, sub));
// console.log(calc(10, 5, mult));
// console.log(calc(10, 5, div));


// we can use anonymous functions or aroow in place of calc1
// console.log(calc(10, 5, (a, b) => a+b));

// probs won't ever use them gn yekemet
// var add=new Function('a', 'b', 'return a+b')
// console.log(add(2,4));

// JS is fully object oriented
// object can have property and method

// var Person = {
//     fname: 'abe',
//     lname: 'kebe',
//     age: 90,
//     gender: 'm',
//     fullname(){
//         return this.fname + ' ' + this.lname
//     }
// }
// console.log(Person.fullname());
// console.log(Person.age);

// var f='fname'
// console.log(Person[f]);

// var Chair = {
//     color: 'beige',
//     size: 'medium',
//     height: 30,
//     width: 40,
//     area(){
//         return 0.5*this.height*this.width
//     },
//     newarea:() => {return Chair.height * Chair.width}
// }

// //can't use this with arrow function... something about global

// console.log(Chair.area());
// console.log(Chair.newarea());


// //object construcing...?
// var Car = new Object()
// Car.color = 'blue'
// Car.price = 9000
// Car.speed = function(){
//     return 'speedy'
// }
// console.log(Car.speed());


// //constructor function
// function Person(fname, lname){
//     this.fname=fname
//     this.lname=lname
// }

// var abebe=new Person('abe', 'kebe')
// console.log(abebe);
// var kebede=new Person('kebe', 'debe')
// console.log(kebede);


function Vehicle(distance, time){
    this.distance=distance
    this.time=time
    this.address='addis ababa'
    this.speed=function(){
        return this.distance/this.time
    }   
}

var bus=new Vehicle(50,30)
console.log(bus);


// HOw many methods we used
// function constructor
// class name
// object initialization
// 4th...?