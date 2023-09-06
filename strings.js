const userName = '👩‍💻Вася Пупкин';
const userName3 = 'Вася пупкин';
console.log(userName);
console.log(userName[0]);
console.log(userName[0] + userName[1]);
console.log(userName[1]);
console.log(userName[2]);
console.log(userName.charAt(3));
console.log(userName.charAt(4));
console.log(userName.charAt(5));

const userName2 = 'Анна'[0];
console.log(userName2);//A
console.log(userName.length);
console.log(userName2.length);
console.log(userName3.length);

//поиск по строке
console.log(userName.indexOf('П'));
console.log(userName3.indexOf('п'));//первое вхождение п
console.log(userName3.lastIndexOf('п'));//последнее вхождение п
//включает ли символ строка
console.log(userName3.includes('р'));//false
console.log(userName3.includes('н'));//true
//обрезаем строку
console.log(userName3.slice(5));//пупкин
console.log(userName3.slice(5, 8));//пуп

//упражнение
const userName4 = 'Вася aka terminator perdinator пупкин';
console.log(userName4.slice(0, 4) + '' + userName4.slice(userName4.length - 7, userName4.length));

const name = userName4.slice(0, userName4.indexOf(' '));
const sername = userName4.slice(userName4.lastIndexOf(' '), userName4.length);
// console.log(sername);    
console.log(name + '' + sername);

console.log(name.startsWith('В'));
console.log(name.endsWith('я'));

console.log(new String('Валя Валялина').includes('и'));
console.log(name.replace('В', 'Ф'));//заменяет только первое вхождение и не изменяет исходный массив
console.log(name)
const str = 'Валя Валялина';
console.log(str.replaceAll('а', 'ррр'))//замена всех вхождений, но поддержка не всех браузеров. импользуй следующий способ
console.log(str.replace(/а/, 'и'));//толкьо первое вхождение
console.log(str.replace(/а/g, 'и'));// все вхождения

const str2 = '    Валя Валялина      \n';    // \n перенос строки
//если хотим очистить от пробелов
console.log(str2);
console.log(str2.trim());
console.log(str2.trimEnd());
console.log(str2.trimStart());


//задача маскировки карты
const card = '2345234582345532423';
const secretCard = card.slice(card.length - 4, card.length).padStart(card.length - 4, '*');
console.log(secretCard)


let str1 = 'How are you?';
console.log(str1.split(' ')[1])
