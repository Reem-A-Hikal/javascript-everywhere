// const myName = "Reem Atef";
// let myName = "Reem Heikal";

// const student = {
//   name: "Reem Atef",
//   age: 25,
// };

// student.favoriteLanguage = "JavaScript";
// console.log(student.favoriteLanguage);

// let score = 50;
// if (score >= 90) {
//   console.log("You got an A!");
// } else if (score <= 50) {
//   console.log("You failed the test.");
// }
///////////////////////
// const tracks = [
//   "Track",
//   "Track Two",
//   "Track Three",
//   "Track Four",
//   "Track Five",
// ];

// for (const track of tracks) {
//   if (track.length > 6) {
//     console.log(track);
//   }
// }

//////////////////////////

const students = [
  { name: "Sara", score: 92 },
  { name: "Omar", score: 68 },
  { name: "Lina", score: 79 },
];
let passedcount = 0;
let totalStudents = students.length;
for (const student of students) {
  if (student.score >= 70) {
    console.log(`${student.name}: ${student.score} → PASS`);
    passedcount++;
  } else if (student.score < 70) {
    console.log(`${student.name}: ${student.score} → FAIL`);
  }
}
console.log(`${passedcount} of ${totalStudents} students passed.`);
