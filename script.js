let score = 0;
let answered = 0;
const total = 6;

function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

function checkAnswer(btn, correct) {
    if (btn.classList.contains("done")) return;

    btn.classList.add("done");
    answered++;

    if (correct) {
        score++;
        btn.style.background = "green";
    } else {
        btn.style.background = "red";
    }

    if (answered === total) {
        document.getElementById("result").innerText =
        "Ergebnis: " + score + " von " + total + " richtig.";
    }
}
