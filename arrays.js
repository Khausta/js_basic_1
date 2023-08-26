const usersAge = ['2023 - 1994', 20 - '6', 30 - 10, 30 > 20 ? 18 : 0];
console.log(usersAge);
console.log(usersAge[usersAge.length - 1]);

const userNames = new Array ('Jane', 'Peter', ' Marianna');
console.log(userNames);

let userNamesLength = userNames.push('Evgeniy');
console.log(userNames);
console.log(userNamesLength); //it reterns arrays length after push!
userNames.unshift('Svetlana');//adding to the begining of the array
console.log(userNames);

let userNamesPop = userNames.pop();

console.log(userNamesPop);

userNames.shift();
console.log(userNames);

const roles = ['user', 'admin', 'manager'];

let elementIndexInArray = roles.indexOf('manager');
console.log(elementIndexInArray);

let indexOfUnexistedElementInArray = roles.indexOf('superusser');
console.log(indexOfUnexistedElementInArray); //-1 

if(roles.indexOf('manager') >= 0) {
    console.log('Доступ есть');
} else {
    console.log('Доступа нет');
}

console.log(roles.includes('admin'));

if(roles.includes('superuser')) {
    console.log('Доступ есть');
} else {
    console.log('Доступ закрыт');
}


const roles2 = ['driver', 'dantist', 'policeman', 'dancer'];

let res = roles2.slice(2);
let res2 = roles2.slice(2, 3);
let res3 = roles2.slice(-1);
let res4 = roles2.slice(0, -2);
console.log(roles2);
console.log(res);
console.log(res2);
console.log(res3);
console.log(res4);

console.log(roles2);
// let res5 = roles2.splice(2);
// let res5 = roles2.splice(2, 1);
// let res5 = roles2.splice(-2);

console.log(roles2);
// console.log(res5);

let res6 = roles2.reverse();
console.log(roles2);
console.log(res6);


const newRoles = ['artist', 'singer', 'saler'];
let res7 = roles2.concat(newRoles);
console.log(res7);


const url = '/auth/user/login';
const res8 = url.split('/');
console.log(res8);

const res9 = res7.join('-');
console.log(res7);
console.log(res9);