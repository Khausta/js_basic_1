let arr1 = [1, 40, -5, 10, 0];
let arr2 = [100, 110, -5, -4, 2];


function increaseSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                const newArr = [arr[i], arr[j]];
                [arr[j], arr[i]] = newArr;
            }
        }
    }
    console.log(arr);
}

function decreaseSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if(arr[i] > arr[j]) {
                const newArr = [arr[j], arr[i]];
                [arr[i], arr[j]] = newArr;
            }
        }
    }
    console.log(arr);
}

increaseSort(arr1);
increaseSort(arr2);

decreaseSort(arr1);
decreaseSort(arr2);






   
