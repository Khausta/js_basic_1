const score = [100, 200, -100, 300];

// for (const [index, element] of score.entries()) {
//     console.log(`Round ${index + 1}: ${element}`);
// }

score.forEach((scoreEl, index) => {
    console.log(`Round ${index + 1}: ${scoreEl}`);
})

const transactionsInUSD = [10, -7, 50, -10, 100];

// const transactionInRUB = [];
// for (const transaction of transactionsInUSD) {
//     transactionInRUB.push(transaction * 60);
// }
let transactionInRUB = transactionsInUSD.map( (transaction, index) => {
   return transaction * 60
});
console.log(transactionInRUB);

const operations = [100, -20, 7, -20, 70];
const incomes = [];
// for (const income of operations) {
//     if(income > 0) {
//         incomes.push(income);
//     } 
// }
console.log(incomes);

const positiveOperations = operations.filter(operation => {
    return operation > 0
})
 console.log(positiveOperations);

 const positiveOperationsInRUB = operations
    .map(operation => operation * 60)
    .filter(operation => operation > 0);

console.log(positiveOperationsInRUB);

const prices = [[100, 200], [120, 100], [200, 350]];
const positiveChanges = prices
    .map(pricesBlock => pricesBlock[1] - pricesBlock[0])
    .filter(price => price > 0);

console.log(positiveChanges); //100, 150

//reduce

// let balance = 0;
// for (const operation of operations) {
//     balance += operation
// }

// console.log(balance);
//return обязательно
const balance = operations.reduce((accumulator, value, index) => {
    console.log(`Accumulator: ${accumulator}, index: ${index},vlaue: ${value} `)
    return accumulator += value;
}, 0);

const minElement = operations.reduce((accumulator, value, index) => {
    if (accumulator < value) {
        return accumulator;
    } else {
        return value;
    }
}, 0);

console.log(balance);
console.log(minElement);


// let arr7 = [1, 2];
// let res7 = arr7.reduce((acc, el) => acc += el).map(e => e * 2)
// console.log(res7);

const arr = [2, 4, 4, 10, 6];
let avg = arr.reduce((acc, el, i) => {
    if (i != arr.length - 1) {
       return acc += el;
    } else {
        acc += el;
        return acc / arr.length;
    }
}, 0);

console.log(avg);

let elAvg5;

// for (const el of arr) {
//     if(el > 5) {
//         elAvg5 = el;
//         break;
//     }
// }

elAvg5 = arr.find(el => el > 5);

let elIndexGT5 = arr.findIndex(el => el > 5);
let elIndexLessThan1 = arr.findIndex(el => el < 1);
 
console.log(elAvg5);
console.log(elIndexGT5);
console.log(elIndexLessThan1); // -1 тк нет числа меньше 1


const arr2 = [2, 4, 4, 10, 20];

function some(arr, num) {
    let res = arr.find(el => el === num);
    // if (res === num) {
    //     return true
    // } else {
    //     return false;
    // }
    return res === undefined ? false : true;
 
}

console.log(some(arr2, 4));
console.log(arr2.some(el => el === 2));

const prices2 = [[100, 200], [120, 100], [200, [350, 200]]];

// const res2 = prices2.flat(); //1 по умолч. если установить 2 то вложенность на 2 уровня меньше 
// console.log(res2);

const res3 = prices2.flatMap(el => el.concat([1]));
console.log(res3);


//sort

const users = ['Anna', 'Svetlana', 'Mike', 'Evgeniy'];
console.log(users);
let res4 = users.sort();
console.log(res4);

// const operstionSorted = operations.sort((a, b) => a - b);

const operstionSorted = operations.sort((a, b) => {
    if(a > b) {
        return 1;
    } else {
        return -1;
    }
});
console.log(operstionSorted);


//быстрое создадние массивов
let arr3 = new Array(1, 2, 3, 4, 5); //передаем элементы
console.log(arr3);
let arr4 = new Array(5);//передаем длинну массива.но нельзя работаь с map
console.log(arr4);
let arr4Map = arr4.map(el => el + 1);
console.log(arr4Map);

// arr4.fill(1);//заполняет весь массив
// console.log(arr4); //1, 1, 1, 1, 1

arr4.fill(1, 0, 3);//указываем каким значением заполняем и с какого по какой индекс
console.log(arr4); //(5) [1, 1, 1, пустой ×2]

const arr5 = Array.from({length: 5}, () => 5);
console.log(arr5);

const arr6 = Array.from({ length: 5}, (curr, index) => index + 1);
console.log(arr6);



let arr8 = [1, 2];
let res8 = arr8.map(e => e * 2).filter(e => e > 3);
console.log(res8);


