const inputPassword = 'cratorpurator';
const outputPassword = '1f3rotaruprotarcfosape234';
// const inputPassword = 'cra';
// const outputPassword = '1f3rotaruprotarcfosape234';
// const inputPassword = 'lalalend';
// const outputPassword = '1f3dnelalalfosape234';

function cripto(password) {
    if (password.length > 3) {
        const passwordArr = password.split('');
        const firstPartOfpassword = passwordArr.slice(0, 3);
        const reverso1 = firstPartOfpassword.reverse();
        const secondPartOfPassword = passwordArr.slice(3, password.length);
        const reverso2 = secondPartOfPassword.reverse();
        const secret1 = ['1f3']; //3 символа
        const secret2 = ['fosape234'];//9 символов
        const newArr = secret1.concat(reverso2, reverso1, secret2);
        const newPassword = newArr.join('');
        console.log(newPassword);
    } else {
        console.log('Пароль должен содержать более 3х символов');
    }
}

function check(password1, password2) {
    let rootArr = password2.split('').slice(3, password2.length - 9);
    let firstPart = rootArr.slice(rootArr.length - 3).reverse();
    let secondPart = rootArr.slice(0, rootArr.length - 3).reverse();
    let finalPassword = firstPart.concat(secondPart).join('');
    console.log(password1 === finalPassword);
}

cripto(inputPassword);
check(inputPassword, outputPassword);