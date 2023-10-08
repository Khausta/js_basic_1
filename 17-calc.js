'use strict';

const inputValue1 = document.querySelector('.main-block__inputs').children[0];
const inputValue2 = document.querySelector('.main-block__inputs').children[1];
const res = document.querySelector('.main-block__result');

function calc(symbol) {
    const num1 = Number(inputValue1.value);
    const num2 = Number(inputValue2.value);
    let res = '';
    switch(symbol) {
        case '+': 
            res = num1 + num2;
            return res;
        case '-': 
            res = num1 - num2;
            return res;
        case '*': 
            res = num1 * num2;
            return res;
        case '/':
            res = num1 / num2;
            return res;
    }
}

const allButtons = document.querySelector('.main-block__buttons');
allButtons.addEventListener('click', (e) => {
    const symbol = e.target.innerText;
    res.innerText = calc(symbol);
})
