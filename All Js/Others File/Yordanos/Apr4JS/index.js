//primitive vs reference types

//reference includes array, objects wezete
//in primitive, value is copied but in reference, reference of the object is copied
// var xobj={
//     fname: 'kebe',
//     age: 40,
//     color: 'red'
// }

// var yobj = xobj;
// console.log(yobj);
// console.log(xobj);

// console.log(xobj===yobj);

// === strict equality check the type
// console.log(5==='5'); is false but console.log(5=='5'); is true

// variable is stored in the stack and points to the value stored in the heap memory... in reference



// var fname = xobj.fname;
// var age = xobj.age;

// console.log(fname, age);
// this can simply be done

// var {color, age} = xobj;
// console.log(color, age);


//merging objects
// var y = {lname: 'girma'}
// var newobj = Object.assign(xobj,y);

// console.log(xobj);


// //deleting objects
// delete xobj.fname;
// console.log(xobj);


// //constructor function
// class Person{
//     fname='abe'
//     lname='kebe'
//     age=90
//     fullname(){
//         return this.fname + ' ' + this.lname
//     }
// }

// var abebe=new Person()

// console.log(abebe.fullname());

// class Animal{
//     constructor(name, gender){
//         this.name = name
//         this.gender=gender
//     }
//     getName(){
//         return this.name
//     }
// }

// var a = new Animal("dog", 'm');
// console.log(a);

// //super keyword to call the parent class of the constructur

// class Domestic extends Animal{
//     constructor(name, gender, fur, tail){
//         super(name, gender)
//         this.fur=fur
//         this.tail=tail
//     }
//     getName(){
//         return super.getName()
//     }
//     //can use both return this.name or return super.getName()
// }
// var b = new Domestic("cat", 'f', "thin", "short")
// console.log(b.getName())

// class Human extends Animal{
//     constructor(name, gender, lname, phone, email){
//         super(name, gender)
//         this.lname = lname
//         this.phone = phone
//         this.email = email
//     }
//     speak(){
//         return this.speak
//     }
// }

// var b = new Domestic("cat", 'm', "thick" ,"long")
// console.log(b.getName());

// //ARRAY

// var nums=[1,2,3,4,5,6,7]
// console.log(nums[3]);

// var num = new Array(1,2,3,4,5,6,7)
// console.log(num[3]);

//Array methods
//concat, some and every

//concat.. concats 2 arrays
//  var x = [1,2,3,4,5,6,7]
// // var y = ['abe', 'kebe']

// // console.log(x.concat(y));

// //every checks if it satisifies what is passed to it
// function tt(a){
//     return a < 8
// }

// var test = x.every(tt);
// console.log(test);

// // //using anonymous function
// // function tt(a){
// //         return a < 5
// //     }
    
//     var test = x.every(function (a){
//         return a < 5
//     });
//     console.log(test);


// we can also use arrow function
// var test = x.every(a => a < 5);
// console.log(test);

//some is like an or
// var test = x.every(a => a < 5);
//         console.log(test);

// //filter array... creates a new array with items that satisfy the condition provided and it returns the new array
// var z = x.filter(item=>item%2)
// console.log(z);
// item%2 alone means odd and adding a negation makes it even... !(x%2)

//foreach...checks each method passed to it
// var z = 0
// x.forEach(function(a){
//     if(a<10){
//     z = z + a
// }
// })

// x.forEach(function(a){
//     z = z + a
// })
// console.log(z);

// //sum of all even numbers using arrow function
// var w = 0
// x.filter(a=>!(a%2)).forEach(a=>w+=a)
// console.log(w);

// var e = [2,3,4,5,2,3,4,5,2]
// console.log(e.indexOf(2)); //starting from first
// console.log(e.lastIndexOf(2)); //starting from last
// console.log(e.indexOf(2, 1)); //starting from wherever specified in the second parameter


//join... array value to string
// var n = [1,2,3,4]
// var m = n.join()
// console.log(m);

//map... returns true or false, takes an anonymous function or call back function and checks all values
// var o = []
// x.map(a=>a<3?o.push(a):'')
// console.log(o);


// // push new at the end and unshift new element at the beginning
// //pop remove value from the end and shift remove value from the beginning
// var n = [1,2,3,4,5,6]
// n.push(10)
// n.unshift(11)

// n.pop()
// n.shift()
// console.log(n);

// //slice... starting from first input index till the second input index
// var s = n.slice(2,4)
// console.log(s); //returns values from the second index to the fourth one
// console.log(n); //returns unaffected original array
// //splice... removes elements from the first input index, second input index yahel and then puts it 
//var sp = x.splice(2,4) //can also take a 3 rd parameter to insert value at the first removed index
//console.log(sp); //returns the 4 removed values from index 2... it included
 // console.log(x); //returns the original array with the values removed

// // reduce to ...reduce ..check syntax
// // sort to sort default being ascending order ... n.sort(a,b)=>a-b ascending and (a,b)=>b-a for descending order

var Person=[
    {name: 'abe', age: 30},
    {name: 'kebe', age: 90},
    {name: 'debe', age: 45}
]

//use map, filter, or for each to get the average age from the people
var avg = 0
Person.filter(a => a.age).forEach(a => avg += a.age)
avg=avg/3
console.log(avg);
// //try this out tmrw and further reading pls

// console.log(Person[2]);
