const hasLicense = true;
const age = 18;
const isDrunk = false;
// console.log((hasLicense && age >= 18 && (isDrunk === false)) ? 'может' : 'не может');

let canDrive = (
    hasLicense && 
    age >= 18 && 
    (isDrunk === false)) ?
     'может' : 
     'не может';
console.log(canDrive);