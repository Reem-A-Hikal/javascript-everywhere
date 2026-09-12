let myName = "Reem Atef";
let myCity = "Cairo";
let whyJoined = "To connect with other developers and share knowledge.";

function createProfile(name, city, reason) {
  return `My name is ${name}, I live in ${city}, and I joined because ${reason}`;
}
console.log(createProfile(myName, myCity, whyJoined));

console.log(`Node version: ${process.version}`);
