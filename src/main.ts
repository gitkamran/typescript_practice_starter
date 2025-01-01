let firstname: string = "Mohammad";
let lastname: string = "Kamran";

console.log(firstname + " " + lastname);
////////////
let a: number = 16;
let b: string = "2";
let c: number = 8;

console.log(a / c);
console.log(a - c);
//////////////////
function srtingOrNumber<T extends number | string, U extends number | string>(
  value1: T,
  value2: U
): string | number {
  return (value1 as any) + (value2 as any);
}

console.log(typeof srtingOrNumber(5, 2), srtingOrNumber(5, 2));
console.log(srtingOrNumber(firstname, lastname));
console.log(srtingOrNumber(2, 5));
////////////
function srtingGlobalValue<T extends string, U extends string>(
  value1: T,
  value2: U
): string {
  return value1 + value2;
}

console.log(srtingGlobalValue("a", "2"));
////////////////////
function stringValue(value1: string, value2: string): string {
  return value1 + " " + value2;
}

console.log(
  typeof stringValue(firstname, lastname),
  stringValue(firstname, lastname)
);
////////////
function globalValue<T, U>(
  value1: T,
  value2: U
): string {
  return (value1 as number) + (value2 as string);
}

console.log(globalValue(8, 4));
////////////////////
