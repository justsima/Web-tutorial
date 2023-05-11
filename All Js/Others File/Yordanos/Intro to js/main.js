// document.write('<h1>hello</h1>');
// console.log('hello from console');

// variable declared by var let and const
// lenient but case sensitive

// var num = 20;
// {
//     var num = 80;
//     console.log(num);
// }
// console.log(num);
// //let is block scope and var is function scope
// //var will be affected if we change the value in a scope
// let num2 = 20;
// {
//     let num2 = 80;
//     console.log(num2);
// }
// console.log(num2);

// //var is hoisted but let is not
// //hoisted means moved to the top when run

// console.log(num3); //shows undefined
// var num3 = 20;

// console.log(num4); //shows an error
// let num4 = 20;


// extensions
// quokka.js after installing node

// redeclaration
// let num5 = 10
// let num5 = 5
// console.log(num5);


// template literals
// literals delimited with a backtick``
// string interpolation: `${variable}`

// ternary operator
// var n = 100;
// var x = n>10&&n<40?'less than 40': n>40&&n<70?'less than 70':'idk';
// console.log(x);

// var star="*";
// for(let i = 1; i < 10; i++)
// {
//     for(let j = 1; j <= i; j++)
//     {
//         document.write(star)
//     }
//     document.write('</br>');
// }

// document.write('</br>');

// for (let k = 10; k > 0; k--)
// {
//     for(let l = k; l > 0; l--)
//     {
//         document.write(star);
//     }
//     document.write('</br>');
// }

// document.write('</br>');

// for (let k = 10; k > 0; k--)
// {
//     for(let l = 10; l > 0; l--)
//     {
//         document.write(star);
//     }
//     document.write('</br>');
// }