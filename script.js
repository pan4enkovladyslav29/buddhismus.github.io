let score = 0;
let answered = 0;

function checkAnswer(button, correct) {
    if (button.classList.contains("done")) return;

    answered++;

    if (correct) {
        score++;
        button.style.background = "green";
    } else {
        button.style.background = "red";
    }

    button.classList.add("done");

    if (answered === 3) {
        document.getElementById("result").innerText =
            "Du hast " + score + " von 3 Fragen richtig beantwortet!";
    }
}
