// BURGER
document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});
 
// SCROLL + ACTIVE LINKS
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
 
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
 
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    this.classList.add('active');
 
    document.querySelector('.nav-links').classList.remove('active');
  });
});
 
// QUIZ QUESTIONS
const questions = [
  {q: "Wie hieß Buddha vor der Erleuchtung?", a: "Siddhartha Gautama"},
  {q: "Was bedeutet „Buddha“?", a: "Der Erwachte"},
  {q: "Wie viele Edle Wahrheiten gibt es?", a: "4"},
  {q: "Wie viele Schritte hat der Achtfache Pfad?", a: "8"},
  {q: "Wie heißt die heilige Schrift?", a: "Tripitaka"},
  {q: "Welche Farbe haben Mönchsroben?", a: "Orange"},
  {q: "Wie heißt ein buddhistischer Tempel?", a: "Wat"},
  {q: "Welche Blume steht für Reinheit?", a: "Lotusblume"},
  {q: "Welches Rad symbolisiert die Lehre?", a: "Dharmachakra"},
  {q: "Unter welchem Baum erreichte Buddha Erleuchtung?", a: "Bodhi-Baum"},
  {q: "Was bedeutet der Endlose Knoten?", a: "Alles ist verbunden"},
  {q: "Was macht das Muschelhorn?", a: "Der Klang der Wahrheit"}
];
 
let current = 0;
let score = 0;
 
const quizContainer = document.getElementById('quizContainer');
const startBtn = document.getElementById('startQuiz');
const progressFill = document.getElementById('progressFill');
 
// Start quiz
startBtn.onclick = () => {
  quizContainer.classList.add('active');
  startBtn.style.display = 'none';
  showQuestion();
};
 
function showQuestion() {
  if (current >= questions.length) {
    showResult();
    return;
  }
 
  const percent = ((current) / questions.length) * 100;
  progressFill.style.width = percent + "%";
 
  document.getElementById('progressText').textContent =
    `Frage ${current + 1} von ${questions.length}`;
  document.getElementById('question').textContent = questions[current].q;
 
  const opts = document.getElementById('options');
  opts.innerHTML = '';
 
  const answers = [
    questions[current].a,
    "Nirvana",
    "Karma",
    "Dharma"
  ].sort(() => Math.random() - 0.5);
 
  answers.forEach(ans => {
    const div = document.createElement('div');
    div.textContent = ans;
 
    div.onclick = () => selectAnswer(ans === questions[current].a, div);
    opts.appendChild(div);
  });
 
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('result').style.display = 'none';
}
 
function selectAnswer(correct, element) {
  if (correct) score++;
 
  document.querySelectorAll('#options div').forEach(div => {
    if (div.textContent === questions[current].a) {
      div.classList.add('correct');
    } else {
      div.classList.add('wrong');
    }
    div.onclick = null;
  });
 
  document.getElementById('nextBtn').style.display = 'block';
}
 
document.getElementById('nextBtn').onclick = () => {
  current++;
  showQuestion();
};
 
function showResult() {
  progressFill.style.width = "100%";
  document.getElementById('question').textContent = "Fertig!";
  document.getElementById('options').innerHTML = "";
  document.getElementById('nextBtn').style.display = "none";
 
  document.getElementById('result').style.display = "block";
  document.getElementById('scoreText').textContent =
    `${score} von ${questions.length} richtig`;
}
