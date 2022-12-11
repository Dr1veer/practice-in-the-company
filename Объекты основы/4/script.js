"use strict";

let num1, num2, resBtn, result, inputRes;
resBtn = document.getElementById('btnResult');
inputRes = document.getElementById('result');

//калькулятор
let calculator = {
    read() {
        num1 = document.getElementById('num1');
        num2 = document.getElementById('num2');
    },
    sum() {
        result = +num1.value + +num2.value;
        return result;
    },
    mul() {
        result = +num1.value  * +num2.value;
        return result;
    },
};

resBtn.addEventListener('click', function() {
    calculator.read();
    inputRes.innerHTML = `Сумма: ${calculator.sum()}; Произведение: ${calculator.mul()}`;
});


//лесенка
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this; 
    },
    showStep() {
        console.log(this.step);
    },
};

ladder.up().showStep();