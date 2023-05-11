// EXAMINE THE DOCUMENT OBJECT
// console.dir(document)
// document.title=123
// console.log(document.title)
// console.log(document.body)

// GETELEMENTBYID
// console.log(document.getElementById('header-title'))
// var headerTitle= document.getElementById('header-title')
// headerTitle.textContent='hello'
// headerTitle.innerText='Goodbye'
// the difference between these two is: 
// textContent will not take the style into consideration
// innerText will take the style into consideration
// headerTitle.innerHTML='<h3>hello</h3>'
//innerhtml does not change the html tag, it inserts a new one into it 
// headerTitle.style.borderBottom='solid 3px yellow'

// GETELEMENTSBYCLASSNAME

// var items= document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])   
// items[1].textContent='hello 2' 
// items[1].style.fontWeight='bold'
// items[1].style.backgroundColor='Yellow'

// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='#f4f4f4'
// }

// GETELEMENTSBYTAGNAME


// var li =document.getElementsByTagName('li')
// console.log(li)
// console.log(li[1])

// li[1].textContent ='Hello 2'
// li[1].style.fontWeight='bold'
// li[1].style.backgroundColor='yellow'

// for(var i; i<li.length;i++){
//     li[i].style.backgroundColor='#f4f4f4'
// }

// QUERYSELECTOR
// var head= document.querySelector('#main-header');
// head.style.borderBottom ='solid 4px grey'

// const inputs =document.querySelector('input')
// inputs.value='Hello World'

// const submit = document.querySelector('input[type="submit"]');
// submit.value='SEND'

// const item = document.querySelector('.list-group-item')
// item.style.color='red'

// const lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color='blue'

// const secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color='coral'

// QUERYSELECTORALL

const titles = document.querySelectorAll('.title')
console.log(titles)
titles[0].textContent='Hello'

var odd =document.querySelectorAll('li:nth-child(odd)')

for(var i;i<odd.length;i++){
    odd[i].style.backgroundColor='#f4f4f4'
}

var even =document.querySelectorAll('li:nth-child(even)')
even.textContent='even'