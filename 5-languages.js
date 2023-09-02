const language = prompt('Enter your language', '');
switch(language) {
    case('en'):
        console.log('Good afternoon!');
        break;
    case('de'):
        console.log('Guten Tag!');
        break;
    case('ru'):
        console.log('Добрый день');
        break;
    case null:
        console.log('Вы отменили ввод');
        break;
    default:
        console.log('Вы можете ввести ru, en или de');
}