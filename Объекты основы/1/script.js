"use strict";

/*
let user = {
    age: 28,
}
user.name = 'Jhon';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
*/


let newUser = {

}

isEmpty(newUser);
//проверка на наличие свойств в объекте
function isEmpty(obj1) {
    let i = 0;
    for (let key in obj1) {
        i++;
    }
    if (i == 0)  {
        return true;
    } else {
        return false;
    };
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

//суммирование всех зарплат
function sum(obj) {
    if (isEmpty(obj)) {
        console.log('пустой объект');
    } else {
        let summa = 0;
        for (let key in obj) {
            summa += obj[key];
        }
        console.log(summa);
    }
    
}

sum(salaries);

let menu = {
    widht: 200,
    height: 300,
    title: 'My menu',
};

//увеличение всех чисел объекта на 2
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu);

console.log(menu);