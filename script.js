let score = 0;
let answered = 0;

function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

function checkAnswer(btn, correct) {
    if (btn.classList.contains("done")) return;

    answered++;
    btn.classList.add("done");

    if (correct) {
        score++;
        btn.style.background = "green";
    } else {
        btn.style.background = "red";
    }

    if (answered === 3) {
        document.getElementById("result").innerText =
            "Du hast " + score + " von 3 richtig!";
    }
}
