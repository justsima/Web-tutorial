var nums = [1, 3, 2, 5, 99, 33, 12, 44];

var evenOdd = nums.filter(a => a % 2 == 0).sort((a, b) => { a - b }).concat(nums.filter(a => a % 2 != 0).sort((a, b) => { a - b }))

//number
let x = 300
console.log(x.toString())

y = 3.1415
console.log(y.toFixed(2));

console.log(Math.PI)
console.log(Math.sqrt(16))
console.log(Math.round(5.5))
console.log(Math.ceil(5.5))

console.log("Random:" + Math.round(Math.random() * 20))

// console.log(evenOdd)

var str = "www.Desktop/hh/template.html"


console.log(str.substring(str.search("temp"), str.search(".html")))
console.log(str.substring(str.lastIndexOf('/') + 1, str.lastIndexOf('.')))

var employee = [
    { name: "abebe", age: 21, salary: 2100 },
    { name: "girma", age: 32, salary: 3000 },
    { name: "alemu", age: 15, salary: 1500 },
    { name: "almaz", age: 23, salary: 1800 }
]

console.table(employee)

//create a new arra containing names of employees with name having 'm'
var mEmp = employee.filter(a => a.name.includes('m')).map(a => a.name)

console.log(mEmp)

var p = document.body.firstChild.nextSibling.lastChild.previousSibling

var p2 = document.body.firstElementChild.lastElementChild

var title = document.body.firstChild.nextSibling.parentElement.previousSibling.lastChilds

console.log(title)

title.innerHTML = "changed"
p.innerHTML = "changed"

p2.innerHTML = "change"