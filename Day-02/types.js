let myName = "Reem";
let number = 42;
let boolean = true;
let nullValue = null;
let undefinedValue;

let student = { name: "Sara", age: 30 };
let myArray = [1, 2, 3];

console.log(`name: "${myName}" → ${typeof myName}`);
console.log(`null is ${typeof null} / array is ${typeof []}`);

console.log(`Is array? ${Array.isArray(myArray)}`);

let stringNumber = "42";
let convertedNumber = Number(stringNumber);
console.log(`${convertedNumber} → ${typeof convertedNumber}`);

let convertedString = String(number);
console.log(`${convertedString} → ${typeof convertedString}`);

let result = Number("Hello");
console.log(`${result} → ${typeof result}`);

let parseIntResult = Number.parseInt("42px");
console.log(`${parseIntResult} → ${typeof parseIntResult}`);

let numberResult = Number("42px");
console.log(`${numberResult} → ${typeof numberResult}`);

console.log("/////////////////////////////////////////");
// Loop over an array holding all 8 falsy values plus [], {}, "0", and "hello
let falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];
falsyValues.push([], {}, "0", "hello");

falsyValues.forEach((value) => {
  console.log(`${value} → ${Boolean(value)}`);
});
console.log("/////////////////////////////////////////");

let zero = 0;

console.log(`${zero || "fallback"}`); // "fallback"
console.log(`${zero ?? "fallback"}`); // 0

// I want the ?? operator when 0 is a valid value because it will return 0 instead of the fallback
