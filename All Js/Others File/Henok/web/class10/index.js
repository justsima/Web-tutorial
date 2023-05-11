// Primitive and Reference type
var x = 90;

// y = x

var xObj = {
    fname: "abebe",
    age: 40
}

var yObj = xObj;

// yObj.color = "blue"

// console.log(xObj == yObj)

var fname = xObj.fname
var age = xObj.age

var { fname, age } = xObj

//Merge obj

var y = { lname: "girma" }

var newObj = Object.assign(xObj, y)

// console.log(newObj)


//Delete obj

delete xObj.age


class Person {
    fname = "girma"
    lname = "abebe"
    age = 90
    fullName() {
        return this.fname + this.lname
    }
}

var girma = new Person();

// console.log(girma)


class Animal {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
    }

    getName() {
        return this.name
    }
}

var dog = new Animal("dog", "M")
    // console.log(dog)

class Domestic extends Animal {
    constructor(name, gender, fur, tail) {
        super(name, gender)
        this.fur = fur
        this.tail = tail
    }
}

var dog2 = new Domestic("dog2", "M", "thick", "long")

class Huamn extends Animal {
    constructor(name, gender, lname, phone, email) {
        super(name, gender)
        this.lname = lname
        this.phone = phone
        this.email = email
    }

    speak() {
        return "hello"
    }
}

var H1 = new Huamn("Henok", "M", "Bekele", "12345678", "email@gmail.com")

// console.log(H1, H1.speak(), H1.getName())

//Array

var num1 = [2, 1, 2, 3, 4, 5, 6, 7, 8, 11, 2]


var num2 = [8, 9, 10]

var test = num1.some(a => a < 10)

var FilterArr = num1.filter(i => i % 2 == 0)
var sum = 0;

var forEachArr = num1.filter(a => a % 2 == 0).forEach(a => { sum = sum + a })
    // var sum2 = num1.reduce((a, b) => a + b)
    // console.log(sum2)
var newArr = []
num1.map(a => a < 9 && newArr.push(a))

// num1.push(100)
// num1.unshift(100)
// num1.pop()
// num1.shift()

var slice = num1.slice(2, 5)
    // var splice = num1.splice(5, 4, 900)

var reduce = num1.reduce((a, b) => { a + b })
var sort = num1.sort()

console.log(sort)
console.log(reduce)


//Array Object

var Person2 = [
    { name: "abebe", age: 30 },
    { name: "kebede", age: 90 },
    { name: "alemu", age: 55 },
]

var average = 0;
Person2.map(a => average = average + a.age)

console.log((average / Person2.length))