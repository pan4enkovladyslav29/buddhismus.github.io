// Бургер-меню
document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Плавный скролл и активное меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
        // Закрыть меню на телефоне
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Подсветка при скролле
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        if (window.scrollY >= section.offsetTop - 200) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) a.classList.add('active');
    });
});

// === КВИЗ ===
const questions = [
    { q: "Wie hieß der Buddha vor seiner Erleuchtung?", a: "Siddhartha Gautama" },
    { q: "Was bedeutet das Wort „Buddha“?", a: "Der Erwachte" },
    { q: "Wie viele Edle Wahrheiten gibt es?", a: "4" },
    { q: "Wie viele Schritte hat der Edle Achtfache Pfad?", a: "8" },
    { q: "Wie heißt die heilige Schrift des Buddhismus?", a: "Tripitaka" },
    { q: "Welche Farbe haben die Roben der Mönche meistens?", a: "Orange / Safran" },
    { q: "Wie nennt man einen buddhistischen Tempel?", a: "Wat / Vihara / Pagode" },
    { q: "Welche Blume symbolisiert Reinheit?", a: "Lotusblume" },
    { q: "Welches Rad steht für die Lehre des Buddha?", a: "Dharmachakra" },
    { q: "Unter welchem Baum wurde Buddha erleuchtet?", a: "Bodhi-Baum" },
    { q: "Was bedeutet der Endlose Knoten?", a: "Alles ist miteinander verbunden" },
    { q: "Was macht das Muschelhorn?", a: "Der Klang der Wahrheit trägt weit" }
];

let currentQuestion = 0;
let score = 0;

document.getElementById('startQuiz').addEventListener('click', () => {
    document.getElementById('quizContainer').classList.remove('quiz-hidden');
    document.getElementById('startQuiz').style.display = 'none';
    showQuestion();
});

function showQuestion() {
    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }

    const q = questions[currentQuestion];
    document.getElementById('question').innerHTML = `<strong>Frage \( {currentQuestion+1}:</strong> \){q.q}`;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    // Перемешиваем варианты (здесь просто 3 варианта + правильный)
    const wrong = ["Nirwana", "Karma", "Samsara", "Dharma", "Sangha", "Mandala", "Bodhi", "Lotus"];
    const all = [q.a, ...wrong.slice(0,3)];
    all.sort(() => Math.random() - 0.5);

    all.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option';
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(opt === q.a, btn);
        optionsDiv.appendChild(btn);
    });

    document.getElementById('nextBtn').style.display = 'none';
}

function checkAnswer(correct, btn) {
    if (correct) {
        score++;
        btn.style.background = '#27ae60';
        btn.style.color = 'white';
    } else {
        btn.style.background = '#e74c3c';
        btn.style.color = 'white';
    }

    document.querySelectorAll('.option').forEach(b => b.onclick = null);
    document.getElementById('nextBtn').style.display = 'block';
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentQuestion++;
    document.getElementById('options').innerHTML = '';
    showQuestion();
});

function showResult() {
    document.getElementById('question').textContent = 'Quiz beendet!';
    document.getElementById('options').innerHTML = '';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('result').classList.remove('result-hidden');
    document.getElementById('result').innerHTML = `
        <h3>Super gemacht!</h3>
        <p>Du hast <strong>\( {score} von \){questions.length}</strong> Fragen richtig beantwortet.</p>
        <button onclick="location.reload()" class="quiz-btn" style="margin-top:2rem;">Nochmal spielen</button>
    `;
}
