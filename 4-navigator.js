'use strict';
const positionLat = 2;
const positionLong = 3;

const addressLat = 7;
const addressLong = 5;

let distance = Math.sqrt(
    Math.pow((addressLat - positionLat), 2)
    + Math.pow((addressLong - positionLong), 2)
    );
console.log(distance); //5.385164807134504
