// primitive types

let firstName = "Mohammad";

let lastName: string;
lastName = "Kamran";

let isAdmin: boolean;
isAdmin = true;

let age = 30;
age = 31;

let color = ["red", "blue"];

let nums = ["1", "2", 10];

let car: string[] = [];
car.push("bmw");
car.push("toyota");
console.log(car);

let nums2: (string | number)[] = [];
nums2.push(1);
nums2.push("2");
console.log(nums2);

let userId = null;
let personalCode: null;

let isLike = undefined;

// Array Type
let users: string[] = [];
users.push("ali");

// union type
let numbers: (string | number)[] = [];
numbers.push(1);
numbers.push("2");

// Function Type

let voidFnc = (): void => {
  console.log("without return");
};

let stringFnc = (): string => {
  return "return string";
};
let numberFnc = (): number => {
  return 1;
};
