
const arrayOfDates = ['10-02-2022', 'тест', '11/13/2023', '00/43/2022', '41/12/2023'];
const correctDateArray = [];

//общая функция проверки и формирования корректного массива
function checkDates(dateArray) {
    const myArr = [];
    rusOrEnglishCheck(dateArray, myArr);
    dateValidator(myArr);
}

//функция проверки формата даты
function rusOrEnglishCheck (dateArray, newArray) {
    dateArray.reduce((acc, date) => {
        acc = date.split('');
        const symbol = acc.find(el => el === '-' || el === '/');
        if(symbol == '-') {
            newArray.push(date);
        } else if (symbol == '/') {
            acc = fromEngToRus(date).join('-');
            newArray.push(acc);
        } else {
            return;
        }
    
    }, 0);
}

//вункция перевода английского формата в русский
function fromEngToRus(date) {
    const newFormat = [];
    const day = date.slice(3, 5);
    const month = date.slice(0, 2);
    const year = date.slice(6, date.length);
    newFormat.push(day);
    newFormat.push(month);
    newFormat.push(year);
    return newFormat
}

//функция проверки дат русского формата и переведенных в русский формат
function dateValidator(checkedDateArr) {
    for (const item of checkedDateArr) {
        const checkingItem = item.split('-');
        if(+checkingItem[0] > 0 &&  +checkingItem[0] < 32) {
            if (checkingItem[1] > 0 &&  +checkingItem[1] < 13) {
                if(checkingItem[2] > 1990 &&  +checkingItem[2] < 2024) {
                    correctDateArray.push(item);
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

console.log(correctDateArray);








function checkDay(array) {
   return (0 < +array[0] <= 31) ?   checkMonth(array) : false
}

function checkMonth(array) {
    return (0 < +array[1] <= 12) ? checkYear(array) : false
}

function checkYear(array) {
    (1990 <= +array[2] <= 2023) ? dateArrayCorrect.push(array) : false
}




// const array2001 = ['10-02-2022', 'тест', '11/13/2023', '00/43/2022', '41/12/2023'];
// console.log(array2001);


// console.log(res1);
// let res2 = res1.find(el => el === '-' && el === '/')
// console.log(res2)





// function checkDates1(dateArray) {
    
//     dateArray.reduce((acc, date) => {
        
//         if(date.find(el => el == '-')) {
//             acc = date;
//         } else if (date.find(el => el == '/')) {
//           const newFormat = [];
//           const day = date.slice(3, 5);
//           const month = date.slice(0, 2);
//           const year = date.slice(6, date.length);
//           newFormat.push(day);
//           newFormat.push(month);
//           newFormat.push(year);
//           acc = newFormat.join('-');
       
    
//         } else {
//             return;
//         }
    
//     }, 0);

//     console.log(dateArray);
// }

// checkDates1(res2001);

// const url = '/auth/user/login';
// const res8 = url.split('/');
// console.log(res8);












// console.log(res4);
// console.log(newArr);
// console.log(rusDates);

// for (const dateItem of dateArray) {
//     let symbol = dateItem.split('').find(el => (el == '/') || (el == '-'));
//     if (symbol == '-') {
//         let dayOfMonth = +dateItem.slice(0, 2);
//         let month = +dateItem.slice(3, 5);
//         let year = +dateItem.slice(6, dateItem.length);
//         // console.log(dayOfMonth);
//         // console.log(month);
//         // console.log(year);
//         // checkRusDateFormat (); нужно передать аргументы
//         if (dayOfMonth > 0 && dayOfMonth <= 31) {
//             console.log('ok');
//             if(month > 0 && month <= 12) {
//                 console.log('ok');
//                 if(year >= 1990 && year <= 2023) { //так статьи не могут быть опубликованы будущей датой
//                     dateArrayCorrect.push(dateItem);
//                     // console.log(dateArrayCorrect);
//                 } else {
//                     console.log('year is not validated')
//                 }
//             } else {
//                 console.log('month is not validated')
//             }
//         } else {
//             console.log('day is not validated')
//         }
//     }

//     if (symbol == '/') {
//         console.log('English format');
//         let dayOfMonth = +dateItem.slice(3, 5);
//         console.log(dayOfMonth);
//         let month = +dateItem.slice(0, 2);
//         console.log(month);
//         let year = +dateItem.slice(6, dateItem.length);
//         console.log(year);
//         if (dayOfMonth > 0 && dayOfMonth <= 31) {
//             console.log('ok');
//             if(month > 0 && month <= 12) {
//                 console.log('ok');
//                 if(year >= 1990 && year <= 2023) { //так статьи не могут быть опубликованы будущей датой
//                     dateArrayCorrect.push(dateItem);
//                     console.log(dateArrayCorrect);
//                 } else {
//                     console.log('year is not validated')
//                 }
//             } else {
//                 console.log('month is not validated')
//             }
//         } else {
//             console.log('day is not validated')
//         }
        
        
//     }
//     console.log(symbol);
// }


// let res3 = dateArray.map(date => checkDate(date));
// const res3 = dateArray.reduce((acc, date) => {
//     acc = date;
//     return checkDate(acc);
// }, 0);
// console.log(res3);

// function checkDate(dateItem) {
//     const symbol = dateItem.split('').find(el => (el == '/') || (el == '-'));
//     console.log(symbol);
//     if (symbol == '-') {
//        checkRusDateFormat(dateItem);
//     }

//     if (symbol == '/') {
//         checkEnglishDateFormat(dateItem);
//         // console.log('English format');
//         // let dayOfMonth = +dateItem.slice(3, 5);
//         // console.log(dayOfMonth);
//         // let month = +dateItem.slice(0, 2);
//         // console.log(month);
//         // let year = +dateItem.slice(6, dateItem.length);
//         // console.log(year);
//         // if (dayOfMonth > 0 && dayOfMonth <= 31) {
//         //     console.log('ok');
//         //     if(month > 0 && month <= 12) {
//         //         console.log('ok');
//         //         if(year >= 1990 && year <= 2023) { //так как статьи не могут быть опубликованы будущей датой
//         //             dateArrayCorrect.push(dateItem);
//         //             console.log(dateArrayCorrect);
//         //         } else {
//         //             console.log('year is not validated')
//         //         }
//         //     } else {
//         //         console.log('month is not validated')
//         //     }
//         // } else {
//         //     console.log('day is not validated')
//         // }
        
        
//     }
//     console.log(symbol);
// }
    
// console.log(dateArrayCorrect);



// function checkRusDateFormat (dateItem) { //передай аргументы, сделай параметры
//     // const dayOfMonth = +dateItem.slice(0, 2),
//     //       month = +dateItem.slice(3, 5), 
//     //       year = +dateItem.slice(6, dateItem.length);
//     const [dayOfMonth, month, year] = [
//         +dateItem.slice(0, 2),
//         +dateItem.slice(3, 5),
//         +dateItem.slice(6, dateItem.length),
//     ];

//     const rusDate = dateItem.split('-');
//     checkDay(rusDate);
//     console.log(rusDate);


//     // if (dayOfMonth > 0 && dayOfMonth <= 31) {
//     //     console.log('ok');
//     //     if(month > 0 && month <= 12) {
//     //         console.log('ok');
//     //         if(year >= 1990 && year <= 2023) { //так статьи не могут быть опубликованы будущей датой
//     //             dateArrayCorrect.push(dateItem);
//     //             // console.log(dateArrayCorrect);
//     //         } else {
//     //             console.log('year is not validated')
//     //         }
//     //     } else {
//     //         console.log('month is not validated')
//     //     }
//     // } else {
//     //     console.log('day is not validated')
//     // }
// }

// function checkEnglishDateFormat(dateItem) {
//     // console.log('English format');
//     const dayOfMonth = +dateItem.slice(3, 5);
//     // console.log(dayOfMonth);
//     const month = +dateItem.slice(0, 2);
//     // console.log(month);
//     const year = +dateItem.slice(6, dateItem.length);
//     // console.log(year);
//     if (dayOfMonth > 0 && dayOfMonth <= 31) {
//         // console.log('ok');
//         if(month > 0 && month <= 12) {
//             // console.log('ok');
//             if(year >= 1990 && year <= 2023) { //так как статьи не могут быть опубликованы будущей датой
//                 let correctDateFormat = [];
//                 correctDateFormat.push(dayOfMonth);
//                 correctDateFormat.push(month);
//                 correctDateFormat.push(year);
//                 let newCorrectDateFormat = correctDateFormat.join('-');
//                 console.log(newCorrectDateFormat);
//                 dateArrayCorrect.push(newCorrectDateFormat);
//             } else {
//                 return;
//             }
//         } else {
//             return;
//         }
//     } else {
//         return;
//     }
// }
