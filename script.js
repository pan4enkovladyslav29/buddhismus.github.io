// Бургер-меню
document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Плавный скролл и активное меню
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Подсветка при скролле и анимация fade-in
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
            section.classList.add('fade-in');
        }
    });
    document.querySelectorAll('nav a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) a.classList.add('active');
    });
});

// Квиз
const questions = [
    { q: "Wie hieß der Buddha vor seiner Erleuchtung?", a: "Siddhartha Gautama" },
    { q: "Was bedeutet das Wort „Buddha“ wörtlich?", a: "Der Erwachte" },
    { q: "Wie viele Edle Wahrheiten gibt es?", a: "Vier" },
    { q: "Wie viele Schritte hat der Edle Achtfache Pfad?", a: "Acht" },
    { q: "Was ist das wichtigste Ziel im Buddhismus?", a: "Erleuchtung" },
    { q: "Wie heißt die heilige Schrift des Buddhismus?", a: "Tripitaka" },
    { q: "Welche Farbe haben die Roben der Mönche meistens?", a: "Orange" },
    { q: "Warum tragen Mönche einfache Kleidung?", a: "Bescheidenheit" },
    { q: "Wie nennt man ein buddhistisches Kloster/Tempel?", a: "Wat" },
    { q: "Welche Blume symbolisiert Reinheit und Erleuchtung?", a: "Lotusblume" },
    { q: "Welches Rad steht für die Lehre des Buddha?", a: "Dharmachakra" },
    { q: "Unter welchem Baum wurde Buddha erleuchtet?", a: "Bodhi-Baum" }
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

    updateProgress();

    const q = questions[currentQuestion];
    document.getElementById('question').innerText = `Frage \( {currentQuestion + 1}/12: \){q.q}`;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    const wrong = ['Nirvana', 'Karma', 'Dharma', 'Sangha', 'Vihara', 'Pagode', 'Rot', 'Safran', 'Luxus', 'Tempel', 'Rose', 'Rad'].sort(() => Math.random() - 0.5).slice(0, 3);
    const allOptions = [q.a, ...wrong].sort(() => Math.random() - 0.5);

    allOptions.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt === q.a, btn);
        optionsDiv.appendChild(btn);
    });

    document.getElementById('nextBtn').style.display = 'none';
}

function checkAnswer(correct, btn) {
    if (correct) {
        score++;
        btn.style.background = '#4caf50';
    } else {
        btn.style.background = '#f44336';
    }
    btn.style.color = 'white';

    document.querySelectorAll('.option').forEach(b => b.onclick = null);
    document.getElementById('nextBtn').style.display = 'block';
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentQuestion++;
    showQuestion();
});

function showResult() {
    document.getElementById('question').innerText = 'Quiz beendet!';
    document.getElementById('options').innerHTML = '';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('progress').style.display = 'none';
    document.getElementById('result').classList.remove('result-hidden');
    document.getElementById('result').innerHTML = `<h3>Dein Ergebnis</h3><p class="score-big">\( {score} von \){questions.length} richtig!</p><button onclick="location.reload()" class="quiz-btn">Nochmal spielen</button>`;
}

function updateProgress() {
    const progress = document.getElementById('progress');
    const width = ((currentQuestion + 1) / questions.length) * 100;
    progress.style.background = `linear-gradient(to right, var(--accent) \( {width}%, var(--light) \){width}%)`;
}
