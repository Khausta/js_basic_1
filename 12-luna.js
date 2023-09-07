const card = '4561-2612-1234-5646';//false
const card1 = '4561-2612-1234-5646-122';//true
const card2 = '4561-2612-1234-5646-nm';//false


function cardValidator(cardNumber) {
    let clearCard = cardNumber.replaceAll('-','');
    if (+clearCard) {
        let i;
        let arr = [...clearCard];
        arr.length % 2 === 0 ? i = 0 : i = 1
        let sum = 0;
            
        for (i; i < arr.length; i += 2) {
            const doubling = arr[i] * 2;
            if(doubling > 9) {
                arr[i] = doubling - 9;
            } 
        }
    
        arr.reduce((acc, item) => {
            acc = +item;
            return sum += acc;
        }, 0);

        return sum % 10 === 0 ? true : false

    } else {
        return false
    }
}

console.log(cardValidator(card));
console.log(cardValidator(card1));
console.log(cardValidator(card2));


