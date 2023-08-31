const dateArray = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

// let newDate = dateArray[0].split('').find(el => el == 1);
// console.log(newDate);

const dateArrayCorrect = [];

let rusDates = [];

let res = dateArray.map(date => date.split(''));
let res1 = res.map(date => date.find(el => {
    (el === '-') || (el === '/')
    }) 
);


console.log(res);
console.log(rusDates);

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
let res3 = dateArray.reduce((acc, date) => {
    acc = date;
    return checkDate(acc);
}, 0);
console.log(res3);

function checkDate(dateItem) {
    let symbol = dateItem.split('').find(el => (el == '/') || (el == '-'));
    console.log(symbol);
    if (symbol == '-') {
       checkRusDateFormat(dateItem);
    }

    if (symbol == '/') {
        checkEnglishDateFormat(dateItem);
        // console.log('English format');
        // let dayOfMonth = +dateItem.slice(3, 5);
        // console.log(dayOfMonth);
        // let month = +dateItem.slice(0, 2);
        // console.log(month);
        // let year = +dateItem.slice(6, dateItem.length);
        // console.log(year);
        // if (dayOfMonth > 0 && dayOfMonth <= 31) {
        //     console.log('ok');
        //     if(month > 0 && month <= 12) {
        //         console.log('ok');
        //         if(year >= 1990 && year <= 2023) { //так как статьи не могут быть опубликованы будущей датой
        //             dateArrayCorrect.push(dateItem);
        //             console.log(dateArrayCorrect);
        //         } else {
        //             console.log('year is not validated')
        //         }
        //     } else {
        //         console.log('month is not validated')
        //     }
        // } else {
        //     console.log('day is not validated')
        // }
        
        
    }
    console.log(symbol);
}
    
console.log(dateArrayCorrect);


function checkRusDateFormat (dateItem) { //передай аргументы, сделай параметры
    let dayOfMonth = +dateItem.slice(0, 2);
        console.log(dayOfMonth);
        let month = +dateItem.slice(3, 5);
        console.log(month);
        let year = +dateItem.slice(6, dateItem.length);
        console.log(year);
    if (dayOfMonth > 0 && dayOfMonth <= 31) {
        console.log('ok');
        if(month > 0 && month <= 12) {
            console.log('ok');
            if(year >= 1990 && year <= 2023) { //так статьи не могут быть опубликованы будущей датой
                dateArrayCorrect.push(dateItem);
                // console.log(dateArrayCorrect);
            } else {
                console.log('year is not validated')
            }
        } else {
            console.log('month is not validated')
        }
    } else {
        console.log('day is not validated')
    }
}

function checkEnglishDateFormat(dateItem) {
    // console.log('English format');
    let dayOfMonth = +dateItem.slice(3, 5);
    // console.log(dayOfMonth);
    let month = +dateItem.slice(0, 2);
    // console.log(month);
    let year = +dateItem.slice(6, dateItem.length);
    // console.log(year);
    if (dayOfMonth > 0 && dayOfMonth <= 31) {
        // console.log('ok');
        if(month > 0 && month <= 12) {
            // console.log('ok');
            if(year >= 1990 && year <= 2023) { //так как статьи не могут быть опубликованы будущей датой
                let correctDateFormat = [];
                correctDateFormat.push(dayOfMonth);
                correctDateFormat.push(month);
                correctDateFormat.push(year);
                let newCorrectDateFormat = correctDateFormat.join('-');
                console.log(newCorrectDateFormat);
                dateArrayCorrect.push(newCorrectDateFormat);

            } else {
                console.log('year is not validated')
            }
        } else {
            console.log('month is not validated')
        }
    } else {
        console.log('day is not validated')
    }
}
