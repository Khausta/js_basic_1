const array = [4, 1, 7, 2, -1, 0, 8, 3];

const filter = (arr, fn) => {
    const newArr = [];
    //меняю const i на let i из-за TypeError: Assignment to constant variable
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr, i)) newArr.push(arr[i]);
    }
    return newArr;
}
 
const check = (arr, i) => {
    if (arr[i] > 0) return true
}

console.log(filter(array, check))

