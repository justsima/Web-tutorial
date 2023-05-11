// getting all element of an element

// var allElements = document.body.children

// for (const elements of allElements) {
//     elements.style.border = '1px solid red'
// }

// using the dom
// var but1 = document.body.firstElementChild.firstChild
// var but2 = but1.nextElementSibling
// but2.style.backgroundColor = "red"

// using element's id
// var div = document.getElementById('wrapper')

// using element's class name
// var div2 = document.getElementsByClassName('main')

// div2[0].style.color = 'red'

// using element's tag name
// var p = document.getElementsByTagName('p')
// p[0].style.color = "green"

//using queryselector & queryselectorAll
// var p2 = document.querySelectorAll('.main p')
// p2.forEach(el => el.style.color = 'black')

// using forms
// var MyForm = document.forms[0]
// var fname = MyForm.elements.fname
// fname.style.border = '1px solid red'

// using Emelents name or id
// var ff = document.getElementsByName('lname')
// ff.style.border = '10px solid red'

// var b1 = document.getElementsByClassName('wrapper')
// var but1 = document.querySelector('.wrapper')
// var ch = but1.firstElementChild
// but1.removeChild(ch)


//event handler
// ch.onClick = function() {
//     alert('good')
// }

// event listener
// var bt1 = document.getElementById('bt1')
var wr = document.querySelector('#wrapper')
    // wr.style.border = '1px solid red'
    // var child = wr.firstElementChild
    // var child2 = child.nextElementSibling

// child.addEventListener('click', () => {
//     var cr = document.createElement('p')
//     cr.textContent = "created text"
//     wr.appendChild(cr)
// })
// child2.addEventListener('click', () => {
//         var ch = wr.lastChild
//         wr.removeChild(ch)
//     })
// bt1.onclick = fun1
// bt1.onclick = fun2

// event movment
// var body = document.body
// var child = wr.firstElementChild
// wr.style.border = '10px solid red'
// body.style.border = '10px solid yellow'
// child.style.border = '10px solid green'

// body.addEventListener('click', (e) => {
//     alert('body')
//     e.stopPropagation()
// }, true)
// wr.addEventListener('click', (e) => {
//     alert("parent")
//     e.stopPropagation()
// }, true)

// child.addEventListener('click', (e) => {
//     alert("child")
//     e.truestopPropagation()
// }, true)

//time out
// var num = 0

// var timer = setInterval(() => {
//     num++
//     document.write(`<h1>${num}</h1>`)
// alert('hello')
// }, 1000)

// setTimeout(() => { clearInterval(timer) }, 10000)

var drop = document.querySelector('.drop')
var ul = document.querySelector('ul')
ul.style.display = 'none'
drop.addEventListener("click", () => {

    if (ul.style.display == "block") {
        // alert("hide")
        ul.style.display = "none"
    }
    ul.style.display = "block"

})