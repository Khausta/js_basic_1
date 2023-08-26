const sum = +prompt('Please enter your budget', '');
const entredCurrency = prompt('Please enter your currency', ''); //rub, $, shf
const EntredTargetCurrency = prompt('Please enter the currency for convertation', ''); //rub, $, shf



function calculate() {
    
    let dollarToRubles = 94.44;
    let euroToRubles = 102.25;
    let CHFToRubles = 107.27;

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
            return sum / CHFToRubles;
        case(currency == 'chf' && targetCurrency == 'rub'):
            return sum * CHFToRubles;
        
        default: 
            alert(`Возможно, вы ввели валюту, 
            которая еще не конвертируется на нашем сайте`);  
    }
}

function convertation() {
    currency = entredCurrency.toLowerCase();
    targetCurrency = EntredTargetCurrency.toLowerCase();
    
    if(sum && currency && targetCurrency) {
        alert(calculate().toFixed(2));
    } else {
        alert('Пожалуйста, заполните все поля');

    }
}

convertation();



