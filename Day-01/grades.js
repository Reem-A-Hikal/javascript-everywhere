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

for (const student of grades) {
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
}


console.log(
  `Summary: ${excellentCount} Excellent, ${goodCount} Good, ${needsWorkCount} Needs work.`,
);