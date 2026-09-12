const changeTextBtn = document.getElementById("changeTextBtn");
const logBtn = document.getElementById("logBtn");
const h1 = document.querySelector("h1");

changeTextBtn.addEventListener("click", () => {
  h1.textContent = "Text Changed!";
});

logBtn.addEventListener("click", () => {
  console.log(`My name is ${h1.textContent}`);
});