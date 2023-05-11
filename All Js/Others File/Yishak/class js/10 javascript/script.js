function add(a=9, b=88) {
    console.log(arguments); 
    return a + b; 

}

//  arguments parameter

function max() {
    let max = arguments[0];
    for(let i = 0; i < arguments.length; i++) {
        if(max < arguments[i]) {
            max = arguments[i];
        }
    }
    return max;
}

// rest parameter it's an array so have array methods. So is it better to use rest parameter?

function max(...params) {
    let max = params[0];
    for(let i = 0; i < params.length; i++) {
        if(max < params[i]) {
            max = params[i];
        }
    }
    return max;
}

//anonymous function

var add=function(){
    return a+b;
}

var fun=function(x){
    return (x%2==0?'Even':'Odd');
}

//arrow function

var evenorodd=(a)=>a%2==0?'Even':'Odd';

//FUNCTION EXPRESSION CAN BE USED BEFORE DECLARATION OR CAN BE HOISTED

var add=function(a,b){
    return a+b;
}

//FUNCTION DECLARATION CANNOT BE USED BEFORE DECLARATION OR CANNOT BE HOISTED

function add(a,b){
    return a+b;
}

//callback function is a function which is passed as a parameter to another function

function fname(a){
    return a;
}

function lname(b){
    return b;
}

function fullname(a,b,call1,call2){
    return call1(a)+" "+call2(b);
}

//example 

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function calculator(a,b,call){
    //here call is a callback function
    return call(a,b);
}

// document.write("Op: 10, 5"+ "<br> <br>");
// document.write("Add: "+calculator(10,5,add) + "<br>");
// document.write("Sub: "+calculator(10,5,sub) + "<br>");
// document.write("Mul: "+ calculator(10,5,mul) + "<br>");
// document.write("Div: "+calculator(10,5,div) + "<br>");

// document.write("<br> <br>");

// document.write("Op: 10, 5"+ "<br> <br>");
// document.write("Add: "+calculator(10,5,(a,b)=>a+b) + "<br>");
// document.write("Sub: "+calculator(10,5,(a,b)=>a-b) + "<br>");
// document.write("Mul: "+ calculator(10,5,(a,b)=>a*b) + "<br>");
// document.write("Div: "+calculator(10,5,(a,b)=>a/b) + "<br>");

//function constructor

var add=new Function("a","b","return a+b");

//Object 
//Object is a collection of properties and methods

let Person={
    fname:"John",
    lname:"Doe",
    age:30,
    city:"New York",
    display:function(){
        return this.fname+" "+this.age+" "+this.city;
    },
    fullname(){
        return this.fname+" "+this.lname;
    }    
}

let Chair={
    length:4,
    width:2,
    height:3,
    area(){
        return this.length*this.width;
    },
    legs:4,
    color:"black",
    material:"wood",
}

Chair.length=50;
Chair.width=20;

//when using arrow function this keyword will not work as it is not binded to the object it is binded to the window object so use the object name instead of this keyword

//Object constructor

let Car=new Object();
Car.name="BMW";
Car.color="Black";
Car.price=1000000;
Car.display=function(){
    return this.name+" "+this.color+" "+this.price;
}

//constructor function

function Person(fname,lname,age,city){
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.city=city;
    this.display=function(){
        return this.fname+" "+this.lname+" "+this.age+" "+this.city;
    }
}

Person.prototype.fullname=function(){
    return this.fname+" "+this.lname;
}


let abebe=new Person("Abebe","Girma",20,"Addis Ababa");
let abel=new Person("Abel","Girma",20,"Addis Ababa");

function vehicle(distance,time,address="Addis Abeba"){
    this.distance=distance;
    this.time=time;
    this.address=address;
    this.speed=function(){
        return this.distance/this.time;
    }
}

let car=new vehicle(100,2,50);
let bycle=new vehicle(200,4,50);

document.write("Car speed: "+car.address+"<br>");
