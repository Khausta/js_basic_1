const sum = +prompt('Please enter your budget', '');
const currency = prompt('Please enter your currency', '');
const targetCurrency = prompt('Please enter the currency for convertation', '');

const bets = {
    dollarToRubles: 94.44,
    euroToRubles: 102.25,
    CHFToRubles: 107.27,
}

let dollarsToRubles = () => sum * bets.dollarToRubles;
let rublesToDollars = () => sum / bets.dollarToRubles;

let eurosToRubles = () => sum * bets.euroToRubles;
let rublesToEuros = () => sum / bets.euroToRubles;

let CHFsToRubles = () => sum * bets.CHFToRubles;
let rublesToCHF = () => sum / bets.CHFToRubles;


console.log(dollarsToRubles());
console.log(rublesToDollars());

switch(true) {
    case ( 
        sum !== null 
        && currency !== null 
        && targetCurrency !== null) :
        console.log('ok');
    default: 
        console.log('Пожалуйста, заполните все запрашиваемые данные');
}
