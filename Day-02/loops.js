for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

const tracks = [
  "JavaScript Basics",
  "HTML & CSS",
  "React",
  "Node.js",
  "Python",
  "SQL",
  "Git & GitHub",
];
let position = 1;
for (const track of tracks) {
  console.log(`${position}. ${track}`);
  position++;
}

const student = {
  name: "Reem",
  age: 25,
  track: "JavaScript",
  score: 92,
  attendance: 90,
  city: "Cairo",
};

for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}

let value = 100;
do {
  console.log(value);
  value /= 2;
} while (value >= 1);

const scores = [45, 72, 88, 30, 96, 60, 99];
for (const score of scores) {
  if (score < 50) {
    console.log(`${score} → skipped (below 50)`);
    continue;
  }

  if (score > 95) {
    console.log(`${score} → break (first score above 95)`);
    break;
  }

  console.log(`${score} → printed (between 50 and 95)`);
}

const numbers = [42, 17, 93, 8, 56, 71, 34, 60, 25, 88];

let sum = 0;
let highest = numbers[0];
let lowest = numbers[0];

for (const current of numbers) {
  sum += current;

  if (current > highest) highest = current;

  if (current < lowest) lowest = current;
}

const average = sum / numbers.length;
console.log("Sum:", sum);
console.log("Average:", average);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
