// getting all elements of an element
var allElements=document.body.children[0].children;
// array of elements are classified in to two HTMLCollection and NodeList
// We can not use for each on HTMLCollection
// We can use for each on NodeList
// for(const item in allElements){
//     item.
// }

var div2=document.getElementsByClassName('main');
div2[0].style.color='yellow';

const allForms=document.forms[0];
const fname=allForms.elements.fname;
const lname=allForms.elements.fname;

fname.style.border='10px solid red'

let parent=document.body.firstElementChild;
let btn=document.body.firstElementChild.firstElementChild;
btn.style.border='1px solid red';
btn.nextElementSibling.style.border='1px solid red';
parent.removeChild(btn);

let btn=document.body.firstElementChild.firstElementChild;
btn.onclick=()=>alert("Hello");

btn.addEventListener('mouseover',()=>alert('added using addEvent'));

let wr=querySelector('.wrapper')
wr.style.border='1px soid red';

var wr=document.querySelector('.wrapper');
wr.style.border='1px solid red';
let child=wr.firstElementChild;
let child2=child.nextElementSibling;
child.addEventListener('click',()=>{
    var p=document.createElement('p');
    p.textContent="I'm new";
    wr.appendChild(p);
})

child2.addEventListener('click',()=>{
    let p=wr.lastElementChild;
    wr.removeChild(p);
})

// Event Movement/Propagation
// Event Bubling: from child to parent
// Event Capturing: from parent to child to do this make the last arguent of the addEventLisener method true 
// Event Target: use e.stopPropagation this stops event movement
// e.target returns the element that recived the event

// timer
// 1) setTimeout 
// 2) setInterval

let counter=1;
let x=setInterval(()=>{
    document.write(counter);
    counter++;
},1000);
setTimeout(()=>{
    clearInterval(x);
},11000)

var drop=document.querySelector('.drop');
var ul=document.querySelector('ul');
ul.style.display='none';
drop.addEventListener('click',()=>{
    if(ul.style.display=='none'){
        ul.style.display='block';
    }else{
        ul.style.display='none';
    }
})








