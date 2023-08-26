

// for (let i = 1; i < 10; i++) {
//     console.log(`Ваш баланс ${i}$`);
// }

// const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];

// for (let y = 0; y < tasks.length; y++) {
//     if (tasks[y] === 'Task 2') continue;
//     console.log(tasks[y]);
// }

// for (let y = 0; y < tasks.length; y++) {
//     if (tasks[y] === 'Task 2') break;
//     console.log(tasks[y]);
// }

const arr = ['!', 'JS', 'love', 'I'];
let newArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
}

console.log(newArr.join(' '));

// for (let i = 1; i < 5; i++) {
//     console.log(`Loop 1 -- ${i}`);
//     for (let y = 1; y < 3; y++) {
//         console.log(`Loop 2 -- ${y}`);
//     }
// }


const tasks2 = [[1, 'Task1'], [2, 'Task 2']];
for (let i = 0; i < tasks2.length; i++) {
    // console.log(tasks2[i]);
    for (let y = 0; y < tasks2[i].length; y++) {
        console.log(tasks2[i][y]);
    }
}

let i = 0;
while (i < 5) {
    console.log(tasks2[i]);
    i++;
}

for (let el of arr) {
    console.log(el);
}

for (let index in arr) {
    console.log(arr[index]);
    console.log(index);
}

//Operations

const operations = [1000, -7000, 300, -500, 10000];
let balance = 100;

function totalBalance () {
    for (let i of operations) {
        balance += i;
    }
    console.log(balance);
}

function minusBalance() {
  
    let isOk = true;
    for (let i = 0; i < operations.length; i++) {
        balance += operations[i];
        if (balance < 0) {
            isOk = false;
            break;
        }
    }
    console.log(isOk);
}

function middleValues () {
    let income = 0;
    let outcome = 0;
    let incomeDays = 0;
    let outcomeDays = 0;
    for (let index in operations) {
        if (operations[index] > 0) {
            income += operations[index];
            incomeDays ++;
            console.log(operations[index]);
            console.log(incomeDays);
        } else {
            outcome += operations[index];
            outcomeDays ++;
        }
    }

    console.log( income / incomeDays);
    console.log(outcome / outcomeDays * (-1));

}

totalBalance();
minusBalance();
middleValues();