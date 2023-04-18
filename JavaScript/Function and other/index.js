// console.log('Hello from console!!!');
// document.write('Hello Universe  ');
// let fisrtName='Simon'
// var lastName='Asaye'
// var num=90
//  console.log(fisrtName,lastName,num)
// var nume=11
//  if(num<=10 && num/2==0 )
//  {
//     console.log('number is between 1 to 10 and even')
//  } else {
//     console.log('number is between 1 to 20 and is odd')
//  }

//  var num =40

//  switch(num) 
//  {
//     case num<100:
//         Text='Less Than 100'
//         break
//     case num >100:
//         Text='Less Than 100'
//         break
//  }
//  var num= 90

// //  for(let i =0; i <10; i++){
// //     document.write('<h1> the number is ${i}</h1>')
// //     if(i==5)
// //     break
// //  }
//  var num2=72
//  var z=num2>10 && num2<40?'less than zero':'great'
//  var num3=1
// do{
//     if(num3%2==0)
//     document.write(num3,'   ')
//     if(num3>50)
//     break
// }while(num3++)

//lesson for march 31 2023
//1, 
var max=0
function add(a,b)
{
for(let i=0;i<arguments.length;i++){
    const element=arguments[i];
    element>max?max=element:''
}
return max
}

console.log(add(1,2,3,4)); 
//2, Anonymous function 
var add=function(a,b){
    return a+b
}
console.log(add(1,2)); 

var check=function(a){
    return a%2==0?'Even':'Odd'
}
console.log(check(2));

//Arrow or Lambada Fun
var add=(a,b)=>a+b
console.log(add(1,2));

var check=(a)=>a%2==0?'Even':'Odd'
console.log(check(2)); 
//Function declaration and Expression 
//Call Back Function 

function fname(a){
    return a
}
function lname(a){
    return a
}
function fullname(a,b,call1,call2){
    return call1(a)+' '+call2(b)
}
console.log('Full Name is '+fullname('Simon','Asaye',fname,lname));

function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mul(a,b){
    return a*b
}
function div(a,b){
    return a/b
}
function calculator(a,b,call){
    return call(a,b)
}
console.log('Addition is '+calculator(20,20,(a,b)=>a+b));
//fucntion Constructor 
var add=new Function('a','b','return a+b')
console.log(add(1,2));

//Object Initialization

var person={
    fname:'Simon',
    lname:'Asaye',
    age:21,
    gender:'Male',
    fullname:()=>{
        return person.fname+' '+person.lname
    }
}
person.color ='Coco'
console.log(person.color);
console.log(person.fullname());

var f='fname'
console.log(person[f]);

var Chair={
    color:'black',
    size:'large',
    hieght:100,
    width:100,
    Area(){
        return this.hieght*this.width
    }

}
console.log(Chair.Area());

//Object constructor 
var car=new Object()
car.color='black'
car.size='large'
car.speed=function(){
    return 'go'
}
console.log(car)

function person(fname,lname){
    this.fname=fname
    this.lname=lname
}
// var abebe= new person('Abebe','Girma')
// console.log(abebe.fullname());

var vehicle={
    distance:100,
    time:4,
    address:'Addis Ababa',
    speed(){
        return this.distance/this.time
    }
}
console.log(vehicle.speed());  