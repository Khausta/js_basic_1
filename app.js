'use strict'

// addEventListener('load', () => {
//     console.log(document);
// }) если подключение js файла перед body
// console.log(document);
const panel = document.querySelector('.panel');
console.log(panel);
const button = document.querySelector('.button');
const input = document.querySelector('.input');
// const data = {
//     "text": ''
// }
function changed() {
    panel.innerText = input.value;
    input.value = '';
    // document.querySelector('.notification').style.display = 'block';
    document.querySelector('.notification').classList.add('notification_hidden');
    

    setInterval(() => {
        document.querySelector('.notification').classList.remove('notification_hidden');
    }, 2000);

    const textString = JSON.stringify({
        text: input.value
    })
    localStorage.setItem('text', textString);
}
button.addEventListener('click', changed);
input.addEventListener('keydown', (e) => {
    console.log(e.key == 'Enter');
    if(e.key == 'Enter') {
       changed();
    }
})



// const el1 = document.querySelectorAll('.one')[0].childNodes[1];
const el1 = document.querySelector('.one').innerText;
const el2 = document.querySelectorAll('.one')[1].innerText;
console.log(el1);
console.log(el2);
console.log(document.querySelector('.one > span').innerText); //элемент 1
console.log(document.querySelector('#two').innerText);
console.log(document.querySelector('[user-id = "4"').innerText);

localStorage.setItem('tocen', 'LALALALA');
localStorage.setItem('tocen1', 1);
localStorage.setItem('tocen2', true);
localStorage.setItem('tocen3', 'LALALALA');
const key2 = localStorage.getItem('tocen2'); //string
console.log(typeof key2); //string
// localStorage.removeItem('tocen1'); //удвление одного key
// localStorage.clear(); очищает все
console.log(localStorage.getItem('b'));

//JSON имеет два метода parse и stringify
//parse парсит и превращает в обьект
//stringify преаращает в строку

const obj = JSON.parse(' {"a": 1, "b": true, "c": [3, 4, 5]} ');
console.log(obj);
console.log(obj.k);//undefined

const string = JSON.stringify(obj);
console.log(string);

console.log(document.querySelector('.notification.active'));




