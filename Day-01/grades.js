const grades = [
  { name: "Sara", score: 92 },
  { name: "Omar", score: 68 },
  { name: "Lina", score: 79 },
  { name: "Ali", score: 85 },
  { name: "Mona", score: 55 },
];

let passedCount = 0;
let totalStudents = grades.length;
let excellentCount = 0;
let goodCount = 0;
let needsWorkCount = 0;

// for (const student of grades) {
//   if (student.score >= 90) {
//     console.log(`${student.name}: ${student.score} → Excellent`);
//     excellentCount++;
//   } else if (student.score >= 70 && student.score <= 89) {
//     console.log(`${student.name}: ${student.score} → Good`);
//     goodCount++;
//   } else if (student.score < 70) {
//     console.log(`${student.name}: ${student.score} → Needs work`);
//     needsWorkCount++;
//   }
// }

// console.log(
//   `Summary: ${excellentCount} Excellent, ${goodCount} Good, ${needsWorkCount} Needs work.`,
// );

grades.forEach((student) => {
  if (student.score >= 90) {
    console.log(`${student.name}: ${student.score} → Excellent`);
    excellentCount++;
  } else if (student.score >= 70 && student.score <= 89) {
    console.log(`${student.name}: ${student.score} → Good`);
    goodCount++;
  } else if (student.score < 70) {
    console.log(`${student.name}: ${student.score} → Needs work`);
    needsWorkCount++;
  }
});

console.log(
  `Summary: ${excellentCount} Excellent, ${goodCount} Good, ${needsWorkCount} Needs work.`,
);

const newGrades = [
  { name: "Hana", score: 95 },
  { name: "Youssef", score: 82 },
  { name: "Nour", score: 67 },
  { name: "Rania", score: 91 }
];

let theHighestScore = Math.max(...newGrades.map(student => student.score));
console.log(`The highest score is: ${theHighestScore}`);