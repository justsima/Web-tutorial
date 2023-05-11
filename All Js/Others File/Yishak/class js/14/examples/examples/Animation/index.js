$('#move').css({'color':'#fff','backgroundColor':'green'});
$('#stop').css({'color':'#fff','backgroundColor':'red'})
let box=$('#button');
let time;
let speed='slow';
$('#move').click(()=>{
    // $('#button').hide(2000,()=>{
    //     alert('hidden');
    // })
    // $('#button').toggle(2000,()=>{
    //     $('#button').is(':visible')?alert('good'):alert('bad');
    // })
    // $('#button').fadeToggle(2000);
    // btnMove.slideToggle(2000);
    // btnMove.slideUp(2000);
    // time=setInterval(move,1000);
})

$('#stop').click(()=>{
    clearInterval(time);
})

$('#fast').click(()=>{
    clearInterval(time);
    speed='fast';
    time=setInterval(move,1500);
})

$('#slow').click(()=>{
    clearInterval(time);
    speed='slow';
    time=setInterval(move,1500);
})

function move(){
    let width=window.innerWidth;
    let height=window.innerHeight;
    box.animate({left:width/2, top:100},speed);
    box.animate({left:width-100,top:height-100},speed)
    box.animate({left:100,top:height-100},speed)
    box.animate({left:width/2, top:100},speed);
}



