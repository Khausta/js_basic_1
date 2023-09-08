const userArray = ['Вася', 'Пупкин', 24];
const user = {
    name: 'Вася',
    sername: 'Пупкин',
    age: 24,
    skills: [
        'Программирование',
        'Готовка'
    ],
    1: 1,
    educationBasic: 'Школа 10',
    educationPro: 'МФТИ',

};
console.log(user);
console.log(user.city);//undefined

console.log(user.name);
console.log(user['name']);
console.log(user.skills[0]);
console.log(user.skills);
console.log(user['skills']);

const level = 'Pro';
console.log(user['education' + level]);//рассчетное значение

// const res = prompt('Введи свойство');
// console.log(user[res]);

user['city'] = 'Москва';
console.log(user.city);//МОсква
user.age = 30;
console.log(user.age);
user['age'] = 31;
console.log(user.age);

//сортировка обьекта массивов
const users = [
    {name: 'Вася', age: 30},
    {name: 'Катя', age: 18},
    {name: 'Аня', age: 40},
    {name: 'Петя', age: 25},
]

console.log(users.sort((a, b) => {
    return a.age - b.age;
}));


const users2 = [
    {
        name: 'Вася',
        sername: 'Пупкин',
        age: 30,
        skills: [
            'Программирование',
            'Готовка'
        ], 
    },
    {
        name: 'Катя',
        sername: 'Белова',
        age: 18,
        skills: [
            'Дизайн'
        ], 
    },

]

const users3 = users2.map(user => {
    return {
        fullName: `${user.name} ${user.sername}`,
        skillsNum: user.skills.length
    }
})

console.log(users3)

//свойства обьектов
const user4 = {
    name: 'Вася',
    sername: 'Пупкин',
    age: 24,
    getFullName: function(name, sername) {
        return name + ' ' + sername;
    }
}

const getFullName = function(user4) {
    return user4.name + ' ' + user4.sername;
}

console.log(user4.getFullName('Вася', 'Пупкин'));

const user5 = {
    name: 'Вася',
    sername: 'Пупкин',
    age: 24,
    getFullName: function() {
        console.log(this);
        return this.name + ' ' + this.sername;
    }
}


console.log(user5.getFullName());

//упражнение кошелек
const wallet = {
    balance: 0,
    operations: [],
    encreaceBalance: function(reason, sum) {
        this.balance += sum;
        this.operations.push({
            //enhance objec literals
            // reason : reason, //можем опустить такую запись 
            reason,
            sum,
        });
        return true;
    },
    decreaseBalance: function(reason, sum) {
        if(this.balance - sum > 0) {
            this.balance -= sum;
            this.operations.push({
                reason,
                sum: -sum, //здесь не можем опустить
            })
        } else {
            console.log('Недостаточно баланса');
            return false
        }
    },
    operationsCount: function () {
        return this.operations.length;
    }
}

console.log(wallet.encreaceBalance('Премия', 100));
wallet.decreaseBalance('Оплата налогов', 50);
console.log(wallet);
console.log(wallet.decreaseBalance('Оплата налогов', 60));
console.log(wallet);
console.log(wallet.operationsCount());
console.log(wallet.operations)


   //enhance objec literals еще пример

   const money = 7;

   const newWallet = {
    money,
   }

   console.log(newWallet.money) //7 !!!

//итерирование по обьектам
const cities = {
    msk: {
        lt: 100,
        temp: 25
    },
    spb: {
        lt: 100,
        temp: 20
    }
}

//1 способ определить среднюю температуру
let sumTemp = 0;
let citiesCount = 0;

for (const key in cities) {
    console.log(key); //msk, spb
    citiesCount++;
    sumTemp += cities[key].temp;
}

console.log(sumTemp / citiesCount)

//2 способ определить среднюю температуру
let sumTemp1 = 0;
console.log(Object.keys(cities)); // ['msk', 'spb']
let citiesCount1 = Object.keys(cities).length; 
//Object.keys(cities) делает из ключей обьекта массив

// если хочешь использовать for ... of 
for (const key of Object.keys(cities)) {
    console.log(key); //msk, spb
    sumTemp1 += cities[key].temp;
    
  
}

console.log(sumTemp1 / citiesCount1)

//Деструктуризация

let admin = {
    name: 'Вася',
    age: 40,
    city: 'Moscow'
}

// const {age, name} = admin;
// console.log(name, age)
//rest
const {age, ...userWithoutAge} = admin;
console.log(age)
console.log(userWithoutAge)

const additionalData = {
    skills: [
        'Development', 
        'Design'
    ],
    creditCard: '124353143'
};

//1 вариант добавить 
// admin.skills = additionalData.skills;
// admin.creditCard = additionalData.creditCard;
// console.log(admin)

//2 вариант добавить через spred оператор
admin = {
    ...admin,
    ...additionalData
}

console.log(admin)

//при const мы не можем переприсваивать объекту значение, например через spred как выше,
//но добавть значение через admin.favoriteFilm = 'Titanic' можем


// optional chaining    ?.
const cities2 = {
    msk: {
        temp: {
            celsius: 25
        }
    },
    spb: {
       
    }
}

console.log(cities2.msk.temp.celsius); //25. все ок. но смотри  ниже
// console.log(cities2.spb.temp.celsius); //TypeError: Cannot read properties of undefined (reading 'celsius')
//чтобы избежать можно сделать проверку
const city = 'msk';
if(cities2[city] != undefined && cities2[city].temp != undefined) {
    console.log(cities2[city].temp.celsius);
}

console.log(cities2[city]?.temp?.celsius);



/*
 Сделать объект склад с методами добавления на склад, поиска по складу товара и расчет веса
*/

const warehouse = {
    goods: [],
    findGoodById: function (id) {
        return this.goods.find(el => el.id === id) 
    // for (const good of this.goods) return good.id === id    
    },
    addGood: function (good) {
        const existedGoods = this.findGoodById(good.id);
        if (existedGoods) {
            console.log('Good is existed!')
            return
        }
        console.log('Good is added');
        this.goods.push(good);
    },
    getWeightKg: function () {
        return this.goods.reduce((acc, el) => 
        acc += el.weight?.kg ? el.weight.kg : 0, 
        0);

        // for (const good of this.goods) {
        //     if(good.id === id) {
        //         console.log(good.weight?.kg)
        //     }
        // }
    },
};


/* Товары */
const car = {
id: 1,
weight: {
kg: 1000
},
brand: 'Ford'
}

const chair = {
id: 2,
weight: {
kg: 2
}
}

const paper = {
id: 3,
color: 'red'
}


warehouse.addGood(car);
console.log(warehouse.goods)
warehouse.addGood(car);
// console.log(warehouse.goods[0].id)
console.log(warehouse.findGoodById(1))
// console.log(warehouse.findGoodById(1))
console.log(warehouse.goods)
let w = warehouse.getWeightKg();
console.log(w)

warehouse.addGood(chair);
warehouse.addGood(paper);
w = warehouse.getWeightKg();
console.log(w)



let a = 'a';
a = {a};
console.log(a)


let arr = [
    { name: 'Вася' },
    { name: 'Петя' },
];
console.log(arr.map(e => e.name).reduce((acc, e) => acc += e[0], ''));

console.log(arr.map(e => e.name).reduce((acc, e) => acc += e[0], ''));


let obj = {
    a: {
        b: {
            d: 1
        }
    },
  };
//   console.log(obj.a?.c.d); //error !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  console.log(obj.a?.c?.d); //undefined


  
