const card = '4561-2612-1234-5646';//false
const card1 = '4561-2612-1234-5646-122';//true
const card2 = '4561-2612-1234-5646-nm';//false

function cardValidator(cardNumber) {
    const clearCard = cardNumber.replaceAll('-','');
    if (Number(clearCard)) {
        const arr = [...clearCard];
        let sum = 0;
            
        for (let i = arr.length % 2; i < arr.length; i += 2) {
            const doubling = arr[i] * 2;
            if(doubling > 9) {
                arr[i] = doubling - 9;
            } 
        }
    
        arr.reduce((acc, item) => {
            acc = +item;
            return sum += acc;
        }, 0);

        return sum % 10 === 0

    } else {
        return false
    }
}

console.log(cardValidator(card));
console.log(cardValidator(card1));
console.log(cardValidator(card2));


