//sum factor is when the sum of all values in the array also exists as an element itself
//so we need to find the sum and then see if we can find the value in the array
var x = [1,-1,0]
var sum = x.forEach(a => sum += a)
var isSumFactor = x.includes(sum)? "Is sum factor":"Is not sum factor"
console.log(isSumFactor);
