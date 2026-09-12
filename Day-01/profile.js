let myName = "Reem Atef";
let myCity = "Cairo";
let whyJoined = "To connect with other developers and share knowledge.";

function createProfile(name, city, reason) {
  return `My name is ${name}, I live in ${city}, and I joined because ${reason}`;
}
console.log(createProfile(myName, myCity, whyJoined));

console.log(`Node version: ${process.version}`);

// Made profile.js read a value from the command line with process.argv
const nameFromArg = process.argv[2] || myName;
const cityFromArg = process.argv[3] || myCity;
const reasonFromArg = process.argv[4] || whyJoined;

console.log(createProfile(nameFromArg, cityFromArg, reasonFromArg));