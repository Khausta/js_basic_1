
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

        //Проверяю валиден ли год
        if (Number(year) < 1 || Number(year) > 2023) {
            continue;
        //Проверяю валиден ли месяц
        } else if (Number(month) < 1 || Number(month) > 12) {
            continue;
        // Проверяю валидна ли дата.
        }  else {
            //проверка месяцов в которых 30 дней
            if ((Number(month) === 4 || 
                Number(month) === 6 ||
                Number(month) === 9 ||
                Number(month) === 11) && Number(day) > 30) {
                continue;
            //проверка высокосного года и количества дней в фервале
            } else if (!(Number(year) % 4) && Number(month) === 2 && Number(day) > 29) {
                continue;
            //проверка НЕвысокосного года и количества дней в фервале
            } else if ((Number(year) % 4) && Number(month) === 2 && Number(day) > 28) {
                continue;
            } else {
                newArray.push([day, month, year].join('-'));
            }
        }
    } 
    return newArray;
}

checkDates(arrayOfDates);
console.log(checkDates(arrayOfDates));

const arrayOfDates2 = ['31-04-2023', '04/31/2023', '30-04-2023', '04/30/2023'];
console.log(checkDates(arrayOfDates2));
//высокосные года
const arrayOfDates3 = ['28-02-1988', '30-02-1988', '04/31/2023', '30-04-2023', '04/30/2023'];
console.log(checkDates(arrayOfDates3));





