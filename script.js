/* такой же как раньше, только добавил надёжные стили для квиза */
.quiz-container { display: none; margin-top: 3rem; }
.quiz-container.active { display: block; }
 
.quiz-box {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.12);
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
}
 
.progress-container {
    margin-bottom: 2rem;
    text-align: left;
}
 
.progress-bar {
    height: 8px;
    background: #f0e6d9;
    border-radius: 4px;
    overflow: hidden;
}
 
#progressBar::before {
    content: '';
    display: block;
    height: 100%;
    background: #d4a574;
    width: 8.33%;
    transition: width 0.6s ease;
}
 
#progressText {
    display: block;
    margin-top: 0.5rem;
    font-weight: 600;
    color: #d4a574;
}
 
#question {
    font-size: 1.5rem;
    margin: 1.5rem 0;
    line-height: 1.5;
}
 
.options {
    display: grid;
    gap: 1rem;
    margin: 2rem 0;
}
 
.options div {
    padding: 1.2rem;
    background: #f5e6d3;
    border-radius: 12px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: all 0.3s;
}
 
.options div:hover { background: #d4a574; color: white; }
.options div.correct { background: #27ae60 !important; color: white; }
.options div.wrong { background: #e74c3c !important; color: white; }
 
.next-btn, .quiz-btn.big {
    padding: 1rem 3rem;
    font-size: 1.2rem;
    background: #d4a574;
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    margin-top: 1rem;
}
 
.result {
    display: none;
    margin-top: 2rem;
    padding: 2rem;
    background: #f5e6d3;
    border-radius: 16px;
}
 
.result h3 { color: #d4a574; margin-bottom: 1rem; }
#scoreText { font-size: 2rem; font-weight: bold; color: #2d1e12; }
 
@media (max-width: 768px) {
    .quiz-box { padding: 2rem 1.5rem; }
    #question { font-size: 1.3rem; }
    .options div { padding: 1.4rem; font-size: 1.1rem; }
}
