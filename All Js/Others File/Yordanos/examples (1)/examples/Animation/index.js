$('#move').css({'color': 'white', 'background':'green'})
$('#stop').css({'background': 'red', 'color': 'white'})

// $('#move').click(function(){
//     $('#button').hide(2000, ()=>{
//         alert('hidden')
//     })
// })

// $('#move').click(function(){
//     $('#button').toggle(200, ()=>{
//         $('#button').is(':visible')?alert('good'):alert('bad')
//     })
// })

// $('#move').click(function(){
//     $('#button').fadeToggle(2000, ()=>{   
//     })
// })

// $('#move').click(function(){
//     $('#button').slideToggle(1000)
// })

// $('#stop').click(function(){
//     $('#button').show()
// })

// $('#move').click(function(){
//     var div = $('#button')
//     let width = window.innerWidth
//     let height = window.innerHeight
//     div.animate({left: 100, top: 100}, "slow")
//     div.animate({left: width-200, top: 100}, "slow")
//     div.animate({left: width-200, top: height-200}, "slow")
//     div.animate({left: 100, top: height-200}, "slow")
//     div.animate({left: 100, top: 100}, "slow")
// })

// function move(){
//     var div = $('#button')
//     let width = window.innerWidth
//     let height = window.innerHeight
//     div.animate({left: 100, top: 100}, "slow")
//     div.animate({left: width-200, top: 100}, "slow")
//     div.animate({left: width-200, top: height-200}, "slow")
//     div.animate({left: 100, top: height-200}, "slow")
//     div.animate({left: 100, top: 100}, "slow")
// }

// let timer;
// $('#move').click(function(){
//     timer=setInterval(move, 2000)
// })

// $('#stop').click(function(){
//     timer=stop
// })


function moveF(){
    var div = $('#button')
    let width = window.innerWidth
    let height = window.innerHeight
    div.animate({left: width/2, top: 100}, "fast")
    div.animate({left: width-200, top: height-200}, "fast")
    div.animate({left: 100, top: height-200}, "fast")
    div.animate({left: width/2, top: 100}, "fast")
}

function moveS(){
    var div = $('#button')
    let width = window.innerWidth
    let height = window.innerHeight
    div.animate({left: width/2, top: 100}, "slow")
    div.animate({left: width-200, top: height-200}, "slow")
    div.animate({left: 100, top: height-200}, "slow")
    div.animate({left: width/2, top: 100}, "slow")
}

let timerF, timerS;
$('#move').click(function(){
    timerS=setInterval(moveS, 1000)
})

$('#fast').click(function(){
    timerF=setInterval(moveF, 500)
})

$('#slow').click(function(){
    timerS=setInterval(moveS, 1000)
})

$('#stop').click(function(){
    clearInterval(timer)
})