"use strict";
// primitive types
let firstName = "Mohammad";
let lastName;
lastName = "Kamran";
let isAdmin;
isAdmin = true;
let age = 30;
age = 31;
let color = ["red", "blue"];
let nums = ["1", "2", 10];
let car = [];
car.push("bmw");
car.push("toyota");
console.log(car);
let nums2 = [];
nums2.push(1);
nums2.push("2");
console.log(nums2);
let userId = null;
let personalCode;
let isLike = undefined;
// Array Type
let users = [];
users.push("ali");
// union type
let numbers = [];
numbers.push(1);
numbers.push("2");
// Function Type
let voidFnc = () => {
    console.log("without return");
};
let stringFnc = () => {
    return "return string";
};
let numberFnc = () => {
    return 1;
};
