"use strict";

/*
let age = prompt('Введите возраст', '');

//в диапазоне
if (age >= 14 && age <= 90) {
    alert('nice');
}

//вне диапазона
if (age < 14 || age > 90) {
    alert('nice');
}
if (!(age >= 14 && age <= 90)) {
    alert('nice');
}
*/

let userName = prompt('Кто там?', 'Админ');

if (userName == 'Админ') {
    let userPas = prompt('Пароль?', 'Я главный');
    if (userPas == 'Я главный') {
        alert('Здравствуйте!');
    } else if(userPas == null || userPas == undefined) {
        alert('Отмена');
    } else {
        alert('Неверный пароль');
    }

} else if(userName == null || userName == undefined) {
    alert('Отмена');
} else {
    alert('я вас не знаю');
}