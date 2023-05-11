//object distraction
var xobj={fname:"sachin",age:30};

var {fname,age}=xobj; 

console.log(fname,age); 

var y={lname:'girma'}

//merging two objects using object assign

var newObj=Object.assign(xobj,y);

console.log(newObj); 

delete xobj.fname;

console.log(xobj); 

class person{
    fname="sachin";
    lname="girma";
    age=30;
    fullname(){
        return this.fname+" "+this.lname;
    }
}

var p=new person();

console.log(p); 

class animal{
    constructor(name,gender){
        this.name=name;
        this.age=gender;
    }
    getName(){
        return this.name;
    }
}

var buchi=new animal();

console.log(animal);

class Domestic extends animal{
    constructor(name,gender,fur,tail){
        super(name,gender)
        this.fur=fur;
        this.tail=tail;
    }
}
console.log(Domestic)
//super calls the parent class constructor and methods

class Person{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }
    fullname(){
        return this.fname+" "+this.lname;
    }
}

//array

var arr=[1,2,3,4,5,6,7,8,9,10,2];

var arr2= new Array(1,2,3,4,5,6,7,8,9,10);
console.log(arr);
console.log(arr2);

//array methods

//concat

var x=['Abebe','girma']

console.log(arr2.concat('sachin','girma'));

var test=arr.every(x=>x>0)

var test2=arr.some(x=>x>5)

var test3=arr.filter(x=>x>5)

var test4=arr.filter(x=>x%2==0)

var sum=0

//foreach method is used to iterate through an array and perform a function on each element of the array    

arr.forEach(x=>sum+=x)

console.log('array: '+arr);
console.log('Sum: '+sum);


//use filter and foreach to find the sum of even numbers in an array

let evensum=0;
arr.filter(x=>x%2==0).forEach(x=>evensum+=x)
console.log('Even Sum: '+evensum);

// indexof and lastindexof

console.log("indexof: "+arr.indexOf(2,3)+" lastindexof: "+arr.lastIndexOf(2))

// join method it joins the elements of an array into a string

console.log(arr.join());

var newarr=arr.map(x=>x*2);

console.log(newarr);

// push(),pop(),shift(),unshift()

arr.push(11);
console.log(arr);
arr.shift();
console.log(arr);

//slice

let newarr2=arr.slice(2,5);
console.log(newarr2);

//splice 
console.log(arr);
let newarr3=arr.splice(2,5,400);
console.log(newarr3);
console.log(arr);

console.log(arr.sort((a,b)=>b-a));


