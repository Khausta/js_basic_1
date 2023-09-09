 'use strict'

//без strict mode
// a = 3;
// console.log(a); //3

//с strict mode всегда нужно объявлять переменную через ключевое слово


 const user = {
    name: 'Anna',
    id: 1,
 };

//  user.name = 'Mariya'
//  console.log(user);

//  const newUser = user;
//  user.name = 'NewUser';
//  console.log(user);// 'NewUser'
//  console.log(newUser);// 'NewUser'

 //чтобы скопировать один объект и изменять значения независимо
//1 var
const newUser = Object.assign({}, user);
console.log(newUser)
newUser.name = 'Mariya'
console.log(user); //anna
console.log(newUser); //mariya

//2 var
const newUser2 = {
    ...user
};
newUser2.name = 'Mariya'
console.log(user); //anna
console.log(newUser2); //mariya

const user2 = {
    name: 'Anna',
    id: 1,
    roles: ['Admin'],
};

console.log(user2);
const newUser3 = {
    ...user2
};
newUser3.roles.push('Devops');

console.log(user2);
console.log(newUser3); 

//scope chain



