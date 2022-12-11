"use strict";
//new calculator
let btnResult = document.getElementById('btnResult');
let resField = document.getElementById('result');
let readNum1, readNum2, resSum, resMul;

function Calculator() {
    this.read = function() {
        readNum1 = document.getElementById('num1');
        readNum2 = document.getElementById('num2');
    }
    this.sum = function() {
        resSum = +readNum1.value + +readNum2.value;
        return resSum;
    }
    this.mul = function() {
        resMul = +readNum1.value * +readNum2.value;
        return resMul;
    }

}

let calculator = new Calculator();
calculator.read();
btnResult.addEventListener('click', function(){
    resField.innerHTML = `Сумма: ${calculator.sum()}; Произведение: ${calculator.mul()}`;
});



//new accumulator
function Accumulator(startingValue) {

    this.value = startingValue;


    this.read = function() {
        this.value += +prompt('Введите число', 2);
    };
}
let accumulator = new Accumulator(2);

accumulator.read();
accumulator.read();

alert(accumulator.value);




