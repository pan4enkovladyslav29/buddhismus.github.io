body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: #f6f2eb;
  color: #2d1e12;
}

header {
  background: linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)),
  url("https://images.pexels.com/photos/161223/background.jpg") center/cover;
  color: white;
  padding: 6rem 2rem;
  text-align: center;
}

header h1 {
  font-family: 'Cormorant Garamond';
  font-size: 3.5rem;
}

nav {
  background: #d4a574;
  position: sticky;
  top: 0;
}

.nav-container {
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.nav-links {
  display: flex;
  gap: 1.2rem;
  list-style: none;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 600;
}

.burger {
  display: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
}

section {
  max-width: 900px;
  margin: auto;
  padding: 3rem 2rem;
}

.symbols-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
}

.symbol-card {
  background: white;
  padding: 1rem;
  border-radius: 14px;
  text-align: center;
}

.symbol-card img {
  width: 100%;
}

#quizBox {
  display: none;
  background: white;
  padding: 2rem;
  border-radius: 16px;
}

.progress {
  background: #eee;
  height: 10px;
  border-radius: 6px;
}

#progressFill {
  height: 100%;
  width: 0%;
  background: #d4a574;
}

#options div {
  background: #f3e5d4;
  padding: 1rem;
  margin: .5rem 0;
  border-radius: 12px;
  cursor: pointer;
}

.correct { background: #2ecc71; color: white; }
.wrong { background: #e74c3c; color: white; }

.btn {
  padding: 1rem 2rem;
  background: #d4a574;
  border: none;
  border-radius: 40px;
  color: white;
  cursor: pointer;
  margin-top: 1rem;
}

footer {
  text-align: center;
  padding: 2rem;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: absolute;
    right: 0;
    top: 60px;
    background: #d4a574;
    flex-direction: column;
    width: 200px;
  }
  .nav-links.active { display: flex; }
  .burger { display: block; }
}
