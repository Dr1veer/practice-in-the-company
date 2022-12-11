//"use strict";


//min(a,b)
function min(a, b) {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
} 

/*
btn.addEventListener('click', function() {
    let num1 = document.getElementById('Num1').value;
    let num2 = document.getElementById('Num2').value;
    let btn = document.getElementById('btn');
    console.log(min(+num1, +num2));
});
*/

//pow(a,b) 
function pow(a,b) {
    let num = a;
    for (b; b>1; b--) {
        a = num*a;
    }
    return a;
}
btn.addEventListener('click', function() {
    let num1 = document.getElementById('Num1').value;
    let num2 = document.getElementById('Num2').value;
    let btn = document.getElementById('btn');
    console.log(pow(+num1, +num2));
});
