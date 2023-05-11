let win 
setTimeout(function(){
    win=window.open('pop.html','_blank',"width=500px,height=300px")
    win.moveTo(0,500)
},1000)

setTimeout(function(){
win.close();
},2000)
