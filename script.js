let score = 0;
let answered = 0;
const total = 6;

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

function checkAnswer(btn, correct) {
  if (btn.classList.contains("done")) return;

  btn.classList.add("done");
  answered++;

  if (correct) {
    score++;
    btn.classList.add("correct");
  } else {
    btn.classList.add("incorrect");
  }

  // Отключаем кнопки в текущем вопросе
  const parent = btn.parentElement;
  const buttons = parent.querySelectorAll("button");
  buttons.forEach((b) => (b.disabled = true));

  if (answered === total) {
    showFinalResult();
  }
}

function showFinalResult() {
  const resultEl = document.getElementById("result");
  resultEl.innerHTML = `🎉 Super! Du hast <strong>${score}</strong> von <strong>${total}</strong> Fragen richtig beantwortet!`;
  resultEl.style.animation = "fadeIn 1s ease forwards";
}
