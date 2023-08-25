// const sum = +prompt('Please enter your budget', '');
// const currency = prompt('Please enter your currency', ''); //rub, $, shf
// const targetCurrency = prompt('Please enter the currency for convertation', ''); //rub, $, shf

let sum = 100;
let currency = 'euro';
let targetCurrency = 'rub';

console.log(currency == 'rub');

const bets = {
    dollarToRubles: 94.44,
    euroToRubles: 102.25,
    CHFToRubles: 107.27,
}

let dollarsToRubles = () => console.log(sum * bets.dollarToRubles);
let rublesToDollars = () => console.log(sum / bets.dollarToRubles);

let eurosToRubles = () => console.log(sum * bets.euroToRubles);
let rublesToEuros = () => console.log(sum / bets.euroToRubles);

let CHFsToRubles = () => console.log(sum * bets.CHFToRubles);
let rublesToCHF = () => console.log(sum / bets.CHFToRubles);

 

if (sum !== null && currency !== null && targetCurrency !== null) {
    calculate(currency, targetCurrency);
}

function calculate(haveCurrency, willHaveCurrency) {
    switch(true) {
        case(haveCurrency == 'rub' && willHaveCurrency == '$'):
            return rublesToDollars();
        case(haveCurrency == '$' && willHaveCurrency == 'rub'):
            return dollarsToRubles();
        case(haveCurrency == 'rub' && willHaveCurrency == 'euro'):
            return rublesToEuros();
        case(haveCurrency == 'euro' && willHaveCurrency == 'rub'):
            return eurosToRubles();

        default: 
            console.log('fuck');
            
    }
}