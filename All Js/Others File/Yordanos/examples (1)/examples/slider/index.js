
let pre=document.querySelector('.pre');
let next=document.querySelector('.next');
let title=document.querySelector('.title');
let slider=document.querySelectorAll('.slider img');
let imgs=
['images/1.jpg',
'images/2.jpg',
'images/3.jpg',
'images/4.jpg'];
slider[0].style.opacity=0.5;

let current=0;
title.style.backgroundImage=`url(${imgs[current]})`;
let imgLength=imgs.length-1

pre.addEventListener('click',function(){
    current--
    current<0?current=imgLength:''
    title.style.backgroundImage=`url(${imgs[current]})`;
})
next.addEventListener('click',function(){
    current++
    current>imgLength?current=0:''
    title.style.backgroundImage=`url(${imgs[current]})`;
    clearInterval(timer)
})

slider[0].addEventListener('click', function(){
    title.style.backgroundImage=`url(${imgs[0]})`;
})

slider[1].addEventListener('click', function(){
    title.style.backgroundImage=`url(${imgs[1]})`;
})

slider[2].addEventListener('click', function(){
    title.style.backgroundImage=`url(${imgs[2]})`;
})

slider[3].addEventListener('click', function(){
    title.style.backgroundImage=`url(${imgs[3]})`;
})

//using timer
let timer = setInterval(()=>{
    current++
    current>imgLength?current=0:''
    title.style.backgroundImage=`url(${imgs[current]})`;
},2000)


// img.addEventListener('click',function(){
//     title.style.backgroundImage=`url(${imgs[src]})`
// })

//click sidereg that pic
//timer set change but then if the user clicks next or pre it will stop

