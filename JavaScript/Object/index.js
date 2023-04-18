var xObj={
    fname:'Abebe',
    age:40
}
var yObj=xObj
yObj.color='blue'

//strict equeality and and equality
console.log(xObj==yObj);
// the diffrence between strict equality and equality is SE checks the data type


//object distraction
var {fname,age}=xObj
console.log(xObj===yObj);
console.log(xObj);
console.log(yObj);


//merging an object using an Object.assign()

var xObj={
    fname:'Abebe',
    age:40
}
var y={lname:'Girma'}
var newObj=Object.assign(xObj,y)

console.log(newObj)
//to delete an object

delete xObj.age
//using class
class Person{
    fname='Abebe'
    lname='Girma'
    age=30
    fullName(){
        return this.fname+' '+this.lname
    }
}
var Abebe=new Person()
console.log(Abebe);
console.log(Abebe.fullName());

class Animal{

    constructor(name,gender)
    {
        this.name=name
        this.gender=gender
    }
    getName(){
        return this.name;
    }
}
class Domestic extends Animal{
constructor(name,gender,fur,tail)
{
    super(name,gender)
    this.fur=fur
    this.tail=tail
}
}

class Human extends Animal{
    constructor(name,gender,lname,pnum,em)
    {
        super(name,gender)
        this.lname
        this.pnum
        this.em
    }
    speak(){
        return 'Hello'
    }
}
var Abebe= new Animal('dog','m')
console.log(Abebe.getName());
var Abebe= new Domestic('dog','m','long','yes')
console.log(Abebe.getName()); 
console.log(Abebe)

var nums=[1,2,3,4,7,8,9,0]
function tt(a)
{
    return a<100
}
// var test=nums.ever(a=>a<5) smae verison 
var test=nums.every(tt)
console.log(test)  
var newArray=nums.filter(item=>item<5)
console.log(newArray)

var newArrays=nums.filter(item=>item%2==0)
console.log(newArrays)

var newArray=0
nums.forEach(function(a){

    if(a<10)
    {
        newArray=newArray+a
    }
})

console.log(newArray)
var newArrays=nums.filter(item=>item%2==0).forEach(a=>newArrays+=a)
console.log(newArray)

var nums=[2,1,4,5,6,7,2,8,10,35,77,2]
var newArray=0
console.log(nums.indexOf(2,2));
var newArray=nums.join()
var newArray=nums.map(a=>a<9)
console.log(newArray)
nums.map(a=>a<9?newArray.push(a):'a')
nums.push(90)
nums.unshift
console.log(newArray)
var Persons=[
    {name:'abebe',age:30},
    {name:'kebede',age:40},
    {name:'alemu',age:50},
]

console.log(Persons)
var newArray=Persons.map(a=>a.age)
console.log(nums.map((a,b)=>b-a)) 
const string='rev is good'
console.log(string)
var strings='simon'
var greet= `hello, ${strings}`
console.log(greet)
const output = `I like the song.
I gave it a score of 90%.`;
console.log(output);
var nums=[1,2,3,4,5,6,7,8,9,0]

//sorting even numbers from an array 
//study Array methods
console.log(nums.sort((a,b)=>(b%2==0)-(a%2==0)))
console.log(nums.findIndex(a=>a%2==0))

