"use strict";

let snake, field;

snake = document.getElementById('snake');

let snakeObj = {
    Vertical: 0,
    Horizontal: 0,
    up() {
        if (this.Vertical <= 0) {
            this.Vertical = 450;
        } else {
            this.Vertical = this.Vertical - 50;
        }
    },
    down() {
        if (this.Vertical >= 450) {
            this.Vertical = 0;
        } else {
            this.Vertical = this.Vertical + 50;
        }
    },
    right() {
        if (this.Horizontal >= 450) {
            this.Horizontal = 0;
        } else {
            this.Horizontal = this.Horizontal + 50;
        }
    },
    left() {
        if (this.Horizontal <= 0) {
            this.Horizontal = 450;
        } else {
            this.Horizontal = this.Horizontal - 50;
        }
    },
}

let speed = 200,
    autoMoveTop,
    autoMoveDown,
    autoMoveRight,
    autoMoveLeft,
    bagY = 0,
    bagX = 0;

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyW') {
        if (bagY < 1) {
            autoMoveTop = setInterval(upY, speed);
            clearInterval(autoMoveDown);
            clearInterval(autoMoveLeft);
            clearInterval(autoMoveRight);
            bagY = 0;
            bagX = 0;
        }
        bagY++;
    }
    if (event.code == 'KeyS') {
        if (bagY > -1) {
            autoMoveDown = setInterval(downY, speed);
            clearInterval(autoMoveTop);
            clearInterval(autoMoveLeft);
            clearInterval(autoMoveRight);
            bagY = 0;
            bagX = 0;
        }
        bagY--;
    }
    if (event.code == 'KeyD') {
        if (bagX > -1) {
            autoMoveRight = setInterval(rightX, speed);
            clearInterval(autoMoveDown);
            clearInterval(autoMoveLeft);
            clearInterval(autoMoveTop);
            bagX = 0;
            bagY = 0;
        } 
        bagX--;
    }
    if (event.code == 'KeyA') {
        if (bagX < 1) {
            autoMoveLeft = setInterval(leftX, speed);
            clearInterval(autoMoveDown);
            clearInterval(autoMoveTop);
            clearInterval(autoMoveRight);
            bagX = 0;
            bagY = 0;
        }
        bagX++;
    }
});


function upY() {
    snakeObj.up();
    snake.style.top = `${snakeObj.Vertical}px`;
}
function downY() {
    snakeObj.down();
    snake.style.top = `${snakeObj.Vertical}px`;
}
function rightX() {
    snakeObj.right();
    snake.style.left = `${snakeObj.Horizontal}px`;
}
function leftX() {
    snakeObj.left();
    snake.style.left = `${snakeObj.Horizontal}px`;
}






/*
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
*/