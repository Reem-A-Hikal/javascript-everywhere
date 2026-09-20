let grades = [
  { name: "Sara", score: 92, attendance: 90 },
  { name: "Omar", score: 68, attendance: 70 },
  { name: "Lina", score: 79, attendance: 75 },
  { name: "Ali", score: 85, attendance: 85 },
  { name: "Mona", score: 55, attendance: 40 },
];

for (const studentGrade of grades) {
  if (studentGrade.score < 0 || studentGrade.score > 100) {
    console.log(`${studentGrade.name}: ${studentGrade.score} → Invalid score`);
    continue;
  }
  let letterGrade;
  if (studentGrade.score >= 90) {
    letterGrade = "A";
  } else if (studentGrade.score >= 80) {
    letterGrade = "B";
  } else if (studentGrade.score >= 70) {
    letterGrade = "C";
  } else if (studentGrade.score >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  console.log(`${studentGrade.name}: ${studentGrade.score} → ${letterGrade}`);
}

///////////////////////////////////
let passOrFail = (score) => (score >= 60 ? "pass" : "fail");

// Commented why I would not write the five-band version as a nested ternary
// because it can become difficult to read and understand, especially for those who are not familiar with the syntax.
// using if-else statements structure can provide clearer logic and improve readability.

// switch statement
console.log("//////////////////////////////");
for (const student of grades) {
  if (student.score < 0 || student.score > 100) {
    console.log(`${student.name}: ${student.score} → Invalid score`);
    continue;
  }

  if (student.score) {
    let letterGrade;
    switch (true) {
      case student.score >= 90:
        letterGrade = "A";
        break;
      case student.score >= 80:
        letterGrade = "B";
        break;
      case student.score >= 70:
        letterGrade = "C";
        break;
      case student.score >= 60:
        letterGrade = "D";
        break;
      default:
        letterGrade = "F";
    }

    const isCertificateAwarded =
      student.score >= 70 && student.attendance >= 80;

    const isReviewNeeded = student.score < 60 || student.attendance < 50;

    console.log(
      `${student.name}: ${student.score} → ${letterGrade} | Certificate: ${isCertificateAwarded ? "Awarded" : "Not Awarded"} ${isReviewNeeded ? "| Review: Needed" : ""}`,
    );
  }
}
