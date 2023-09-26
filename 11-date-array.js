
const arrayOfDates = ['10-02-2022', 'тест', '11/13/2023', '00/43/2022', '41/12/2023', '10/28/2000', '04/31/2020', '10-12-2020', '31-10-0000', '31-04-1999', '31-04-2023', '04/31/2023', '07-07-2022'];


//общая функция проверки и формирования корректного массива
function checkDates(dateArray) {
    const inputArr = dateArray.map(item => transformDateStringToArray(item));
    return validator(inputArr);
}

function transformDateStringToArray(dateString) {
    let [month, day, year] = dateString.split('/');

    if (!year) {
        [day, month, year] = dateString.split('-');
    }

    if(!year || isNaN(day) || isNaN(month) || isNaN(year)) {
        return null
    }

    return [day, month, year];
}


function validator(array) {
    const newArray = [];
    for (const date of array) {
        if  (date === null) continue;

        let [day, month, year] = date;

        if(Number(month) < 1 || Number(month) > 12) continue;

        if(Number(day) < 1 || Number(day) > 31) continue;

        if(Number(month) === 4 && Number(day) > 30) continue;
        
        if(Number(year) < 1 || Number(year) > 2023) continue;

        newArray.push([day, month, year].join('-'));
    } 
    return newArray;
}

checkDates(arrayOfDates);
console.log(checkDates(arrayOfDates));

const arrayOfDates2 = ['31-04-2023', '04/31/2023', '30-04-2023', '04/30/2023'];
console.log(checkDates(arrayOfDates2));





