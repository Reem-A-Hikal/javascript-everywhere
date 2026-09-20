const students = [
  { name: "Reem", score: 92, attendance: 90 },
  { name: "Omar", score: 68, attendance: 70 },
  { name: "Lina", score: 79, attendance: 75 },
  { name: "Ali", score: 85, attendance: 85 },
  { name: "Mona", score: 55, attendance: 40 },
  { name: "Seif", score: "N/A", attendance: 80 },
  { name: "Youssef", score: 73, attendance: 88 },
  { name: "Nour", score: 95, attendance: 92 },
  { name: "Hana", score: 64, attendance: 60 },
  { name: "Khaled", score: 48, attendance: 55 },
  { name: "Mariam", score: 88, attendance: 81 },
];

const counts = { A: 0, B: 0, C: 0, D: 0, F: 0 };

let totalScore = 0;
let validCount = 0;
let atRiskCount = 0;
let skippedCount = 0;

let highestStudent = null;
let lowestStudent = null;

console.log(
  `${"Name".padEnd(9)}${"Score".padEnd(7)}${"Attendance".padEnd(12)}${"Letter".padEnd(7)}Status`,
);

console.log("-".repeat(41));

for (const student of students) {
  if (
    typeof student.score !== "number" ||
    typeof student.attendance !== "number"
  ) {
    console.log(`  Invalid record for ${student.name} — skipping.`);
    skippedCount++;
    continue;
  }

  let letterGrade;
  if (student.score >= 90) {
    letterGrade = "A";
  } else if (student.score >= 80) {
    letterGrade = "B";
  } else if (student.score >= 70) {
    letterGrade = "C";
  } else if (student.score >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  counts[letterGrade]++;
  totalScore += student.score;
  validCount++;

  const isAtRisk = student.score < 60 || student.attendance < 70;
  if (isAtRisk) atRiskCount++;
  const status = isAtRisk ? "At risk" : "OK";

  if (highestStudent === null || student.score > highestStudent.score)
    highestStudent = student;

  if (lowestStudent === null || student.score < lowestStudent.score)
    lowestStudent = student;

  console.log(
    `${student.name.padEnd(9)}${String(student.score).padEnd(7)}${String(student.attendance).padEnd(12)}${letterGrade.padEnd(7)}${status}`
  );
}

console.log("\nGrade counts:");
for (const grade of ["A", "B", "C", "D", "F"]) {
  console.log(`${grade}: ${counts[grade]} students`);
}

const average = validCount > 0 ? (totalScore / validCount).toFixed(1) : "0.0";

console.log(`
Class average: ${average}
Highest score: ${highestStudent.name} (${highestStudent.score})
Lowest score: ${lowestStudent.name} (${lowestStudent.score})
Students at risk: ${atRiskCount}
Invalid records skipped: ${skippedCount}`);
