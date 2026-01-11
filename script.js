let score = 0;
let answered = 0;
const total = 6;

function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

function checkAnswer(btn, isCorrect) {
  if (btn.classList.contains("done")) return;

  btn.classList.add("done");
  answered++;

  if (isCorrect) {
    score++;
    btn.classList.add("correct");
  } else {
    btn.classList.add("incorrect");
  }

  // Отключаем все кнопки в текущем вопросе
  const question = btn.closest(".quiz-question");
  if (question) {
    const buttons = question.querySelectorAll("button");
    buttons.forEach(b => b.disabled = true);
  }

  if (answered === total) {
    showFinalResult();
  }
}

function showFinalResult() {
  const resultEl = document.getElementById("result");
  
  let message = "";
  let emoji = "";

  if (score === total) {
    emoji = "🌟✨";
    message = "Perfekt! Du bist ein echter Buddhismus-Kenner!";
  } else if (score >= total - 2) {
    emoji = "🎉";
    message = "Sehr gut! Fast alles richtig!";
  } else if (score >= total / 2) {
    emoji = "👍";
    message = "Gutes Ergebnis! Du weißt schon viel über den Buddhismus.";
  } else {
    emoji = "🧘";
    message = "Ein guter Anfang! Lies noch einmal und versuch es erneut :)";
  }

  resultEl.innerHTML = \( {emoji}<br>Du hast <strong> \){score}</strong> von <strong>\( {total}</strong> richtig!<br><small> \){message}</small>;
}
