const sum = +prompt('Please enter your budget', '');
const entredCurrency = prompt('Please enter your currency', ''); //rub, $, shf
const entredTargetCurrency = prompt('Please enter the currency for convertation', ''); //rub, $, shf



function calculate() {
    
    const dollarToRubles = 94.44;
    const euroToRubles = 102.25;
    const chfToRubles = 107.27;

    switch(true) {
        case(currency == 'rub' && targetCurrency == '$'):
            return sum / dollarToRubles;
        case(currency == '$' && targetCurrency == 'rub'):
            return sum * dollarToRubles;
        case(currency == 'rub' && targetCurrency == 'euro'):
            return sum / euroToRubles;
        case(currency == 'euro' && targetCurrency == 'rub'):
            return sum * euroToRubles;
        case(currency == 'rub' && targetCurrency == 'chf'):
            return sum / chfToRubles;
        case(currency == 'chf' && targetCurrency == 'rub'):
            return sum * chfToRubles;
        default: 
            alert(`Возможно, вы ввели валюту, 
            которая еще не конвертируется на нашем сайте`);  
    }
}

function convertation() {
    currency = entredCurrency.toLowerCase();
    targetCurrency = entredTargetCurrency.toLowerCase();
    if(sum && currency && targetCurrency) {
        alert(calculate().toFixed(2));
    } else {
        alert('Пожалуйста, заполните все поля');
    }
}

convertation();



