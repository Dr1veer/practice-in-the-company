"use strict";

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let num = prompt('введите число больше 100', '');

while (num < 100 || num == null || num == undefined) {
    num = prompt('введите число больше 100', '');
}
    