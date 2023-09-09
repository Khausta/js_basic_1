'use strict'

let successMessage = 'Успех';

const user = {
    name: 'Вася',
    roles: [],
}

function addRole(user, role) {
    if (role == 'admin') {
        const message = 'Ошибка';
        console.log(message);
        return user;
    }
    user.roles.push(role);
    let successMessage = 'Ура';
    console.log(successMessage); 

    function logRoles() {
        console.log(user.roles);
    }
    logRoles(); 

    return user;
}

console.log(addRole(user, 'dev'));
console.log(successMessage);

// всплытие / поднятие
console.log(b);
addUser();
const a = 3;
console.log(a);
var b = 5;

function addUser() {
    console.log('User is added');
}

// arr1(); //ReferenceError Cannot access 'arr1' before initialization

const arr1 = () => {
    console.log('arr1');
}


addUser();