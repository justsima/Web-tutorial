for(let x=1;x<20;x++){
    console.log(Math.ceil(Math.random()*20))
}
let text='this is a sample, text for ,learning strings';


console.log(text.length);//length of the string
console.log(text.toUpperCase());//to lowercase.

let y=text.split(',');//split to an array
console.log(y);
console.log(text.replace('text','lang'));

console.log(text.charAt(30));

console.log(text.search('for'));
console.log(text.includes('for'))

console.log(text.indexOf('t'));
console.log(text.indexOf('t',3));
console.log(text.lastIndexOf('t'));


console.log(text.slice(0,30));


console.log(text.substring(5,8));


console.log(text.substr(3,10));
let url='www.Desktop/hh/template.html'
let start=url.indexOf('/',10)

let end=url.lastIndexOf('.')
console.log(url.substring(start+1,end))

var employee=[
    {name:'Abebe',age:21,salary:2100},
    {name:'Grima',age:32,salary:3000},
    {name:'Alemu',age:15,salary:1500},
    {name:'Almaz',age:23,salary:1800}

]
console.table(employee)

var newArray=employee.filter(a=>a.name.includes('m')).map(a=>a.name)
//var newArray=employee.filter(a=>a.name.search('m')!==-1).map(a=>a.name)
//if you have used search u have to insert !==-1 to exclude 
console.log(newArray);

//node tree vs element
//dom in js

// var p=document.body.firstChild.nextSibling.lastChild.previousSibling
// p.innerHtml='changed'
// p.textContent='changed'
// var par=document.body.firstElementChild.lastElementChild
// var title=document.body.firstChild.nextSibling