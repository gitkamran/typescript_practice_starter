"use strict";
let firstname = "Mohammad";
let lastname = "Kamran";
console.log(firstname + " " + lastname);
////////////
let a = 16;
let b = "2";
let c = 8;
console.log(a / c);
console.log(a - c);
//////////////////
function srtingOrNumber(value1, value2) {
    return value1 + value2;
}
console.log(typeof srtingOrNumber(5, 2), srtingOrNumber(5, 2));
console.log(srtingOrNumber(firstname, lastname));
console.log(srtingOrNumber(2, 5));
////////////
function srtingGlobalValue(value1, value2) {
    return value1 + value2;
}
console.log(srtingGlobalValue("a", "2"));
////////////////////
function stringValue(value1, value2) {
    return value1 + " " + value2;
}
console.log(typeof stringValue(firstname, lastname), stringValue(firstname, lastname));
////////////
function globalValue(value1, value2) {
    return value1 + value2;
}
console.log(globalValue(8, 4));
////////////////////
