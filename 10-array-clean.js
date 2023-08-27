let array = [4 ,1, 7, 2, -1, 0, 8, 3];

function getArr (arr, fn, n) {
    return fn(arr, n);

}

function arrFilter(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < n) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

console.log(getArr(array, arrFilter, 2));