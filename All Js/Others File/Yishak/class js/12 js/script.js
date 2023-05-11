var nums=[undefined,NaN,2,5,99,33,12,44];

//map()

//sort()

//find() and findindex()

for(let x=1;x<100;x++){
    console.log(Math.ceil(Math.random()*20))
}

let x1='www.Desktop/hh/template.html';

let start=x1.indexOf('te');
let end=x1.lastIndexOf('te')+2;

console.log(x1.substring(start,end))

let employee=[
    {name:'abebe',age:21,salary:2100},
    {name:'girma',age:52,salary:3000},
    {name:'alemu',age:15,salary:1500},
    {name:'almaz',age:23,salary:1800}
]

let empNameThatIncludesletter_m=employee.filter(x=>x.name.includes('m')).map(x=>x.name);

console.log(empNameThatIncludesletter_m);

console.log(window);

//npm install jsdom 

//node tree vs element

//node targeting

let p=document.body.firstChild.nextSibling.lastChild.previousSibling;

//element targeted

let p2=document.body.firstElementChild.lastElementChild;

p2.innerHTML="changed";

let title=document.body.firstChild.nextSibling;

title=title.parentNode.previousSibling.previousSibling.lastChild.previousSibling;

title.innerHTML="changed";

console.log(title);

let v=nums.find((x)=>x>0);

console.log(v);

let x=document.getElementById('hh');
x.classList.add('test');
console.log(x.classList.contains('test')); 
x.classList.remove('test');
console.log(x.classList.contains('test'));



