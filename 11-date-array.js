
const arrayOfDates = ['10-02-2022', 'тест', '11/13/2023', '00/43/2022', '41/12/2023', '10/28/2000'];
const correctDateArray = [];

//общая функция проверки и формирования корректного массива
function checkDates(dateArray) {
    const myArr = [];
    const inputArr = dateArray.map(item => item.split(''));
    rusOrEnglishCheck(inputArr, myArr);
    dateValidator(myArr);
    console.log(correctDateArray);
}

//функция проверки формата даты
function rusOrEnglishCheck (dateArray, newArray) {
    dateArray.reduce((acc, date) => {
        acc = date;
        const symbol = acc.find(el => el === '-' || el === '/');
        if(symbol == '-') {
            acc = date.join('');
            newArray.push(acc);
        } else if (symbol == '/') {
            acc = fromEngToRus(date);
            newArray.push(acc);
        } else {
            return;
        }
    }, 0);
}

//функция перевода английского формата в русский
function fromEngToRus(date) {
    date = date.join('').split('/');
    let day = date[1];
    let month = date[0];
    let year = date[2];
    date = [day, month, year].join('-');
    return date;
}

//функция проверки дат русского формата и переведенных в русский формат
function dateValidator(checkedDateArr) {
    for (const date of checkedDateArr) {
        const item = date.split('-');
        if(+item[0] > 0 &&  +item[0] < 32) {
            if (+item[1] > 0 &&  +item[1] < 13) {
                if(+item[2] > 1990 &&  +item[2] < 2024) {
                    correctDateArray.push(date);
                } else {
                    continue;
                }
            } else {
                continue;
            }
        } else {
            continue;
        }
    }
}

checkDates(arrayOfDates);





