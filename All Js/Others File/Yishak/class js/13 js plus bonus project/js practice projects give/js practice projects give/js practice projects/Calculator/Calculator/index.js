/* created by zelalem A for hilcoe students practice */
let textBox = document.getElementsByClassName("textbox");
let butns = document.getElementsByClassName('butn')

for(let i=0;i<butns.length;i++){
    butns[i].addEventListener('click',(e)=>{
        textBox[0].innerHTML+=e.target.innerHTML;
    })
}

//clear button
clearBtn=document.getElementsByClassName('row4')[0];
clearBtn.addEventListener('click',()=>{
    textBox[0].innerHTML='0';
})

//operator buttons
