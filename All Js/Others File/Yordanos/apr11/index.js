//dom manipulation 
// 1. element
// 2. array of elemtents
// 2.1. html collections
// 2.2. node list


// var allElements = document.body.children[0],children
// //foreach property can't be used for the html collections (elements) but we can for the node list

// for (const ele of allElements){
//     ele.style.border = '1px solid red'
// }

// //using the DOM
// var but1 = document.body.firstElementChild.firstElementChild
// var but2 = but1.nextElementSibling

//using elements ID
// var div = document.getElementById('wrapper')
// div 

// //using class name
// var div2 = document.getElementsByClassName('main')
// div2[0].style.color='red'

// //using tag name
// var p = document.getElementsByTagName('p')
// p[0].style.color='red'

//using querySelector and querySelectorAll
//query selector only returns the first of all not an array
// var p = document.querySelector('.main p')
// p.style.color='red'
// //query selector all returns an array of elements
// var p = document.querySelectorAll('.main p')
// p.forEach(el => el.style.color='red')

// using forms
// var Myform = document.forms[0]
// // returns the list of forms
// var fname = Myform.elements.fname
// fname.style.border='1px solid red'
// var lname = Myform.elements.lname
// lname.style.border='1px solid red'

// // using element name or id
// var ff = document.getElementsByName('fname')
// fname.style.border='2px solid red'

// // new
// var body = document.body
// var newP = document.createElement('p')
// newP.textContent='I am new'
// body.appendChild(newP)

// var body = document.body.firstElementChild
// var remC = document.querySelector('#wrapper button')
// body.removeChild(remC)

//Event... user interacting with the page
//Event handler do be a function... to handle the event

// var body = document.body.firstElementChild
// var remC = document.querySelector('#wrapper button')
// remC.onclick=function(){
//     alert('good')
// }

// //Event listener
// function fn1(){
//     alert('good')
// }
// function fn2(){
//     alert('good too')
// }

// remC.onclick=fn1
// remC.onclick=fn2
//thisu only displays the second one 
// ...so we need to have to use addEventListener...

// function fn1(){
//     alert('good')
// }
// function fn2(){
//     alert('good too')
// }

// remC.addEventListener('mouseover', fn1)
// remC.addEventListener('click', fn2)
//we don't add the on in side and we can now have multiple actions
//can have mouseover, click wezete

// var body = document.body
// var cre = document.querySelector('#wrapper').firstElementChild
// var del = document.querySelector('#wrapper').firstElementChild.nextElementSibling
// function fn1(){
//     var newP = document.createElement('p')
//     newP.textContent='I am new'
//     body.appendChild(newP)
// }
// function fn2(){
//     body = document.body.firstElementChild
//     var remC = body.lastElementChild
//     body.removeChild(remC)
// }
// // //remove removes everything last... just not it

// cre.addEventListener('click', fn1)
// del.addEventListener('click', fn2)

// // Thisu now works
// var wr = document.querySelector('#wrapper')
// wr.style.border = '1px solid red'
// var child = wr.firstElementChild
// var child2 = child.nextElementSibling

// child.addEventListener('click',()=>{
//     var newP = document.createElement('p')
//     newP.textContent = 'I am new'
//     wr.appendChild(newP)
// })

// child2.addEventListener('click',()=>{
//     var last = wr.lastElementChild
//     wr.removeChild(last)
// })

// new html
// bubbling phase... child to parent
// capturing phase... parent to child
// targetting... specific

// var body = document.body
// var wr = document.querySelector('.wrapper')
// var child = wr.firstElementChild
// wr.getElementsByClassName.border = '10px solid red'
// body.style.border = '10px solid yellow'
// child.style.border = '10px solid green'

// body.addEventListener('click',() =>{
//     alert('body')
//     e.stopPropagation()
// },true)

// wr.addEventListener('click',() =>{
//     alert('parent')
//     e.stopPropagation()
// },true)

// child.addEventListener('click',() =>{
//     alert('child')
//     e.stopPropagation()
// },true)

// var val = 1

// var timer=setInterval(()=>{
//     document.write(`<h1>${val++}</h1>`)
// },1000)

// setTimeout(() => {
//     clearInterval(timer)
// },11000)

// //the drop down thingy
// // click to show and then click again to hide
// var drop = document.querySelector('.drop')
// var ul = document.querySelector('ul')
// ul.style.display='none'
// drop.addEventListener('click',()=>{
//     ul.style.display=='none'?ul.style.display='block':ul.style.display='none'
// })

// //when the del on home is touched remove all and if the rest is touched, remove that row
// var drop = document.querySelector('.drop')
// var ul = document.querySelector('ul')
// var ul_li = document.querySelector('ul li')
// var ul_li_del = ul_li.querySelector('.delete')
// // ul_li_del.style.border='2px blue solid'

// ul_li_del.addEventListener('click',()=>{
//     ul.style.display='none'
// })

// // projects.style.border='4px green solid'
// // projects.parentElement.style.border="2px red solid"

// var projects=ul.firstElementChild.nextElementSibling.querySelector('.delete')
// projects.addEventListener('click', ()=>{
//     ul.removeChild(projects.parentElement)
// })

// var main=ul.firstElementChild.nextElementSibling.nextElementSibling.querySelector('.delete')
// main.addEventListener('click', ()=>{
//     ul.removeChild(main.parentElement)
// })

// var about=ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('.delete')
// about.addEventListener('click', ()=>{
//     ul.removeChild(about.parentElement)
// })

// var profile=ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('.delete')
// profile.addEventListener('click', ()=>{
//     ul.removeChild(profile.parentElement)
// })

