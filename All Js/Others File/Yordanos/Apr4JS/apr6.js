// var a = [1,4,2,7,5,6,8,4,2,3,]

// //console.log(a.sort((a,b)=>b-a));

// var o=a.filter(item=>item%2).sort((a,b)=>a-b)
// var e=a.filter(item=>!(item%2)).sort((a,b)=>a-b)

// console.log(o.concat(e));
// //add sort

// console.log(a.find(a=>a%2));
// console.log(a.findIndex(a=>a%2));


console.log(Math.floor(Math.random()*21))

// var text = "Abebe beso bela. chala chube chebete."

// console.log(text.replace('beso', 'chebeto'));

// console.log(text.search('bela'));
// console.log(text.includes('beso'));

// console.log(text.indexOf('b', 5));

// console.log(text.slice(0, 3));

// console.log(text.substring(3,8));

// var url = "www.Desktop/hh/template.html"

// console.log(url.slice(url.search('template'),-5));

// console.log(url.substring(url.indexOf('t',9),url.lastIndexOf('.')));

// console.log(url.substring(url.lastIndexOf('/')+1,url.lastIndexOf('.')));

// var Employee = [
//     {name: 'abebe', age: 21, salary: 2100},
//     {name: 'girma', age: 24, salary: 2160},
//     {name: 'alemu', age: 26, salary: 2170},
//     {name: 'almaz', age: 21, salary: 2190}
// ]

// console.table(Employee);


//create a new array containing the names of employees with name having the letter 'm'

// var m_names = Employee.filter(a=>a.name.includes('m')).map(a=>a.name)
// console.log(m_names);

// var m_names = Employee.filter(a=>a.name.search('m')!==1).map(a=>a.name) ..something is wrong here
// console.log(m_names);
//search returns index number if element is found but -1 if not

//dom considers our browser to be one single object

//node vs elements
//even the smallest stuffs/elements are nodes


//the space between elements is targetted and is called text node

//var p = document.head.lastChild.previousSibling
// var p = document.body.firstChild.nextSibling.parentNode.previousSibling.previousSibling.lastChild.previousSibling
// p.textContent="abebe"
//var q = document.body.lastChild.previousSibling.firstChild.nextSibling
//var q = document.body.lastChild.previousSibling.lastChild.previousSibling
//q.innerHTML="successfully changed"
//can also say innerHTML

// var p = document.body.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling
// p.textContent = "Successfully changed"

var p = document.body.firstElementChild.nextElementSibling
p.textContent = "Successfully changed"
