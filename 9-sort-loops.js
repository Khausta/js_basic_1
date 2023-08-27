let arr1 = [1, 40, -5, 10, 0];
let arr2 = [100, 110, -5, -4, 2];


function increaseSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                let lessNumber = arr[i];
                let moreNumber = arr[j];
                arr[i] = moreNumber;
                arr[j] = lessNumber;
            }
        }
    }
    console.log(arr);
}

function decreaseSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if(arr[i] > arr[j]) {
                let moreNumber = arr[i];
                let lessNumber = arr[j];
                arr[i] = lessNumber;
                arr[j] = moreNumber;
            }
        }
    }
    console.log(arr);
}

increaseSort(arr1);
increaseSort(arr2);

decreaseSort(arr1);
decreaseSort(arr2);






   
