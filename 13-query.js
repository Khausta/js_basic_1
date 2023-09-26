
const obj = {
    search: 'Вася',
    take: 10,
    likes: 380,
    money: '700 $',
    profession: 'pilot',
}

function getQueryString(queryObject) {
    const arr = Object.keys(queryObject);
    return arr.reduce((acc, el, index ) => {
        acc += el + '=' + obj[el];
        if (index !== arr.length - 1) acc += '&';
        return acc.replaceAll(' ', '_');
    }, '');  
}

console.log(getQueryString(obj)) 