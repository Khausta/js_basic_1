'use strict'
//call apply
const audi = {
    make: 'audi',
    model: 'A3',
    year: 2023,
    damages: [],
    addDamage (part, rate) {
        console.log(`У авто ${this.make} ${this.model} ${this.year} добавлено: повреждение ${part} со степенью ${rate}`);
        this.damages.push({
            part,
            rate
        })
    }
}

audi.addDamage('Капот', 1);

const bmw = {
    make: 'BMW',
    model: 'X5',
    year: 2022,
    damages: [],
}

bmw.addDamage = audi.addDamage;

bmw.addDamage('Бампер', 2);

const addDamageFunc = audi.addDamage;
// bmw.addDamageFunc('Бампер', 2); так вызывать не получится. нужно использовать переадресцию
addDamageFunc.call(bmw, 'Бампер', 3); //call первым арг принемает контекс
addDamageFunc.call(audi, 'Крыло', 2);

addDamageFunc.apply(bmw, ['Крыша', 4]);
addDamageFunc.apply(audi, ['Тормоза', 1]);


//bind
const audi1 = {
    make: 'audi',
    model: 'A3',
    year: 2022,
    damages: [],
  
};

const carManipulation = {
    addDamage (part, rate) {
        this.damages.push({
            part,
            rate
        });
        console.log(`У авто ${this.make} ${this.model} ${this.year} добавлено: повреждение ${part} со степенью ${rate}`);
    }
}

const addDamageAudi = carManipulation.addDamage.bind(audi1);

addDamageAudi('Люк', 2);
console.log(audi1);

const addDamageAudiRoof = carManipulation.addDamage.bind(audi1, 'Крыша');
addDamageAudiRoof(3);
console.log(audi1);


//task
function removePassword(reset) { //remove подчеркнуто, потому что vscode предлагает сделать класс, но можно использовать так если мы понимаем для чег будем использовать
    if (reset) {
        this.password = undefined;
    } else {
        this.password = '1';
    }
}

const user = {
    userName: 'Veniamin',
    password: '3234352',
}

const resetPassword = removePassword.bind(user, true);
resetPassword();
console.log(user);


// EEFI - Immediately Invoked Function Expression
function init() {
    console.log('Start');
}
init();
init(); //можем вызвать два раза

(function () {
    console.log('Start IIFO');
})(); //инкапсуляция - вызова два раза не возможен, также scope огражден

//ЗАМЫКАНИЯ
function changeBalance() {
    let balance = 0;
    let key = 'etliy';
    return function(sum) {
        balance += sum;
        key = 'slfg'; //если нет в этой функции переменной key то и scope не будет доступа у change  к ней
        console.log(`Balance is ${balance}`);
    }
}

const change = changeBalance();
change(100);
change(-50);
change(200);
console.dir(change);

const change2 = changeBalance();
change2(30);
console.dir(change2);

//task
/* Сделать функию пользователя которая 
берет за основу userInfo и за счет 
замыкания создает новый объект, 
с которым можно работать 
как user1().increase(100) */ 

const userInfo = { 
    balance: 0, 
    operations: 0, 
    increase(sum) { 
        this.balance += sum; this.operations++; 
    },
};

function userr() {
    // const userObj = userInfo;
    const userObj = {
        balance: 0, 
        operations: 0, 
        increase(sum) { 
            this.balance += sum; this.operations++; 
        },
    }
    return function () {
        return userObj;
    }
 
}

const user1 = userr();
user1().increase(100);
user1().increase(100);
console.log(user1());

const user2 = userr();
user2().increase(400);
console.log(user2());



function a() {
    let c = 1;

    return function b() {
        return c++;
    }
}
a()();
console.log(a()());

() => console.log('Yes')();


//​Как вызвать функцию c, чтобы вывести значение b?

let aa = {
    b: 1
};
function c() {
    console.log(this.b);
}

c.call(aa); 


// ​Что будет выведено в консоль?

function a() {
    let c = 1;
    return function b() {
        return c++;
    }
}
a()();
console.log(a()());//1

// Что будет выведено в консоль?

() => console.log('Yes')(); //вызова не будет

// ​Что будет выведено в консоль?

(function() { console.log(this) }).apply(0) //Number{0} /0


//​Что будет выведено в консоль?

function a() {
    let c = 1;
    return function b() {
        return c++;
    }
}
const d = a();
d();
console.log(d());//2
a();
console.log(a()());//1
console.log(d());//3



