const tasks = ['Task 1', 'Task 2', 'Task 3'];

let addTask = task => tasks.push(task);

function removeTask(task) {
    const taskIndex = tasks.indexOf(task);
    if (taskIndex === -1) {
        return;
    }
    return tasks.splice(taskIndex, 1);
}

function transferTaskToTheBeginning(task) {
    const serchedAndRemovedTask = removeTask(task);
   if(serchedAndRemovedTask) {
        tasks.unshift(task);
   }
}
// removeTask('Task 1');
// console.log(removeTask('Task 1'));
transferTaskToTheBeginning('Task 3');
console.log(tasks);



//Деструктуризация

const userData = ['Anton', 19, 'Moscow'];

function getData() {
    return userData;
}

console.log(getData());

// const name = userData[0];
// const age = userData[1];
// const city = userData[2];

// const name = getData()[0];
// const age = getData()[1];
// const city = getData()[2];

// const [name, age, city] = getData();
const [name, _, city] = userData;

console.log(name);
// console.log(age);
console.log(city);

//REST оператор
const numbers = [1, 2, 3, 4, 5, 6, 7];
const [one, two, ...others] = numbers;

console.log(one, two);
console.log(others);



// Дан произвольный url вида - https://purpleschool.ru/course/javascript
// Нужно сделать функцию, которая выводит в консоль:
// Протокол (https)
// Доменное имя (purpleschool.ru)
// Путь внутри сайта (/course/javascript)

const url = 'https://purpleschool.ru/course/javascript';
// let urlArr = url.split('/');
// console.log(urlArr);


function urlPath(url) {
    let [protocol, , domen, ...path] = url.split('/');
    if (protocol === 'http:' || protocol === 'https:') {
        if(!domen.includes('.')) {
            return; 
        }
        console.log(`${protocol.split(':')[0]}`);
        console.log(domen);
        console.log(`/${path.join('/')}`);
    }
}

// function getProtocol() {
//     // console.log( protocol.slice(0, -1) );
//     console.log(`${protocol.split(':')[0]}`);
// }

// function getDomen () {
//     console.log(domen);
// }

// function getPath() {
//     console.log(`/${path.join('/')}`);
// }

urlPath(url);








