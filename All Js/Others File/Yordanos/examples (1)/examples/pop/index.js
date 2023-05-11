let win
setTimeout(function(){
    win=window.open('2.jpg','_blank',"width=500px,height=300px")
    win.moveTo(0,500) //moves by coordinate... open one window while we're using another one
},3000)

setTimeout(function(){
win.close();
},6000)
