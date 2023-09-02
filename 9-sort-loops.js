let arr1 = [1, 40, -5, 10, 0];
let arr2 = [100, 110, -5, -4, 2];

function sortArr(arr, method = 'asc') {
    method === 'desc' ? decreaseSort(arr) : increaseSort(arr);
}

function increaseSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                [arr[j], arr[i]] = [arr[i], arr[j]];
            }
        }
    }
    console.log(arr);
}

function decreaseSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if(arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    console.log(arr);
}

sortArr(arr1, 'desc');
sortArr(arr2, 'desc');
sortArr(arr1, 'asc');
sortArr(arr2);





   
