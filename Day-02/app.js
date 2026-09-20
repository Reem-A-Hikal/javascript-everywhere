const inputEl = document.getElementById("scoreInput");
const checkBtn = document.getElementById("checkBtn");
const clearBtn = document.getElementById("clearBtn");
const historyList = document.getElementById("historyList");
const messageEl = document.getElementById("message");

const history = [];

function getLetterGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}

function renderHistory() {
  historyList.innerHTML = "";
  for (const row of history) {
    const li = document.createElement("li");
    li.textContent = row;
    historyList.appendChild(li);
  }
}

checkBtn.addEventListener("click", function () {
  const rawValue = inputEl.value;
  const score = Number(inputEl.value);

  if (
    rawValue.trim() === "" ||
    Number.isNaN(score) ||
    score < 0 ||
    score > 100
  ) {
    messageEl.textContent = "Please enter a number between 0 and 100";
    return;
  }

  const grade = getLetterGrade(score);
  history.push(`${score} -> ${grade}`);

  renderHistory();
  messageEl.textContent = `Score ${score} gets a ${grade}.`;

  console.log(history);
  inputEl.value = "";
  inputEl.focus();
});

clearBtn.addEventListener("click", () => {
  history.length = 0;
  renderHistory();
  message.textContent = "";
  inputEl.value = "";
  inputEl.focus();
});
