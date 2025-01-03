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

// array type

const tasks: string[] = ["one"];

tasks.push("two", "tree");

tasks.map((task) => {
  console.log(task);
});

let colors = ["red", "green", "blue", 999];
//or
let colors2: (string | number)[] = ["red", "green", "blue", 999];

colors2.push("yellow", 333);

// tuple

let myArray: [string, number] = ["john", 10];

myArray.push("10"); //bug in ts

// object

const person: {
  name: string;
  age: number;
} = {
  name: "john",
  age: 30,
};

console.log(person.name, person.age);

// functions

function myFunction(name: string): string {
  return "hello " + name;
}
console.log(myFunction("john"));

function myFunction2(name?: string): void {
  return console.log("hello " + name);
}

myFunction2();

const myFunction3 = (...names: (string | number)[]): (string | number)[] => {
  return names.map((name) => name);
};

const myFunction4 = (...names: string[] | number[]): (string | number)[] => {
  return names.map((name) => name);
};


const names = myFunction3("3", "2", 1);
const names2 = myFunction4("3", "2");
const names3 = myFunction4(3, 2);

console.log(names);
console.log(names2);
console.log(names3);
