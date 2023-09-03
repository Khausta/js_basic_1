let arr1 = [1, 40, -5, 10, 0];
let arr2 = [100, 110, -5, -4, 2];

function sortArr(arr, method = 'asc') {
    if (method !== 'asc' && method !== 'desc') {
        console.log('Введен неверный метод сортировки');
        return;
    } else {
        for (let i = 1; i < arr.length; i++) {
            for (let j = 0; j < i; j++) {
                switch (method) {
                    case 'asc':
                        if (arr[i] < arr[j]) [arr[j], arr[i]] = [arr[i], arr[j]];
                        break;
                    case 'desc': 
                        if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
                        break;
                }
            }
        }
        console.log(arr);
    }
}

sortArr(arr1, 'desc');
sortArr(arr2, 'desc');
sortArr(arr1, 'asc');
sortArr(arr2);
sortArr(arr2, 'sadjf');




   
