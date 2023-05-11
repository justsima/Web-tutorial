//click should work
//make the pic change by time
let pre=document.querySelector('.pre');
let next=document.querySelector('.next');
let title=document.querySelector('.title');
let slider=document.querySelectorAll('.slider img');
let imgs=
['images/1.jpg',
'images/2.jpg',
'images/3.jpg',
'images/4.jpg'];
slider[0].style.opacity=0.2;

let current=0;
title.style.backgroundImage=`url(${imgs[current]})`;
let imgLength=imgs.length -1

pre.addEventListener('click',function(){
    current--;
    current<0?current=0:'';
    title.style.backgroundImage=`url(${imgs[current]})`;
})
next.addEventListener('click',function(){
    current++;
    current>imgLength?current=imgLength:'';
    title.style.backgroundImage=`url(${imgs[current]})`;
})

for(let i=0;i<slider.length;i++){
    slider[i].addEventListener('click',()=>{
        slider[i].style.opacity=0.2;
    })
}




