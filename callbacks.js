function add(a, b) {
    return a + b;
}

function subtrack(a, b) {
    return a - b;
}

function pow(a, b) {
    return a ** b;
}


//Фунуции высшего порядка

function calculate(a, b, fn) {
    console.log(fn.name);
    const res = fn(a, b);
    return res;
}




let res = calculate(3, 5, add);
console.log(res);

res = calculate(3, 5, subtrack);
console.log(res);

res = calculate(3, 5, pow);
console.log(res);


function power(pow) {
    return function(num) {
        return num ** pow;
    }
}

const powerOfTwo = power(2);
console.log(powerOfTwo(5));

const powerOfThree = power(3);
console.log(powerOfThree(5));

console.log(power(2)(3));


let power2 = (pow) => (num) => num ** pow


console.log(power2(2)(3))
