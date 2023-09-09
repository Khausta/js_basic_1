'use strict'

console.log(this); //window
console.log(window); //window

function addNum(num1, num2) {
    console.log(this); //без use strict this=window, с use strict this=undefined
    return num1 + num2;
}

addNum(5, 2); //this = undefined, так как strict mode


const addNum2 = (num1, num2) => {
    console.log(this); //this=window, так как this у функции отсутсвует и она берт из внешней обертки
    return num1 + num2;
}

addNum2(3, 2);

const user = {
    name: 'Вася',
    sername: 'Пупкин',
    getFullName: function() {
        console.log(this);
        // return this.name + ' ' + this.sername
    }
};

user.getFullName()

const user2 = {
    name: 'Mariya',
    sername: 'Jackson',

};

user2.getFullName = user.getFullName;

console.log(user2);
user2.getFullName();

const getFullName = user2.getFullName;
getFullName();

//methods context
const user3 = {
    name: 'Вася',
    sername: 'Пупкин',
    getUserInfo: function() {
        console.log(`${this.name} ${this.sername}`);
    },
    getUserInfoArrow: () => {
        console.log(`${this.name} ${this.sername}`);
    }

};

user3.getUserInfo();//Вася Пупкин
user3.getUserInfoArrow();//undefined (1 undefined а не 2, так как name устаревшее слово к-е равно ничему)


const user4 = {
    firstName: 'Вася',
    lastName: 'Пупкин',
    age: 20, 
    getUserInfo: function() {
        console.log(`${this. firstName} ${this.lastName}`);

        // function canDrink() {
        //     if(this.age >= 18) {
        //         console.log('Можут пить');
        //     } else {
        //         console.log('Не может пить');
        //     }
        // }
        const canDrink = () => {
            if(this.age >= 18) {
                console.log('Можут пить');
            } else {
                console.log('Не может пить');
            }
        }
        canDrink();//ошибка/ можем сделать стрелочной эту функцию, тогда будет this родитель стрелочной функуции
    },
    getUserInfoArrow: () => {
        console.log(this);//window
        console.log(`${this. firstName} ${this.lastName}`);
    }
};

user4.getUserInfo(); //Вася Пупкин
user4.getUserInfoArrow(); // undefined undefined, так как в window нет таких переменных


//arguments
function sumNum(num1, num2) {
    console.log(this);//undefined
    console.log(arguments); //специальный объект arguments //1,3, 4, 7
    console.log(arguments[0]); // 1
    return num1 + num2;
}

console.log(sumNum(1,3, 4, 7));

const sumNumArr = (num1, num2) => {
    console.log(this);
    console.log(arguments);  // в стрелочных функциях не можем получить аргументы
    return num1 + num2;
}

// console.log(sumNumArr(1, 5, 4))


/*
Дополнить объект методом для получения имени:
- компании
- сео
- сотрудника
*/

const company = {
    name: "ООО Агро",
    employees: [
        {
        name: "Света",
        },
    ],
    ceo: {
        name: "Вася",
        },
    };

company.getCompany = function () {
    console.log(this.name);
    return this.name;
}

company.getCompany();

company.getCEO = function() {
    console.log(this.ceo.name);
    return this.ceo;
}

company.getCEO();

company.getNameEmployer = function() {
    this.employees.forEach(el => {
        console.log(el.name);
    })
    
}

company.getNameEmployer();


// function a() {
//     console.log(i);
// }
// function b() {
//     let i = 0;
//     a();
// }
// b();


// let a = {
//     c: 1,
//     function b() {
//         console.log(this.c);
//     }
// }