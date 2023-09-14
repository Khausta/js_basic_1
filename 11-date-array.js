
const arrayOfDates = ['10-02-2022', 'тест', '11/13/2023', '00/43/2022', '41/12/2023', '10/28/2000'];
const correctDateArray = [];

//общая функция проверки и формирования корректного массива
function checkDates(dateArray) {
    const inputArr = dateArray.map(item => transformDateStringToArray(item));
    console.log(inputArr.length);
    
    const correctDates = dateValidator(inputArr);
    console.log(correctDates);
   
}


function transformDateStringToArray(dateString) {
    let [month, day, year] = dateString.split('/');
    console.log([month, day, year]);

    if (!year) {
       [day, month, year] = dateString.split('-');
       console.log([day, month, year]);
    }

    if(!year || isNaN(day) || isNaN(month) || isNaN(year)) {
        return null
    }

    return [day, month, year];  
}

//функция валидации
function dateValidator(dateArray) {
    console.log(dateArray)
    const validatedDatesArray = [];

    for (const date of dateArray) {
        console.log(date)
        if(date === null) continue;
        const [day, month, year] = date;
        console.log(day, month, year);

        if(month < 1 || month > 12) {
            console.log(month)
            console.log(month < 1 || month > 12)
            return
        } else if (day < 1|| day > 31) {
            return  
        } else if (month === 4 && day > 28) {
            return
        } else if (year < 1) {
            return
        }
        console.log([day, month, year].join('-'));
        validatedDatesArray.push([day, month, year].join('-'));
    }
    console.log(validatedDatesArray);
    return validatedDatesArray;
}

checkDates(arrayOfDates);





