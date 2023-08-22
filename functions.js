'use strict';
// 1
let res = (num, pow) => num ** pow;
console.log(res(2, 3));


// 2 со значением по умолчанию
function power(num, pow) {
    let powPower = pow ?? 2; //если не указано число, то приравнивается к 2
    let res = num ** powPower;
    return res;
}

console.log(power(3));


//3 со значением по умолчанию
function power2 (num, power = 2) {
    return num ** power
}

console.log(power2(3, 3)); //27
console.log(power2(3)); //9


//4 with return
function canEnterToWebsite(age) {
    if(age < 18) return false;
    return true;
}

console.log(canEnterToWebsite(17));


let canEnterToWebsite2 = age => age < 18 ? false : true;
console.log(canEnterToWebsite2(18));


//Задание для упражнения:
// Пользователь:
// Возраст
// Наличие работы
// Деньги
// Нужно проверить может ли он купить новый MacBook за 2000$? 
// Он может брать не только свои деньги, но и взять кредит. 
// Ему дадут 500$, только если ему больше 24-х лет и он имеет 
// работу, 100$ если ему просто больше 24-х лет и 0 в ином случае. 
// Напишите функцию, которая принимает данные пользователя и 
// товара и возвращает true или false.


function canBuy(age, job, money) {
    if (money >= 2000 || totalMmoney(age, job) >= 2000) {
        return 'может'
    }  
    return 'не может'
}

function bankMoney(age, job) {
    if (age > 24 && job) {
        return 500
    } else if (age > 24 ) {
        return 100
    } else {
        return 0
    }
} 

function totalMmoney(age, job, money) {
    return bankMoney(age, job) + money;
}

console.log(canBuy(24, true, 1800));
