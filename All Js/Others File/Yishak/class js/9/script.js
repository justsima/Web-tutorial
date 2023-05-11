//varable hosting
//on let hoisting wont work
//on var hoisting works
//ES6 code snipit
//var is function scoped 
//let is blocked scoped
//template literals ${}


/*
    var varx=5;
    let letx=8;

    function f() {
        varx=7;
        letx=6;
    }

    f();

    console.log(varx); 
    console.log(letx); //6

    var varx=5;
    let letx=5;

    function f() {
        var varx=1;
        let letx=1;
    }

    f();

    console.log(varx); 
    console.log(letx);
*/

for(let i=0;i<10;i++){
    for(let j=0;j<i;j++){
        document.write('*');
    }
    document.write('<br>');
}

document.write('<br>');

for(let i=0;i<10;i++){
    for(let j=10;j>i;j--){
        document.write('*');
    }
    document.write('<br>');
}
