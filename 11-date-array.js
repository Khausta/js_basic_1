
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
        }
        //Проверяю валиден ли месяц
        if (Number(month) < 1 || Number(month) > 12) {
            continue;
        }
        // Проверяю валидна ли дата.
        if (Number(day) < 0 || Number(day) > 31) {
            continue;
        } else {
            //проверка месяцев, в которых 30 дней максимум
            const is30daysInMonth = [4, 6, 9, 11].find(el => el === Number(month));
            if (is30daysInMonth && Number(day) > 30) {
                continue;
            }  
            //проверка февраля
            if (Number(month) === 2) {
                //если высокосный год
                if (!(Number(year) % 4)  && Number(day) > 29) {
                    continue;
                //если НЕвысокосный год
                } else if ((Number(year) % 4) && Number(day) > 28) {
                    continue;
                } 
            } 
        }
        
        newArray.push([day, month, year].join('-'));    
    } 

    return newArray;
}

//проверки
checkDates(arrayOfDates);
console.log(checkDates(arrayOfDates));
const arrayOfDates2 = ['31-04-2023', '04/31/2023', '30-04-2023', '04/30/2023'];
console.log(checkDates(arrayOfDates2));
//высокосные года
const arrayOfDates3 = ['28-02-1988', '29-02-1988', '30-02-1988', '29-02-1999', '28-02-1999'];
console.log(checkDates(arrayOfDates3));
// месяца в которых маусимуим 30 дней
const arrayOfDates4 = ['32-05-2023', '31-05-2023', '31-06-2023', '30-06-2023', '31-10-2023', '31-09-2023', '30-09-2023', '31-08-2022', '06/31/2020', '06/30/2020'];
console.log(checkDates(arrayOfDates4));






